import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || "",
});

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    // Check if API key exists
    if (!process.env.GROQ_API_KEY) {
      console.error("⚠️ GROQ_API_KEY not found");
      return NextResponse.json(
        { 
          reply: "I'm currently unavailable. Please request a live agent for assistance.", 
          source: "error",
          reason: "no_api_key" 
        },
        { status: 503 }
      );
    }

    // Use Groq AI
    console.log("✅ GROQ_API_KEY found - attempting Groq API call");
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a helpful customer service assistant for LuxeStore, a premium e-commerce website.

Store Information & Product Links:

ELECTRONICS:
1. Wireless Headphones - $299.99
   Link: https://luxe-store-lilac.vercel.app/product/1
2. Smart Watch Pro - $399.99
   Link: https://luxe-store-lilac.vercel.app/product/2
7. Portable Speaker - $149.99
   Link: https://luxe-store-lilac.vercel.app/product/7
8. Premium Camera - $1,299.99
   Link: https://luxe-store-lilac.vercel.app/product/8

ACCESSORIES:
3. Designer Backpack - $129.99
   Link: https://luxe-store-lilac.vercel.app/product/3
4. Leather Wallet - $79.99
   Link: https://luxe-store-lilac.vercel.app/product/4
6. Sunglasses - $189.99
   Link: https://luxe-store-lilac.vercel.app/product/6

FOOTWEAR:
5. Running Shoes - $159.99
   Link: https://luxe-store-lilac.vercel.app/product/5

Other Pages:
- Shop All: https://luxe-store-lilac.vercel.app/shop
- Collections: https://luxe-store-lilac.vercel.app/collections
- Contact: https://luxe-store-lilac.vercel.app/contact

Store Policies:
- Free shipping on orders over $100
- 3-5 business days standard delivery
- 30-day return policy
- We accept all major credit cards, PayPal, Apple Pay, Google Pay
- Average rating: 4.7/5 stars
- 10,000+ happy customers

Guidelines:
- Be professional, helpful, and concise (2-3 sentences max)
- ALWAYS provide DIRECT PRODUCT LINKS when customers ask about specific products
- Example: "Here's our Running Shoes for $159.99: https://luxe-store-lilac.vercel.app/product/5"
- If you don't know something specific, suggest contacting a live agent
- Stay focused on helping customers find products and answering store-related questions
- For complaints, apologize professionally and offer to escalate to a live agent`,
        },
        {
          role: "user",
          content: message,
        },
      ],
      model: "llama-3.1-8b-instant",
      temperature: 0.7,
      max_tokens: 150,
    });

    const reply = chatCompletion.choices[0]?.message?.content || "I'm having trouble responding right now. Please request a live agent.";
    console.log("✅ Groq API success");
    return NextResponse.json({ reply, source: "groq" });

  } catch (error: any) {
    console.error("❌ Groq API error:", error.message);
    return NextResponse.json(
      { 
        reply: "I'm currently experiencing technical difficulties. Please request a live agent for immediate assistance.", 
        source: "error",
        error: error.message 
      },
      { status: 500 }
    );
  }
}

