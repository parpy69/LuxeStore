"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your LuxeStore AI assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [agentRequested, setAgentRequested] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to render text with clickable links
  const renderMessageText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline font-semibold break-all"
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const getAIResponse = async (userMessage: string): Promise<string> => {
    // Try to use API
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("🤖 Response source:", data.source || "unknown");
        if (data.reason) {
          console.log("ℹ️ Reason:", data.reason);
        }
        if (data.error) {
          console.error("⚠️ API Error:", data.error);
        }
        return data.reply;
      }
    } catch (error) {
      console.error("❌ API error, using local fallback:", error);
    }

    // Fallback to local logic
    console.log("🔄 Using local fallback responses");
    return getLocalResponse(userMessage);
  };

  const getLocalResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    // Greetings
    if (msg.match(/^(hi|hello|hey|good morning|good afternoon|good evening|sup|yo)$/)) {
      return "Hello! Welcome to LuxeStore. How may I assist you today?";
    }

    // Thanks
    if (msg.match(/(thank|thanks|thx|appreciate)/)) {
      return "You're very welcome! Is there anything else I can assist you with today?";
    }

    // Compliments
    if (msg.match(/(good job|great|awesome|amazing|excellent|love it|fantastic|wonderful|nice|cool|impressive|well done)/)) {
      return "Thank you for the kind words! I'm here to help you find what you need. Is there anything specific I can assist you with today?";
    }

    // Website complaints - MORE SPECIFIC MATCHING
    if (msg.includes("website") || msg.includes("site") || msg.includes("store") || msg.includes("page")) {
      if (msg.match(/(don'?t like|hate|ugly|bad|terrible|not good|dislike)/)) {
        return "I apologize for your experience. Your feedback is valuable to us. Could you specify what you'd like to see improved? I can also connect you with our team via the 'Request Live Agent' button for further assistance.";
      }
      if (msg.match(/(look|design|layout|appearance)/)) {
        return "Thank you for your feedback on our design. We continuously work to improve our user experience. What specific changes would you suggest? Feel free to request a live agent if you'd like to discuss this in detail.";
      }
    }

    // General complaints
    if (msg.match(/(problem|issue|complaint|not working|broken|error)/)) {
      return "I apologize for the inconvenience. I'm here to help resolve this. Could you provide more details about the issue? Alternatively, click 'Request Live Agent' for immediate assistance.";
    }

    // Specific product requests
    if (msg.match(/(headphone|earphone|earbud|audio)/)) {
      return "Check out our Wireless Headphones for $299.99: https://luxe-store-lilac.vercel.app/product/1\n\nPremium sound quality with noise cancellation!";
    }

    if (msg.match(/(watch|smartwatch)/)) {
      return "Our Smartwatch is available for $399.99: https://luxe-store-lilac.vercel.app/product/2\n\nIncludes fitness tracking and heart rate monitoring!";
    }

    if (msg.match(/(speaker|bluetooth)/)) {
      return "View our Portable Speaker for $149.99: https://luxe-store-lilac.vercel.app/product/3\n\n360° sound with 20-hour battery life!";
    }

    if (msg.match(/(camera|photography)/)) {
      return "Our Professional Camera is $1,299.99: https://luxe-store-lilac.vercel.app/product/4\n\n4K video and professional-grade features!";
    }

    if (msg.match(/(shoe|footwear|sneaker|running|trainer)/)) {
      return "Our Running Shoes are $159.99: https://luxe-store-lilac.vercel.app/product/5\n\nAdvanced cushioning technology and breathable design!";
    }

    if (msg.match(/(backpack|bag)/)) {
      return "Check out our Designer Backpack for $129.99: https://luxe-store-lilac.vercel.app/product/6\n\nDurable and stylish with laptop compartment!";
    }

    if (msg.match(/(wallet)/)) {
      return "Our Leather Wallet is $79.99: https://luxe-store-lilac.vercel.app/product/7\n\nGenuine leather with RFID protection!";
    }

    if (msg.match(/(sunglass|shades)/)) {
      return "View our Sunglasses for $189.99: https://luxe-store-lilac.vercel.app/product/8\n\nUV400 protection with polarized lenses!";
    }

    // General link requests
    if (msg.match(/(link|url|where to buy|show me|buy|purchase)/)) {
      return "Browse all products: https://luxe-store-lilac.vercel.app/shop\n\nTell me what you're looking for and I'll send you the direct link!";
    }

    // Price questions
    if (msg.match(/(how much|price|cost|expensive|cheap)/)) {
      return "Our products range from $79.99 to $1,299.99. View all: https://luxe-store-lilac.vercel.app/shop\n\nFree shipping on orders over $100!";
    }

    // Shipping
    if (msg.match(/(ship|deliver|delivery|shipping|send)/)) {
      return "We offer free shipping on orders over $100. Standard delivery takes 3-5 business days. Express shipping (1-2 days) is available for $15. We ship nationwide.";
    }

    // Returns
    if (msg.match(/(return|refund|exchange|money back|send back)/)) {
      return "We have a 30-day return policy. Products must be unused and in original packaging. Returns are free, and refunds are processed within 5-7 business days.";
    }

    // Payment
    if (msg.match(/(payment|pay|card|visa|mastercard|paypal|apple pay)/)) {
      return "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. All transactions are secured with 256-bit encryption for your protection.";
    }

    // Discounts/Sales
    if (msg.match(/(discount|sale|deal|coupon|promo|offer)/)) {
      return "Sign up for our newsletter to receive 10% off your first order. We also run regular promotional sales. Currently, all orders over $100 qualify for free shipping.";
    }

    // Quality questions
    if (msg.match(/(quality|good|worth|recommend|review|rating)/)) {
      return "Our products maintain an average 4.7/5 star rating from over 10,000 customers. We work directly with manufacturers to ensure premium quality and offer a 100% satisfaction guarantee.";
    }

    // In stock questions
    if (msg.match(/(in stock|available|stock|inventory)/)) {
      return "We currently have 8 premium products in stock across our Electronics, Accessories, and Footwear categories. All items are ready to ship. Which category would you like to explore?";
    }

    // Browsing/Shopping
    if (msg.match(/(browse|shop|see|show|looking for|want to)/)) {
      return "Browse our full catalog: https://luxe-store-lilac.vercel.app/shop\n\nOr tell me what specific product you're interested in and I'll send you the direct link!";
    }

    // What do you sell
    if (msg.match(/(what|which|tell me).*(sell|have|offer|product)/)) {
      return "We offer:\n• Electronics (headphones, smartwatches, speakers, cameras)\n• Accessories (wallets, backpacks, sunglasses)\n• Footwear (running shoes)\n\nBrowse all: https://luxe-store-lilac.vercel.app/shop or ask me for a specific product link!";
    }

    // Contact/Agent
    if (msg.match(/(agent|human|person|talk to someone|contact|help|support)/)) {
      return "For personalized assistance, please click the 'Request Live Agent' button below. A team member will be with you within 2-3 minutes.";
    }

    // Default - more helpful
    return "I'm here to help! I can provide direct links to any product.\n\nTry asking:\n• 'Show me headphones'\n• 'Link to running shoes'\n• 'Do you have cameras?'\n\nOr browse all: https://luxe-store-lilac.vercel.app/shop";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Get AI response
    const reply = await getAIResponse(inputValue);
    const botResponse: Message = {
      id: messages.length + 2,
      text: reply,
      isBot: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, botResponse]);
    setIsTyping(false);
  };

  const handleRequestAgent = () => {
    setAgentRequested(true);
    const agentMessage: Message = {
      id: messages.length + 1,
      text: "I've notified our support team. A live agent will be with you shortly. Average wait time is 2-3 minutes. In the meantime, feel free to describe your issue and I'll pass it along!",
      isBot: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, agentMessage]);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 z-50 group"
          aria-label="Open chat"
        >
          <MessageCircle size={28} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
            1
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={24} />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="font-semibold">LuxeStore AI</h3>
                <p className="text-xs text-blue-100">
                  {agentRequested ? "Agent requested" : "Online now"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${
                  message.isBot ? "justify-start" : "justify-end"
                }`}
              >
                {message.isBot && (
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-blue-600" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                    message.isBot
                      ? "bg-white text-gray-800 border border-gray-200"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{renderMessageText(message.text)}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.isBot ? "text-gray-500" : "text-blue-100"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                {!message.isBot && (
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <User size={16} className="text-gray-600" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Bot size={16} className="text-blue-600" />
                </div>
                <div className="bg-white rounded-2xl px-4 py-3 border border-gray-200">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Request Live Agent Button */}
          {!agentRequested && (
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
              <button
                onClick={handleRequestAgent}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
              >
                <User size={16} />
                Request Live Agent
              </button>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

