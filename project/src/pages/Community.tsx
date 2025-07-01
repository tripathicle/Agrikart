import React from 'react';
import { 
  BookOpen, 
  Cloud, 
  Award, 
  TrendingUp, 
  Users, 
  Calendar,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import WeatherCard from '../components/WeatherCard';
import { mockWeatherData } from '../data/mockData';

export default function Community() {
  const articles = [
    {
      id: 1,
      title: 'Best Practices for Organic Farming',
      excerpt: 'Learn sustainable farming techniques that improve soil health and crop yield while protecting the environment.',
      author: 'Dr. Priya Sharma',
      date: '2024-01-10',
      readTime: '5 min read',
      category: 'Farming Tips',
      image: 'https://images.pexels.com/photos/4503269/pexels-photo-4503269.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Government Schemes for Farmers 2024',
      excerpt: 'Complete guide to available subsidies, loans, and support programs for farmers across India.',
      author: 'Rajesh Kumar',
      date: '2024-01-08',
      readTime: '8 min read',
      category: 'Government',
      image: 'https://images.pexels.com/photos/4503272/pexels-photo-4503272.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Water Management in Agriculture',
      excerpt: 'Efficient irrigation techniques and water conservation methods for better crop management.',
      author: 'Dr. Anand Patel',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Water Management',
      image: 'https://images.pexels.com/photos/4503285/pexels-photo-4503285.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const govSchemes = [
    {
      name: 'PM-KISAN Scheme',
      description: '₹6,000 annual income support to farmers',
      deadline: '2024-03-31',
      status: 'Active',
      link: 'https://pmkisan.gov.in'
    },
    {
      name: 'Pradhan Mantri Fasal Bima Yojana',
      description: 'Crop insurance scheme for farmers',
      deadline: '2024-02-28',
      status: 'Active',
      link: 'https://pmfby.gov.in'
    },
    {
      name: 'Soil Health Card Scheme',
      description: 'Free soil testing and health cards',
      deadline: 'Ongoing',
      status: 'Active',
      link: 'https://soilhealth.dac.gov.in'
    }
  ];

  const marketPrices = [
    { crop: 'Wheat', price: '₹2,125', change: '+2.5%', trend: 'up' },
    { crop: 'Rice', price: '₹3,850', change: '-1.2%', trend: 'down' },
    { crop: 'Onion', price: '₹35', change: '+15.3%', trend: 'up' },
    { crop: 'Tomato', price: '₹45', change: '+8.7%', trend: 'up' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Hub</h1>
          <p className="text-gray-600">Stay informed with farming tips, weather updates, and government schemes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Articles */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <BookOpen className="h-6 w-6 mr-2 text-green-600" />
                  Featured Articles
                </h2>
              </div>
              
              <div className="space-y-6">
                {articles.map((article) => (
                  <div key={article.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full md:w-48 h-48 md:h-32 object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      />
                      <div className="p-6 flex-1">
                        <div className="flex items-center mb-2">
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                            {article.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <span>By {article.author}</span>
                            <span>{article.date}</span>
                          </div>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Government Schemes */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Award className="h-6 w-6 mr-2 text-blue-600" />
                  Government Schemes
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {govSchemes.map((scheme, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{scheme.name}</h3>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        {scheme.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{scheme.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Deadline: {scheme.deadline}</span>
                      </div>
                      <a
                        href={scheme.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 flex items-center text-sm font-medium"
                      >
                        Apply <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Weather Card */}
            <WeatherCard weather={mockWeatherData} />

            {/* Market Prices */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                Market Prices
              </h3>
              <div className="space-y-3">
                {marketPrices.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-900 font-medium">{item.crop}</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{item.price}</span>
                      <span className={`text-sm ${
                        item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">*Prices per quintal, updated daily</p>
            </div>

            {/* Quick Tips */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Today's Farming Tip
              </h3>
              <p className="text-yellow-700 text-sm">
                Monitor soil moisture levels regularly during the growing season. 
                Overwatering can be as harmful as underwatering. Use drip irrigation 
                for efficient water usage.
              </p>
            </div>

            {/* Community Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-purple-600" />
                Community Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Farmers</span>
                  <span className="font-semibold text-gray-900">10,547</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Articles Read</span>
                  <span className="font-semibold text-gray-900">25,392</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Questions Asked</span>
                  <span className="font-semibold text-gray-900">1,284</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Success Stories</span>
                  <span className="font-semibold text-gray-900">156</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}