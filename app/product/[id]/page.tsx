"use client";

import { useParams, useRouter } from "next/navigation";
import { products } from "@/data/products";
import { ShoppingCart, Star, Package, Shield, Truck, ArrowLeft, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Image from "next/image";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const productId = parseInt(params.id as string);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you&apos;re looking for doesn&apos;t exist.</p>
          <button
            onClick={() => router.push("/shop")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                <Heart size={24} className="text-gray-600" />
              </button>
            </div>
            {product.stock < 10 && (
              <div className="absolute top-4 left-4">
                <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Only {product.stock} left!
                </span>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            {/* Category Badge */}
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold">
                {product.category}
              </span>
            </div>

            {/* Product Name */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="text-gray-600 font-medium">{product.rating}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">1,234 reviews</span>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-gray-900">${product.price}</span>
                <span className="text-gray-500 line-through text-xl">
                  ${(product.price * 1.3).toFixed(2)}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Save 30%
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <Package size={20} className="text-green-600" />
                <span className="text-green-600 font-semibold">
                  {product.stock > 20 ? "In Stock" : `Only ${product.stock} left in stock`}
                </span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-10 h-10 rounded-lg font-semibold"
                >
                  -
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 w-10 h-10 rounded-lg font-semibold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg hover:shadow-xl"
              >
                <ShoppingCart size={24} />
                {addedToCart ? "Added to Cart!" : "Add to Cart"}
              </button>
              <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="border-t pt-8 space-y-4">
              <div className="flex items-start gap-3">
                <Truck className="text-blue-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Free Shipping</h4>
                  <p className="text-gray-600 text-sm">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="text-blue-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">1-Year Warranty</h4>
                  <p className="text-gray-600 text-sm">100% satisfaction guarantee</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Package className="text-blue-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900">Easy Returns</h4>
                  <p className="text-gray-600 text-sm">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                date: "2 weeks ago",
                comment: "Absolutely love this product! Quality is amazing and shipping was super fast.",
              },
              {
                name: "Michael Chen",
                rating: 5,
                date: "1 month ago",
                comment: "Best purchase I've made this year. Highly recommend to everyone!",
              },
              {
                name: "Emily Davis",
                rating: 4,
                date: "1 month ago",
                comment: "Great product overall. Would buy again. Just wish it came in more colors.",
              },
              {
                name: "James Wilson",
                rating: 5,
                date: "2 months ago",
                comment: "Exceeded my expectations! The quality is outstanding for the price.",
              },
            ].map((review, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  onClick={() => router.push(`/product/${relatedProduct.id}`)}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900">
                        ${relatedProduct.price}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star size={16} className="fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{relatedProduct.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

