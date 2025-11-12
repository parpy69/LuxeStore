# LuxeStore - Modern E-Commerce Platform

A fully-featured, production-ready e-commerce website built with Next.js 15, TypeScript, and Tailwind CSS. Features a complete shopping experience with an intelligent AI chatbot, multiple pages, and responsive design.

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)

## 🌐 Live Demo

**[View Live Site](https://luxe-store-na2p.vercel.app)**

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
- 🤖 **Intelligent Chatbot** - Answers questions about products, shipping, returns, and more
- 💬 **Live Agent Request** - Button to escalate to human support
- 🎯 **Context-Aware** - Recognizes 15+ different question types
- ⚡ **Instant Responses** - No API costs, completely free

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

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📂 Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── collections/         # Collections page
│   ├── contact/             # Contact page with form
│   ├── shop/                # Shop page with filters
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── Cart.tsx             # Shopping cart drawer
│   ├── ChatBot.tsx          # AI customer support
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

### State Management
- **React Context API** - Global cart state management

### Deployment
- **[Vercel](https://vercel.com/)** - Optimized for Next.js hosting

## 🎨 Features Breakdown

### Shopping Cart
- Persistent cart state across pages
- Add/remove products
- Update quantities
- Real-time price calculation
- Slide-in drawer UI
- Empty state handling

### AI Chatbot
- Answers product inquiries
- Provides shipping information
- Explains return policy
- Handles complaints professionally
- Suggests live agent when needed
- 100% free (no API costs)

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

This project is deployed on **Vercel** and live at: [https://luxe-store-na2p.vercel.app](https://luxe-store-na2p.vercel.app)

To deploy your own version:
- Fork this repository
- Import to [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
- Deploy with one click (auto-detects Next.js)

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

### Modify AI Responses

Edit the chatbot logic in `/components/ChatBot.tsx` to customize responses.

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
- Portfolio: [LuxeStore](https://github.com/parpy69?tab=repositories)

## 🙏 Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Built with [Next.js](https://nextjs.org)

---

⭐ Star this repo if you find it helpful!

**Live Demo:** [https://luxe-store-na2p.vercel.app](https://luxe-store-na2p.vercel.app)
