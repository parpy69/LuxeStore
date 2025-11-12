import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "LuxeStore - Premium Shopping Experience",
  description: "Discover premium products at unbeatable prices",
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

