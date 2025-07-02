import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Truck, 
  Milk, 
  BookOpen, 
  TrendingUp, 
  Shield, 
  Users,
  ArrowRight,
  Star
} from 'lucide-react';
import WeatherCard from '../components/WeatherCard';
import { mockWeatherData, mockProducts } from '../data/mockData';

export default function Home() {
  const features = [
    {
      title: 'Multi-Vendor Marketplace',
      description: 'Buy and sell crops, vegetables, fertilizers, seeds, and equipment',
      icon: ShoppingCart,
      color: 'bg-green-500',
      link: '/marketplace'
    },
    {
      title: 'Tractor Services',
      description: 'Book tractors for ploughing, seeding, and harvesting',
      icon: Truck,
      color: 'bg-blue-500',
      link: '/tractors'
    },
    {
      title: 'Milk Trading',
      description: 'Connect dairy farmers with collectors and processors',
      icon: Milk,
      color: 'bg-yellow-500',
      link: '/milk'
    },
    {
      title: 'Community Hub',
      description: 'Access weather forecasts, farming tips, and government schemes',
      icon: BookOpen,
      color: 'bg-purple-500',
      link: '/community'
    },
  ];

  const stats = [
    { label: 'Active Farmers', value: '10,000+', icon: Users },
    { label: 'Products Listed', value: '50,000+', icon: ShoppingCart },
    { label: 'Successful Trades', value: '25,000+', icon: TrendingUp },
    { label: 'Verified Sellers', value: '5,000+', icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                India's Largest Agricultural Marketplace
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Connect farmers, tractor owners, dairy collectors, and suppliers in one platform. 
                Buy, sell, and trade agricultural products with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/marketplace"
                  className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Start Shopping
                </Link>
                <Link
                  to="/register"
                  className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center"
                >
                  Join as Seller
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2132240/pexels-photo-2132240.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Farmer with crops"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold text-gray-900">4.8/5</span>
                </div>
                <p className="text-sm text-gray-600">Trusted by farmers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From buying seeds to selling crops, from booking tractors to trading milk - 
              we've got all your agricultural needs covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.link}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 group"
                >
                  <div className={`${feature.color} p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
                    <Icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Weather and Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Weather Card */}
            <div className="lg:col-span-1">
              <WeatherCard weather={mockWeatherData} />
            </div>

            {/* Featured Products */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
                <Link 
                  to="/marketplace" 
                  className="text-green-600 hover:text-green-700 font-medium flex items-center"
                >
                  View all <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {mockProducts.slice(0, 4).map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-32 object-cover rounded-md mb-3"
                    />
                    <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-green-600 font-bold">₹{product.price}/{product.unit}</p>
                    <p className="text-sm text-gray-600">{product.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who are already using Agrikart to grow their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Sign Up Free
            </Link>
            <Link
              to="/marketplace"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}