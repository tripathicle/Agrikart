import { Product, TractorService, MilkRequest, User, WeatherData } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Basmati Rice',
    description: 'Premium quality organic basmati rice from Punjab fields',
    price: 120,
    unit: 'kg',
    category: 'crops',
    sellerId: '1',
    sellerName: 'Rajesh Farms',
    location: 'Punjab, India',
    images: ['https://images.pexels.com/photos/33254/rice-grains-white.jpg?auto=compress&cs=tinysrgb&w=400'],
    rating: 4.8,
    reviews: 156,
    inStock: true,
    organic: true,
  },
  {
    id: '2',
    name: 'Fresh Tomatoes',
    description: 'Vine-ripened fresh tomatoes, perfect for cooking',
    price: 45,
    unit: 'kg',
    category: 'vegetables',
    sellerId: '2',
    sellerName: 'Green Valley Farm',
    location: 'Karnataka, India',
    images: ['https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400'],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    organic: false,
  },
  {
    id: '3',
    name: 'NPK Fertilizer',
    description: 'High-quality NPK fertilizer for better crop yield',
    price: 850,
    unit: '50kg bag',
    category: 'fertilizers',
    sellerId: '3',
    sellerName: 'AgriSupply Co.',
    location: 'Maharashtra, India',
    images: ['https://images.pexels.com/photos/4503270/pexels-photo-4503270.jpeg?auto=compress&cs=tinysrgb&w=400'],
    rating: 4.7,
    reviews: 234,
    inStock: true,
    organic: false,
  },
  {
    id: '4',
    name: 'Wheat Seeds',
    description: 'High-yield wheat seeds, drought resistant variety',
    price: 65,
    unit: 'kg',
    category: 'seeds',
    sellerId: '4',
    sellerName: 'Seed Masters',
    location: 'Haryana, India',
    images: ['https://images.pexels.com/photos/4749943/pexels-photo-4749943.jpeg?auto=compress&cs=tinysrgb&w=400'],
    rating: 4.9,
    reviews: 178,
    inStock: true,
    organic: false,
  },
  {
    id: '5',
    name: 'Fresh Buffalo Milk',
    description: 'Pure buffalo milk with 6.5% fat content',
    price: 55,
    unit: 'liter',
    category: 'dairy',
    sellerId: '5',
    sellerName: 'Dairy Fresh',
    location: 'Uttar Pradesh, India',
    images: ['https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=400'],
    rating: 4.8,
    reviews: 92,
    inStock: true,
    organic: true,
  },
  {
    id: '6',
    name: 'Drip Irrigation Kit',
    description: 'Complete drip irrigation system for 1 acre',
    price: 15000,
    unit: 'set',
    category: 'equipment',
    sellerId: '3',
    sellerName: 'AgriSupply Co.',
    location: 'Gujarat, India',
    images: ['https://images.pexels.com/photos/4503285/pexels-photo-4503285.jpeg?auto=compress&cs=tinysrgb&w=400'],
    rating: 4.5,
    reviews: 67,
    inStock: true,
    organic: false,
  },
];

export const mockTractorServices: TractorService[] = [
  {
    id: '1',
    ownerId: '1',
    ownerName: 'Suresh Kumar',
    tractorModel: 'Mahindra 575 DI',
    services: ['Ploughing', 'Seeding', 'Harvesting'],
    pricePerHour: 800,
    pricePerAcre: 1200,
    location: 'Punjab, India',
    rating: 4.8,
    available: true,
    images: ['https://images.pexels.com/photos/2747448/pexels-photo-2747448.jpeg?auto=compress&cs=tinysrgb&w=400'],
  },
  {
    id: '2',
    ownerId: '2',
    ownerName: 'Ramesh Patel',
    tractorModel: 'John Deere 5050D',
    services: ['Ploughing', 'Cultivating', 'Spraying'],
    pricePerHour: 900,
    pricePerAcre: 1400,
    location: 'Gujarat, India',
    rating: 4.9,
    available: true,
    images: ['https://images.pexels.com/photos/2747448/pexels-photo-2747448.jpeg?auto=compress&cs=tinysrgb&w=400'],
  },
  {
    id: '3',
    ownerId: '3',
    ownerName: 'Vinod Singh',
    tractorModel: 'Swaraj 744 FE',
    services: ['Ploughing', 'Threshing'],
    pricePerHour: 750,
    pricePerAcre: 1100,
    location: 'Haryana, India',
    rating: 4.6,
    available: false,
    images: ['https://images.pexels.com/photos/2747448/pexels-photo-2747448.jpeg?auto=compress&cs=tinysrgb&w=400'],
  },
];

export const mockMilkRequests: MilkRequest[] = [
  {
    id: '1',
    farmerId: '1',
    farmerName: 'Arjun Dairy Farm',
    quantity: 50,
    fatPercentage: 6.2,
    pricePerLiter: 52,
    location: 'Punjab, India',
    pickupTime: '2024-01-15T06:00:00Z',
    status: 'active',
  },
  {
    id: '2',
    farmerId: '2',
    farmerName: 'Krishna Milk Supply',
    quantity: 100,
    fatPercentage: 5.8,
    pricePerLiter: 48,
    location: 'Haryana, India',  
    pickupTime: '2024-01-15T07:00:00Z',
    status: 'active',
  },
  {
    id: '3',
    farmerId: '3',
    farmerName: 'Ganga Dairy',
    quantity: 75,
    fatPercentage: 6.5,
    pricePerLiter: 55,
    location: 'Uttar Pradesh, India',
    pickupTime: '2024-01-15T05:30:00Z',
    status: 'accepted',
  },
];

export const mockWeatherData: WeatherData = {
  location: 'Punjab, India',
  temperature: 28,
  condition: 'Partly Cloudy',
  humidity: 65,
  windSpeed: 12,
  forecast: [
    { day: 'Today', high: 32, low: 24, condition: 'Sunny' },
    { day: 'Tomorrow', high: 30, low: 22, condition: 'Cloudy' },
    { day: 'Wed', high: 28, low: 20, condition: 'Rain' },
    { day: 'Thu', high: 31, low: 23, condition: 'Sunny' },
    { day: 'Fri', high: 29, low: 21, condition: 'Partly Cloudy' },
  ],
};