import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request) {
  try {
    const data = await request.json();
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
You are DM Genie, a smart and intuitive AI assistant that writes messages the way a skilled human would — authentic, personalized, and platform-aware.

Your task is to generate a high-quality ${data.messageType} message specifically crafted for ${data.platform}, using the sender’s background and intent. The final message should **feel like it was written by a real person**, not an AI.

🎯 MESSAGE OBJECTIVE:
Write a ${data.tone} message (100–200 words depending on the platform) that is aligned with the sender's intent and reads like a real conversation or professional communication.

🧑‍💼 SENDER PROFILE:
- Name: ${data.userDetails.fullName}
- Role: ${data.userDetails.jobTitle}
- Company: ${data.userDetails.companyName || "Not specified"}
- Experience Level: ${data.userDetails.experienceLevel}

📨 MESSAGE CONTEXT:
- Platform: ${data.platform}
- Message Type: ${data.messageType}
- Tone: ${data.tone}
- Purpose: ${data.purpose}
- Key Points: ${data.keyPoints || "Not specified"}
- Recipient: ${data.recipientDetails}

✍️ HUMAN-LIKE WRITING GUIDELINES: Message be short and point to point not add any fency word which's not easy to understand humans.
1. Start with a natural and personalized greeting (especially for DMs like Twitter, LinkedIn, Instagram).
2. Show credibility by referencing the sender’s background and motivation.
3. Mirror how people write on ${data.platform} — 
   - Keep it casual and brief on Twitter, WhatsApp, and Instagram.
   - More polished and structured for LinkedIn and Email.
4. Weave in the key points and purpose naturally.
5. Include emojis, paragraph breaks, or platform styling if ${data.platform} supports and expects it.
6. End with a warm and respectful call to action (CTA).
7. Prioritize natural tone, human-like flow, and message relevance.
8. Avoid robotic phrasing. Use contractions (I’m, I’d, it’s), varied sentence lengths, and natural transitions.
9. Never include reasoning, planning, or any steps — only the final message.

🧾 OUTPUT:
Return only the final message. It should feel like it was written by a thoughtful human with real intent, not a machine.
`;



    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return Response.json({ message: text });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}