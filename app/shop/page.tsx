"use client";

import { useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Filter, ShoppingBag, Star, TrendingUp, Package } from "lucide-react";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  let filteredProducts = products.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  // Sort products
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-20 opacity-20">
          <ShoppingBag size={120} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <Package size={100} />
        </div>
        <div className="absolute top-1/2 right-1/3 opacity-15">
          <Star size={80} className="animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-40 opacity-10">
          <TrendingUp size={90} />
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 opacity-10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block mb-4">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full">
              ⚡ Limited Time Offers
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop All Products</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Browse our complete collection of premium products
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Sort */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Category Filter */}
            <div className="w-full lg:w-auto">
              <div className="flex items-center gap-2 mb-3">
                <Filter size={20} className="text-blue-600" />
                <span className="text-gray-700 font-semibold">Filter by Category:</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2.5 rounded-lg font-medium transition-all shadow-sm cursor-pointer ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white shadow-md scale-105 ring-2 ring-blue-300"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow hover:scale-105 border-2 border-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">👆 Click a category to filter products</p>
            </div>

            {/* Sort Dropdown */}
            <div className="w-full lg:w-auto">
              <label className="text-gray-700 font-semibold mb-2 block">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full lg:w-auto px-4 py-2.5 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer text-gray-900 font-medium"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Products Count */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-gray-600 font-medium">
              Showing <span className="text-blue-600 font-bold">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? "s" : ""}
              {selectedCategory !== "All" && <span> in <span className="text-blue-600 font-bold">{selectedCategory}</span></span>}
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

