import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getSolarConsultation = async (userPrompt: string, history: {role: string, parts: {text: string}[]}[] = []): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Convert simplified history to API format if needed, 
    // but for single turn or simple chat we can just use sendMessage with history handled in the chat object
    // For this simple implementation, we will use a fresh chat or manage history locally.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: `You are 'Sunny', an expert solar energy consultant for SunVault. 
        Your tone is professional yet enthusiastic and futuristic.
        Keep answers concise (under 80 words) and helpful.
        Focus on: Solar efficiency, battery storage (SunVault Battery), and weather resistance (IPX8).
        If asked about pricing, suggest they contact our sales team.`,
      },
      history: history // Pass previous context
    });

    const result = await chat.sendMessage({ message: userPrompt });
    return result.text || "I'm having trouble connecting to the solar grid. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our systems are currently recalibrating. Please try again later.";
  }
};