import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Wheat, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  Truck, 
  Milk, 
  BookOpen 
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import NotificationBell from './NotificationBell'; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useAppContext();
  const location = useLocation();

  const navigation = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Tractor Services', href: '/tractors', icon: Truck },
    { name: 'Milk Trading', href: '/milk', icon: Milk },
    { name: 'Community', href: '/community', icon: BookOpen },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-lg">
              <Wheat className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Agrikart</h1>
              <p className="text-xs text-gray-500">Farmer's Marketplace</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* ✅ Notifications */}
            <NotificationBell />

            {/* 🛒 Cart */}
            <Link 
              to="/cart" 
              className="relative p-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {state.cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {state.cart.length}
                </span>
              )}
            </Link>

            {/* 👤 User/Profile */}
            {state.user ? (
              <Link 
                to="/profile" 
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <img
                  src={state.user.avatar || 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'}
                  alt={state.user.name}
                  className="h-8 w-8 rounded-full"
                />
                <span className="hidden sm:block text-sm font-medium text-gray-700">
                  {state.user.name}
                </span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </Link>
            )}

            {/* 📱 Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* 📱 Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                      isActive(item.href)
                        ? 'bg-green-100 text-green-700'
                        : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
