import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request) {
  try {
    const data = await request.json();
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `Generate a professional ${data.messageType} message with the following details:
    - Platform: ${data.platform}
    - Tone: ${data.tone}
    - Purpose: ${data.purpose}
    - Key Points: ${data.keyPoints}
    - Recipient: ${data.recipientDetails}
    
    Make it sound natural and engaging. and that output must be range 200 words to 250 words`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return Response.json({ message: text });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}