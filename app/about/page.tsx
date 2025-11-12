import { Award, Heart, Globe, Users, Zap, Target } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our top priority. We're committed to providing exceptional service and quality products.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Every product is carefully selected and tested to meet our high standards of excellence.",
    },
    {
      icon: Globe,
      title: "Sustainable",
      description: "We're dedicated to environmentally responsible practices and ethical sourcing.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by a passionate team that listens to and values our customer community.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "500+", label: "Premium Products" },
    { number: "50+", label: "Brand Partners" },
    { number: "4.9/5", label: "Average Rating" },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      name: "Michael Chen",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Experience",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-20 opacity-20">
          <Target size={120} />
        </div>
        <div className="absolute bottom-10 left-20 opacity-10">
          <Zap size={110} />
        </div>
        <div className="absolute top-1/2 right-1/3 opacity-15">
          <Heart size={90} className="animate-pulse" />
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 opacity-10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full">
                🎯 Our Story
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About LuxeStore</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              We&apos;re on a mission to bring you the finest products that blend quality, 
              style, and innovation. Since 2020, we&apos;ve been curating exceptional items 
              that elevate everyday living.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  LuxeStore was born from a simple idea: everyone deserves access to 
                  premium quality products without compromise. What started as a small 
                  passion project has grown into a thriving community of thousands of 
                  satisfied customers.
                </p>
                <p>
                  We carefully curate every item in our collection, working directly 
                  with manufacturers and artisans to ensure the highest standards of 
                  quality and craftsmanship.
                </p>
                <p>
                  Today, we&apos;re proud to be a trusted destination for those who appreciate 
                  the finer things in life, from cutting-edge electronics to timeless 
                  accessories.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=500&q=80"
                    alt="Office"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80"
                    alt="Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&q=80"
                    alt="Workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80"
                    alt="Collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate people behind LuxeStore
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

