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
    const msg = userMessage.toLowerCase();

    // Greetings
    if (msg.match(/^(hi|hello|hey|good morning|good afternoon|good evening|sup|yo)$/)) {
      return "Hi there! 👋 Welcome to LuxeStore! How can I help you today?";
    }

    // Thanks
    if (msg.match(/(thank|thanks|thx|appreciate)/)) {
      return "You're very welcome! Anything else I can help with? 😊";
    }

    // Website complaints - MORE SPECIFIC MATCHING
    if (msg.includes("website") || msg.includes("site") || msg.includes("store") || msg.includes("page")) {
      if (msg.match(/(don'?t like|hate|ugly|bad|terrible|not good|dislike)/)) {
        return "I'm sorry you feel that way! 😔 We value your feedback. Could you tell me what specifically you'd like to see improved? I can also connect you with our team via the live agent button.";
      }
      if (msg.match(/(look|design|layout|appearance)/)) {
        return "Thanks for your feedback on our design! We're always working to improve. What would you like to see different? Feel free to request a live agent if you'd like to discuss this further!";
      }
    }

    // General complaints
    if (msg.match(/(problem|issue|complaint|not working|broken|error)/)) {
      return "I'm sorry to hear that! 😟 Let me help you fix this. Can you tell me more about what's happening? Or click 'Request Live Agent' for immediate assistance.";
    }

    // Shoes/Footwear
    if (msg.match(/(shoe|footwear|sneaker|boot|sandal|trainer)/)) {
      if (msg.match(/(have|sell|got|any|do you)/)) {
        return "Yes! We have premium running shoes for $159.99 with advanced cushioning. Check out our Shop page and filter by 'Footwear'. Free shipping on orders over $100! 👟";
      }
      return "Our footwear collection includes high-performance running shoes ($159.99). They have a 4.7 star rating and 42 in stock! Want to check them out?";
    }

    // Electronics
    if (msg.match(/(headphone|earbud|watch|smartwatch|speaker|camera|electronic|tech|gadget)/)) {
      return "We have amazing electronics! 🎧 Wireless headphones ($299), smartwatches ($399), portable speakers ($149), and pro cameras ($1299). All with 1-year warranty. What interests you?";
    }

    // Accessories
    if (msg.match(/(wallet|backpack|bag|sunglass|accessory|accessories)/)) {
      return "Our accessories are top quality! 💼 Leather wallets ($79.99), designer backpacks ($129.99), and polarized sunglasses ($189.99). All made with premium materials!";
    }

    // Price questions
    if (msg.match(/(how much|price|cost|expensive|cheap)/)) {
      return "Our products range from $79.99 (wallets) to $1,299.99 (cameras). Free shipping over $100! We also have sales - sign up for our newsletter for 10% off your first order! 💰";
    }

    // Shipping
    if (msg.match(/(ship|deliver|delivery|shipping|send)/)) {
      return "Free shipping on orders over $100! 📦 Standard delivery is 3-5 business days. Express (1-2 days) available for $15. We ship nationwide!";
    }

    // Returns
    if (msg.match(/(return|refund|exchange|money back|send back)/)) {
      return "Easy 30-day returns! ✅ Products must be unused in original packaging. Returns are FREE and you get a full refund in 5-7 business days. No hassle!";
    }

    // Payment
    if (msg.match(/(payment|pay|card|visa|mastercard|paypal|apple pay)/)) {
      return "We accept all major credit cards, PayPal, Apple Pay, and Google Pay! 💳 All transactions are secured with 256-bit encryption. Shop with confidence!";
    }

    // Discounts/Sales
    if (msg.match(/(discount|sale|deal|coupon|promo|offer)/)) {
      return "Sign up for our newsletter for 10% off your first order! 🎉 We also run regular sales. Right now: Free shipping on all orders over $100!";
    }

    // Quality questions
    if (msg.match(/(quality|good|worth|recommend|review|rating)/)) {
      return "All our products are premium quality! ⭐ Average 4.7/5 star rating from 10,000+ happy customers. We work directly with manufacturers for the best quality. 100% satisfaction guaranteed!";
    }

    // In stock questions
    if (msg.match(/(in stock|available|stock|inventory)/)) {
      return "We have 8 premium products in stock right now across Electronics, Accessories, and Footwear. All items ready to ship! Which category interests you?";
    }

    // Browsing/Shopping
    if (msg.match(/(browse|shop|buy|purchase|see|show|looking for|want to)/)) {
      return "Click 'Shop' in the menu to browse everything! 🛍️ You can filter by category (Electronics, Accessories, Footwear) and sort by price or rating. Need help finding something specific?";
    }

    // What do you sell
    if (msg.match(/(what|which|tell me).*(sell|have|offer|product)/)) {
      return "We sell premium Electronics (headphones, watches, speakers, cameras), Accessories (wallets, backpacks, sunglasses), and Footwear (running shoes). What are you interested in? 😊";
    }

    // Contact/Agent
    if (msg.match(/(agent|human|person|talk to someone|contact|help|support)/)) {
      return "I'm here to help! For personalized assistance, just click the 'Request Live Agent' button below and a team member will be with you in 2-3 minutes! 👤";
    }

    // Default - more helpful
    return "I'm here to help! You can ask me about:\n• Products & Pricing 💰\n• Shipping & Delivery 📦\n• Returns & Refunds ✅\n• Payment Options 💳\n\nOr request a live agent anytime!";
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

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getAIResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 800);
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

