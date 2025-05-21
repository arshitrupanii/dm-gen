import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from 'utils/supabase/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Get user details from Supabase
    const supabase = await createClient();
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    
    if (userError || !user) {
      return Response.json({ error: 'Unauthorized - Please sign in' }, { status: 401 });
    }

    // Fetch user details and profile info
    const [userDetailsResult, profileResult] = await Promise.all([
      supabase
        .from('user_details')
        .select('fullName, jobTitle, companyName, experienceLevel')
        .eq('user_id', user.id)
        .single(),
      supabase
        .from('profiles')
        .select('freetierusage, freetiertimes')
        .eq('id', user.id)
        .single()
    ]);

    // Handle user details error
    if (userDetailsResult.error) {
      return Response.json({ error: 'Failed to fetch user details' }, { status: 500 });
    }

    // Handle profile error
    if (profileResult.error) {
      return Response.json({ error: 'Failed to fetch profile information' }, { status: 500 });
    }

    const userDetails = userDetailsResult.data;
    const profile = profileResult.data;
    const currentUsage = profile.freetiertimes || 0;

    // Check if user has already reached the free tier limit (5 messages)
    if (currentUsage >= 5) {
      // Update freetierusage to false when limit is reached
      await supabase
        .from('profiles')
        .update({ 
          freetierusage: false,
          freetiertimes: 5 // Ensure it doesn't exceed 5
        })
        .eq('id', user.id);

      return Response.json({ 
        error: 'Free tier limit reached',
        subscriptionRequired: true,
        message: 'You have used all 5 free messages. Upgrade to a subscription plan to continue generating unlimited messages.',
        usage: {
          current: 5,
          remaining: 0,
          isFreeTier: true,
          limitReached: true
        }
      }, { status: 403 });
    }

    // Calculate new usage count
    const newUsageCount = currentUsage + 1;
    const isLastFreeMessage = newUsageCount === 5;

    // Allow message generation if freetiertimes is less than 5 and freetierusage is false
    if (profile.freetierusage) {
      return Response.json({ 
        error: 'Subscription required',
        subscriptionRequired: true,
        message: 'Please upgrade to a subscription plan to continue generating messages.',
        usage: {
          current: currentUsage,
          remaining: 5 - currentUsage,
          isFreeTier: true
        }
      }, { status: 403 });
    }

    // Increment freetiertimes and update freetierusage if this is the last message
    const { error: incrementError } = await supabase
      .from('profiles')
      .update({ 
        freetiertimes: newUsageCount,
        // Set freetierusage to false only when reaching the limit
        freetierusage: isLastFreeMessage ? 0 : profile.freetierusage
      })
      .eq('id', user.id);

    if (incrementError) {
      console.log(incrementError);
      return Response.json({ error: 'Failed to update usage count' }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
    # 💌 MESSAGE GENIE 💌
    You are Message Genie, a smart and intuitive AI assistant that writes messages the way a skilled human would — authentic, personalized, and platform-aware.
    
    ## TASK
    Generate a high-quality ${data.messageType} for ${data.platform}, using the sender's background and intent. The final message should feel genuinely human-written.
    
    ## ERROR HANDLING
    - If any required parameters are missing or unclear, respond with: "I'm sorry, but some important details are unclear. Could you please provide more information about [specific missing detail]? 😊"
    - If the platform specified isn't supported, respond with: "Sorry, I don't currently support messages for ${data.platform}. Here are the platforms I can help with: Email, LinkedIn, Twitter, Instagram, WhatsApp. 🙂"
    
    ## 🧑‍💼 SENDER PROFILE
    - Name: ${userDetails?.fullName || "Not specified"}
    - Role: ${userDetails?.jobTitle || "Not specified"}
    - Company: ${userDetails?.companyName || "Not specified"}
    - Experience Level: ${userDetails?.experienceLevel || "Not specified"}
    
    ## 📨 MESSAGE CONTEXT
    - Platform: ${data.platform}
    - Message Type: ${data.messageType}
    - Tone: ${data.tone}
    - Purpose: ${data.purpose}
    - Key Points: ${data.keyPoints || "Not specified"}
    - Recipient: ${data.recipientDetails || "Not specified"}
    
    ## ✍️ HUMAN-LIKE WRITING GUIDELINES
    1. **Authentic Opening**: Start with a natural, personalized greeting appropriate for ${data.platform}
    2. **Credibility Factors**: Reference sender's background when relevant
    3. **Platform-Specific Style**:
       - Twitter/Instagram/WhatsApp: Casual, brief (100-150 words)
       - LinkedIn/Email: More professional, structured (150-200 words)
    4. **Natural Flow**: Integrate key points conversationally
    5. **Appropriate Formatting**:
       - Use emojis sparingly for casual platforms (1-2 maximum)
       - Include paragraph breaks for readability
       - Follow platform conventions (e.g., hashtags for Twitter/Instagram)
    6. **Compelling Closing**: End with a warm, clear call to action
    7. **Human Voice**: Use contractions, varied sentence lengths, and natural transitions
    8. **Simplicity**: Avoid jargon and overly complex language
    
    ## LENGTH GUIDELINES
    - Twitter/WhatsApp/Instagram DMs: 100-150 words
    - LinkedIn/Email: 150-200 words
    - Adjust based on purpose (introductions shorter, proposals longer)
    
    ## OUTPUT FORMAT
    Return only the final message as it would appear on the platform. No explanations or metadata.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return Response.json({ 
      message: text,
      usage: {
        current: newUsageCount,
        remaining: 5 - newUsageCount,
        isFreeTier: true,
        limitReached: isLastFreeMessage
      }
    });
  } catch (error) {
    console.error('Generation error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}