import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { 
          error: "OpenAI API key not configured. Please add OPENAI_API_KEY to your environment variables.",
          fallback: "I apologize, but I'm not fully configured yet. Please request a live agent for assistance!"
        },
        { status: 200 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a helpful customer service AI assistant for LuxeStore, a premium e-commerce website. 

Store Information:
- We sell Electronics (wireless headphones $299.99, smartwatches $399.99, portable speakers $149.99, cameras $1299.99)
- Accessories (leather wallets $79.99, designer backpacks $129.99, sunglasses $189.99)
- Footwear (running shoes $159.99)
- Free shipping on orders over $100
- 3-5 business days standard delivery
- 30-day return policy
- We accept all major credit cards, PayPal, Apple Pay, Google Pay
- Average rating: 4.7/5 stars
- 10,000+ happy customers

Guidelines:
- Be friendly, helpful, and professional
- Keep responses concise (2-3 sentences max)
- If you don't know something specific, suggest contacting a live agent
- Encourage browsing the Shop section
- For complaints, apologize and offer to escalate to a live agent
- Be enthusiastic about our products!`,
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 150,
    });

    const reply = completion.choices[0]?.message?.content || "I'm here to help! What would you like to know?";

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("OpenAI API Error:", error);
    return NextResponse.json(
      { 
        error: "Failed to get AI response",
        fallback: "I'm having trouble connecting right now. Could you try asking again, or request a live agent?"
      },
      { status: 200 }
    );
  }
}

