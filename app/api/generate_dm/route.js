import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request) {
  try {
    const data = await request.json();
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `Generate a professional ${data.messageType} message for ${data.platform} (150-200 words).

    Sender Details:
    - Name: ${data.userDetails.fullName}
    - Role: ${data.userDetails.jobTitle}
    - Company: ${data.userDetails.companyName || 'Not specified'}
    - Experience Level: ${data.userDetails.experienceLevel}

    Message Requirements:
    - Platform: ${data.platform}
    - Type: ${data.messageType}
    - Tone: ${data.tone}
    - Purpose: ${data.purpose}
    - Key Points: ${data.keyPoints || 'Not specified'}
    - Recipient: ${data.recipientDetails}

    Guidelines:
    1. Start with a personalized introduction that establishes credibility based on sender's role and experience
    2. Keep the message concise and platform-appropriate (${data.platform} style)
    3. Maintain the specified tone (${data.tone}) throughout
    4. Include relevant key points naturally in the flow
    5. End with a clear call-to-action
    6. Ensure proper grammar and professional formatting
    7. Adapt the message length and style to ${data.platform}'s conventions
    8. Use appropriate emojis or formatting based on the platform (${data.platform})

    The message should feel authentic, personalized, and aligned with both the sender's professional background and the platform's communication style.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return Response.json({ message: text });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}