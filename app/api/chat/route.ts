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
      console.log("⚠️ GROQ_API_KEY not found - using fallback responses");
      const reply = getFallbackResponse(message);
      return NextResponse.json({ reply, source: "fallback", reason: "no_api_key" });
    }

    // Try to use Groq AI
    console.log("✅ GROQ_API_KEY found - attempting Groq API call");
    try {
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

      const reply = chatCompletion.choices[0]?.message?.content || getFallbackResponse(message);
      console.log("✅ Groq API success");
      return NextResponse.json({ reply, source: "groq" });
    } catch (groqError: any) {
      console.error("❌ Groq API error:", groqError.message);
      const reply = getFallbackResponse(message);
      return NextResponse.json({ reply, source: "fallback", reason: "groq_error", error: groqError.message });
    }
  } catch (error: any) {
    console.error("❌ Chat error:", error);
    return NextResponse.json(
      { reply: "I apologize for the inconvenience. Please try again or request a live agent.", source: "error" },
      { status: 500 }
    );
  }
}

function getFallbackResponse(message: string): string {
  const msg = message.toLowerCase();

  // Specific product requests
  if (msg.match(/\b(headphone|earphone|audio)\b/)) {
    return "Check out our Wireless Headphones for $299.99: https://luxe-store-lilac.vercel.app/product/1. Premium sound quality with noise cancellation!";
  }

  if (msg.match(/\b(watch|smartwatch)\b/)) {
    return "Our Smartwatch is available for $399.99: https://luxe-store-lilac.vercel.app/product/2. Includes fitness tracking and heart rate monitoring!";
  }

  if (msg.match(/\b(backpack|bag)\b/)) {
    return "Check out our Designer Backpack for $129.99: https://luxe-store-lilac.vercel.app/product/3. Durable and stylish with laptop compartment!";
  }

  if (msg.match(/\b(wallet)\b/)) {
    return "Our Leather Wallet is $79.99: https://luxe-store-lilac.vercel.app/product/4. Genuine leather with RFID protection!";
  }

  if (msg.match(/\b(shoe|footwear|sneaker|running)\b/)) {
    return "Our Running Shoes are $159.99: https://luxe-store-lilac.vercel.app/product/5. Advanced cushioning technology and breathable design!";
  }

  if (msg.match(/\b(sunglass|shades)\b/)) {
    return "View our Sunglasses for $189.99: https://luxe-store-lilac.vercel.app/product/6. UV400 protection with polarized lenses!";
  }

  if (msg.match(/\b(speaker|bluetooth speaker)\b/)) {
    return "View our Portable Speaker for $149.99: https://luxe-store-lilac.vercel.app/product/7. 360° sound with 20-hour battery life!";
  }

  if (msg.match(/\b(camera|photography)\b/)) {
    return "Our Premium Camera is $1,299.99: https://luxe-store-lilac.vercel.app/product/8. 4K video and professional-grade features!";
  }

  // General requests
  if (msg.match(/\b(link|url|buy|purchase|where to buy|show me)\b/)) {
    return "Browse all products: https://luxe-store-lilac.vercel.app/shop. Tell me what you're looking for and I'll send you the direct link!";
  }

  if (msg.match(/\b(ship|deliver|delivery)\b/)) {
    return "We offer free shipping on orders over $100. Standard delivery takes 3-5 business days. Express shipping (1-2 days) is available for $15.";
  }

  if (msg.match(/\b(return|refund)\b/)) {
    return "We have a 30-day return policy. Products must be unused and in original packaging. Returns are free, and refunds are processed within 5-7 business days.";
  }

  if (msg.match(/\b(price|cost|how much)\b/)) {
    return "Our products range from $79.99 to $1,299.99. View all: https://luxe-store-lilac.vercel.app/shop. Free shipping on orders over $100!";
  }

  return "I'm here to help! I can provide direct links to any product. Browse our store: https://luxe-store-lilac.vercel.app/shop or tell me what you're looking for!";
}

