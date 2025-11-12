# 🛍️ LuxeStore - Modern E-Commerce Platform

A **production-ready** e-commerce website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Features a complete shopping experience with **Groq AI-powered chatbot**, full cart functionality, and beautiful responsive design.

> 🎯 **Perfect for portfolio**: Demonstrates modern web development, AI integration, full-stack capabilities, and production deployment.

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)
![AI Powered](https://img.shields.io/badge/AI-Groq_Llama_3.1-orange?style=flat-square)

## 🌐 Live Demo

**[View Live Site](https://luxe-store-lilac.vercel.app)**

## 🚀 Key Highlights

- 🤖 **AI-Powered Support** - Groq integration with Llama 3.1 for intelligent customer service
- ⚡ **Latest Tech Stack** - Next.js 15, TypeScript, Tailwind CSS, React Context API
- 🛒 **Full E-Commerce** - Complete shopping cart with add/remove/quantity management
- 📱 **Fully Responsive** - Seamless experience across all devices
- 🎨 **Modern UI/UX** - Professional design with smooth animations and gradients
- 🔒 **Production Ready** - Deployed on Vercel with serverless functions
- 💯 **100% Type Safe** - Full TypeScript implementation

## ✨ Features

### E-Commerce Functionality
- 🛒 **Full Shopping Cart** - Add, remove, update quantities with real-time total calculation
- 💳 **Multiple Payment Options** - Support for all major credit cards, PayPal, Apple Pay, Google Pay
- 📦 **Shipping Management** - Free shipping over $100, standard and express options
- ↩️ **30-Day Returns** - Easy return policy with full refund guarantee

### Product Management
- 🏷️ **8 Premium Products** - Across Electronics, Accessories, and Footwear categories
- 🔍 **Advanced Filtering** - Filter by category and sort by price, rating, or featured
- ⭐ **Product Ratings** - Display ratings and stock levels
- 📊 **Real-time Stock Tracking** - Shows current inventory levels

### Pages & Navigation
- 🏠 **Home** - Hero section with featured products and benefits
- 🛍️ **Shop** - Full product catalog with filtering and sorting
- 📚 **Collections** - Curated product collections by category
- ℹ️ **About** - Company story, team, and values
- 📞 **Contact** - Contact form with FAQs and business information

### AI Customer Support
- 🤖 **Powered by Groq AI** - Real AI responses using Llama 3.1 (8B) model
- 💬 **Live Agent Request** - Seamless escalation to human support
- 🎯 **Context-Aware** - Understands products, policies, and customer needs
- ⚡ **Lightning Fast** - Sub-second response times with Groq inference
- 🆓 **Free Tier** - Production-ready AI at zero cost

### Design & UX
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎨 **Modern UI** - Clean gradient design with smooth animations
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🌙 **Professional Theme** - Blue and purple gradient color scheme

### Technical Features
- ⚡ **Fast Performance** - Built with Next.js 15 App Router
- 🔒 **Type Safety** - Full TypeScript implementation
- 🎯 **State Management** - React Context API for cart state
- 🖼️ **Optimized Images** - Next.js Image component with lazy loading
- 📦 **Clean Architecture** - Component-based, maintainable structure

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Parpy69/LuxeStore.git
cd LuxeStore
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:
```bash
GROQ_API_KEY=your_groq_api_key_here
```

**Get your free Groq API key:**
- Visit [https://console.groq.com](https://console.groq.com)
- Sign up for a free account
- Generate an API key
- Paste it in your `.env.local` file

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📂 Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── api/                 # API routes
│   │   └── chat/            # Groq AI chatbot endpoint
│   ├── collections/         # Collections page
│   ├── contact/             # Contact page with form
│   ├── shop/                # Shop page with filters
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── Cart.tsx             # Shopping cart drawer
│   ├── ChatBot.tsx          # AI customer support UI
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Hero section
│   ├── Navbar.tsx           # Navigation bar
│   ├── ProductCard.tsx      # Product card component
│   └── ProductGrid.tsx      # Product grid layout
├── context/                 # React Context
│   └── CartContext.tsx      # Shopping cart state
├── data/                    # Mock data
│   └── products.ts          # Product inventory
├── types/                   # TypeScript types
│   └── product.ts           # Product & cart types
└── public/                  # Static assets
```

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Modern icon library

### AI & Backend
- **[Groq AI](https://groq.com/)** - Lightning-fast LLM inference with Llama 3.1
- **Next.js API Routes** - Serverless backend for chatbot integration

### State Management
- **React Context API** - Global cart state management

### Deployment
- **[Vercel](https://vercel.com/)** - Optimized for Next.js hosting with edge functions

## 🎨 Features Breakdown

### Shopping Cart
- Persistent cart state across pages
- Add/remove products
- Update quantities
- Real-time price calculation
- Slide-in drawer UI
- Empty state handling

### AI Chatbot (Groq-Powered)
- **Real AI Intelligence** - Uses Llama 3.1 8B model via Groq API
- **Natural Conversations** - Understands context and intent
- **Store Knowledge** - Pre-trained with product catalog and policies
- **Professional Responses** - Concise, helpful, business-focused answers
- **Smart Fallbacks** - Local responses if API is unavailable
- **Live Agent Escalation** - One-click transfer to human support
- **100% Free** - Groq's generous free tier (no credit card required)

### Product Catalog
- 8 premium products
- Categories: Electronics, Accessories, Footwear
- Price range: $79.99 - $1,299.99
- Real product data with ratings and stock
- High-quality product images

### Responsive Design
- Mobile-first approach
- Breakpoints for all screen sizes
- Touch-friendly interactions
- Optimized images for all devices

## 📦 Deployment

This project is deployed on **Vercel** and live at: **[https://luxe-store-lilac.vercel.app](https://luxe-store-lilac.vercel.app)**

### Deploy Your Own Version

1. **Fork this repository** on GitHub
2. **Sign up** at [Vercel](https://vercel.com) (free)
3. **Import** your forked repository
4. **Add Environment Variable:**
   - Name: `GROQ_API_KEY`
   - Value: Your Groq API key from [console.groq.com](https://console.groq.com)
   - Environment: Production, Preview, Development
5. **Deploy!** Vercel auto-detects Next.js and deploys in ~60 seconds

**Note:** Without the Groq API key, the chatbot will use smart fallback responses (still functional, but not AI-powered).

## 🔧 Customization

### Update Products

Edit `/data/products.ts` to add/remove products:

```typescript
export const products: Product[] = [
  {
    id: 1,
    name: "Your Product",
    description: "Product description",
    price: 99.99,
    image: "https://...",
    category: "Category",
    rating: 4.5,
    stock: 50,
  },
  // Add more products...
];
```

### Customize Theme

Update colors in `/tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: "#your-color",
      // Add your colors
    },
  },
}
```

### Customize AI Chatbot

**Update System Prompt** - Edit `/app/api/chat/route.ts` to customize AI behavior:
```typescript
content: `You are a helpful customer service assistant for LuxeStore...
// Add your custom instructions here
`
```

**Adjust Fallback Responses** - Edit `getFallbackResponse()` in `/app/api/chat/route.ts`

**Change AI Model** - Switch to different Groq models:
- `llama-3.1-8b-instant` (current, fast)
- `mixtral-8x7b-32768` (longer context)
- `gemma-7b-it` (lightweight)

## 📸 Screenshots

### Home Page
Modern hero section with featured products and benefits.

### Shop Page
Full product catalog with filtering and sorting capabilities.

### Shopping Cart
Slide-in cart drawer with product management.

### AI Chatbot
Intelligent customer support assistant.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Abdullah Khudeish**

- GitHub: [@Parpy69](https://github.com/Parpy69)
- Project Repository: [LuxeStore](https://github.com/parpy69?tab=repositories)

## 🙏 Acknowledgments

- **AI Powered by** [Groq](https://groq.com) - Lightning-fast LLM inference
- Product images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Built with [Next.js](https://nextjs.org)

---

⭐ Star this repo if you find it helpful!

**Live Demo:** [https://luxe-store-lilac.vercel.app](https://luxe-store-lilac.vercel.app)
