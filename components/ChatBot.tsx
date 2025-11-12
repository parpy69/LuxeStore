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

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Greetings
    if (lowerMessage.match(/\b(hello|hi|hey|good morning|good afternoon)\b/)) {
      return "Hello! Welcome to LuxeStore! How can I assist you with your shopping today?";
    }

    // Thanks
    if (lowerMessage.match(/\b(thank|thanks|thx)\b/)) {
      return "You're welcome! Is there anything else I can help you with?";
    }

    // Shoes/Footwear
    if (lowerMessage.match(/\b(shoe|shoes|sneaker|footwear|boot|sandal)\b/)) {
      return "Yes! We have a great selection of premium footwear including running shoes, casual sneakers, and more. Check out our Shop page and filter by 'Footwear' category. Our running shoes are currently $159.99 with free shipping!";
    }

    // Electronics
    if (lowerMessage.match(/\b(electronic|headphone|watch|speaker|camera|tech|gadget)\b/)) {
      return "We offer premium electronics including wireless headphones, smartwatches, portable speakers, and professional cameras. Prices range from $149 to $1299. All electronics come with a 1-year warranty!";
    }

    // Accessories
    if (lowerMessage.match(/\b(accessory|accessories|wallet|backpack|bag|sunglass)\b/)) {
      return "Our accessories collection includes leather wallets ($79.99), designer backpacks ($129.99), and polarized sunglasses ($189.99). All made with premium materials!";
    }

    // Browse/Shop
    if (lowerMessage.match(/\b(browse|shop|buy|purchase|look|see|show|find)\b/)) {
      return "You can browse all our products by clicking 'Shop' in the menu. We have Electronics, Accessories, and Footwear. You can filter by category and sort by price or rating. Would you like help finding something specific?";
    }

    // Product inquiries
    if (lowerMessage.match(/\b(product|item|sell|available|have|stock)\b/)) {
      return "We have 8 premium products currently in stock across 3 categories: Electronics (headphones, watches, speakers, cameras), Accessories (wallets, backpacks, sunglasses), and Footwear (running shoes). What are you interested in?";
    }

    // Shipping
    if (lowerMessage.match(/\b(ship|deliver|delivery|shipping|send)\b/)) {
      return "We offer free shipping on orders over $100! Standard delivery takes 3-5 business days. Express shipping (1-2 days) is available at checkout for $15.";
    }

    // Returns
    if (lowerMessage.match(/\b(return|refund|exchange|money back)\b/)) {
      return "We have a 30-day return policy on all items. Products must be unused and in original packaging. Returns are free and you'll get a full refund within 5-7 business days!";
    }

    // Payment
    if (lowerMessage.match(/\b(payment|pay|card|credit|paypal|apple pay)\b/)) {
      return "We accept Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay. All transactions are secured with 256-bit encryption for your safety!";
    }

    // Pricing/Discounts
    if (lowerMessage.match(/\b(price|cost|expensive|cheap|discount|sale|deal|coupon)\b/)) {
      return "Our products range from $79.99 to $1,299.99. We have regular sales - sign up for our newsletter to get 10% off your first order plus exclusive deals! Currently, all items have free shipping over $100.";
    }

    // Order tracking
    if (lowerMessage.match(/\b(track|order|tracking|where|status)\b/)) {
      return "You can track your order using the tracking number sent to your email after purchase. If you can't find it, I can connect you with a live agent who can look it up for you!";
    }

    // Complaints/Issues
    if (lowerMessage.match(/\b(don't like|bad|terrible|awful|problem|issue|complaint|wrong)\b/)) {
      return "I'm sorry to hear you're having an issue! I'd like to help resolve this right away. Could you tell me more about the problem? I can also connect you with a live agent for immediate assistance.";
    }

    // Quality questions
    if (lowerMessage.match(/\b(quality|good|worth|recommend|review|rating)\b/)) {
      return "All our products are premium quality with an average rating of 4.7/5 stars! We work directly with manufacturers to ensure the highest standards. Every product comes with our satisfaction guarantee!";
    }

    // Default response
    return "I can help with product info, shipping, returns, payments, pricing, and more! Feel free to ask me anything, or request a live agent for personalized assistance. What would you like to know?";
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

    // Simulate AI processing time
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
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
                  <p className="text-sm">{message.text}</p>
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

