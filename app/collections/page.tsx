import { products } from "@/data/products";
import Link from "next/link";
import { ArrowRight, Sparkles, Grid3x3, Tag } from "lucide-react";

export default function CollectionsPage() {
  // Group products by category
  const categories = Array.from(new Set(products.map((p) => p.category)));
  
  const collections = categories.map((category) => {
    const categoryProducts = products.filter((p) => p.category === category);
    return {
      name: category,
      count: categoryProducts.length,
      description: getCategoryDescription(category),
      image: categoryProducts[0]?.image,
    };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-20 opacity-20">
          <Sparkles size={120} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <Grid3x3 size={100} />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-15">
          <Tag size={90} className="rotate-12" />
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-300 opacity-10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block mb-4">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full">
              ✨ Curated Selection
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Collections</h1>
          <p className="text-xl text-purple-100">
            Explore curated collections tailored to your lifestyle
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Collections Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 md:p-12 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-4">New Season Collection</h2>
          <p className="text-lg mb-6 max-w-2xl">
            Discover the latest trends and must-have items for this season. 
            Carefully curated products that blend style, quality, and innovation.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop New Arrivals
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.name}
              href="/shop"
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{collection.name}</h3>
                  <p className="text-sm text-gray-200">{collection.count} Products</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{collection.description}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                  View Collection
                  <ArrowRight size={18} className="ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Browse all our products or get in touch with our team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Browse All Products
            </Link>
            <Link
              href="/contact"
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    Electronics: "Latest tech gadgets and electronic devices for modern living",
    Accessories: "Stylish accessories to complement your everyday look",
    Footwear: "Comfortable and fashionable footwear for every occasion",
  };
  return descriptions[category] || "Premium quality products for your lifestyle";
}

