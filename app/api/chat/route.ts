import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || "",
});

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    // Try to use Groq AI if API key is configured
    if (process.env.GROQ_API_KEY) {
      try {
        const chatCompletion = await groq.chat.completions.create({
          messages: [
            {
              role: "system",
              content: `You are a helpful customer service assistant for LuxeStore, a premium e-commerce website.

Store Information:
- We sell Electronics (wireless headphones $299.99, smartwatches $399.99, portable speakers $149.99, cameras $1,299.99)
- Accessories (leather wallets $79.99, designer backpacks $129.99, sunglasses $189.99)
- Footwear (running shoes $159.99)
- Free shipping on orders over $100
- 3-5 business days standard delivery
- 30-day return policy
- We accept all major credit cards, PayPal, Apple Pay, Google Pay
- Average rating: 4.7/5 stars
- 10,000+ happy customers

Guidelines:
- Be professional, helpful, and concise (2-3 sentences max)
- If you don't know something specific, suggest contacting a live agent
- Stay focused on helping customers find products and answering store-related questions
- For complaints, apologize professionally and offer to escalate to a live agent
- Always try to redirect back to products and assistance`,
            },
            {
              role: "user",
              content: message,
            },
          ],
          model: "llama3-8b-8192",
          temperature: 0.7,
          max_tokens: 150,
        });

        const reply = chatCompletion.choices[0]?.message?.content || getFallbackResponse(message);
        return NextResponse.json({ reply });
      } catch (groqError) {
        console.log("Groq API error, using fallback");
      }
    }

    // Fallback to smart hardcoded responses
    const reply = getFallbackResponse(message);
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { reply: "I apologize for the inconvenience. Please try again or request a live agent." },
      { status: 500 }
    );
  }
}

function getFallbackResponse(message: string): string {
  const msg = message.toLowerCase();

  if (msg.match(/\b(shoe|footwear|sneaker)\b/)) {
    return "Yes, we offer premium running shoes for $159.99 with advanced cushioning technology. You can view them in our Shop section under the 'Footwear' category. Free shipping is included on orders over $100.";
  }

  if (msg.match(/\b(ship|deliver|delivery)\b/)) {
    return "We offer free shipping on orders over $100. Standard delivery takes 3-5 business days. Express shipping (1-2 days) is available for $15.";
  }

  if (msg.match(/\b(return|refund)\b/)) {
    return "We have a 30-day return policy. Products must be unused and in original packaging. Returns are free, and refunds are processed within 5-7 business days.";
  }

  if (msg.match(/\b(price|cost|how much)\b/)) {
    return "Our products range from $79.99 for wallets to $1,299.99 for professional cameras. We offer free shipping on orders over $100.";
  }

  return "I'm here to assist you. I can provide information about products, pricing, shipping, returns, and payments. What would you like to know, or would you prefer to request a live agent?";
}

