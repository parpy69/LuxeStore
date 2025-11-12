import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "LuxeStore - Premium E-Commerce | AI-Powered Shopping",
  description: "Shop premium electronics, accessories, and footwear with AI-powered customer support. Free shipping on orders over $100. Built with Next.js 15 & Groq AI.",
  keywords: ["e-commerce", "online shopping", "premium products", "AI chatbot", "electronics", "accessories", "footwear"],
  authors: [{ name: "Abdullah Khudeish" }],
  openGraph: {
    title: "LuxeStore - Premium E-Commerce Platform",
    description: "Shop premium products with AI-powered support",
    type: "website",
    url: "https://luxe-store-lilac.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ChatBot />
        </CartProvider>
      </body>
    </html>
  );
}

