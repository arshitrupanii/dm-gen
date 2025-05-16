import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request) {

  try {
    const data = await request.json();
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
    - Name: ${data.userDetails.fullName || "Not specified"}
    - Role: ${data.userDetails.jobTitle || "Not specified"}
    - Company: ${data.userDetails.companyName || "Not specified"}
    - Experience Level: ${data.userDetails.experienceLevel || "Not specified"}
    
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

    return Response.json({ message: text });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}