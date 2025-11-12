"use client";

import { useState } from "react";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Cart } from "./Cart";

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer">
                  LuxeStore
                </h1>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/shop"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Shop
              </a>
              <a
                href="/collections"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Collections
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </a>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <button
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="Search"
              >
                <Search size={24} />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-700"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/shop"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium"
              >
                Shop
              </a>
              <a
                href="/collections"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium"
              >
                Collections
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium"
              >
                About
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Cart Drawer */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

