import { GoogleGenerativeAI } from "@google/generative-ai";
import { useUser } from "@/app/personal-details/page";

export async function POST(request) {
  const formData = useUser();
  console.log(formData);
  try {
    const data = await request.json();
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `Generate a professional and engaging ${data.messageType} for ${data.platform} (150-200 words).  

    Tone: ${data.tone}  
    Objective: ${data.purpose}  
    Key Points: ${data.keyPoints}  
    Recipient: ${data.recipientDetails}  
    
    Guidelines:  
    1. Start with a clear and relevant introduction.  
    2. Keep sentences concise and meaningful.  
    3. Maintain a natural, engaging flow.  
    4. Personalize the message based on recipient details.  
    5. Ensure proper grammar, readability, and structure.  
    6. End with a strong, actionable closing statement.  
    
    The message should feel authentic, compelling, and aligned with the platform's communication style.`;


    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return Response.json({ message: text });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}