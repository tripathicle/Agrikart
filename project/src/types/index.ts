export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'farmer' | 'tractor-owner' | 'dairy-collector' | 'supplier' | 'admin';
  location: string;
  rating: number;
  avatar?: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  category: 'crops' | 'vegetables' | 'fertilizers' | 'seeds' | 'equipment' | 'dairy';
  sellerId: string;
  sellerName: string;
  location: string;
  images: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  organic: boolean;
}

export interface TractorService {
  id: string;
  ownerId: string;
  ownerName: string;
  tractorModel: string;
  services: string[];
  pricePerHour: number;
  pricePerAcre: number;
  location: string;
  rating: number;
  available: boolean;
  images: string[];
}

export interface TractorBooking {
  id: string;
  farmerId: string;
  serviceId: string;
  landSize: number;
  location: string;
  scheduledDate: string;
  status: 'pending' | 'accepted' | 'in-progress' | 'completed' | 'cancelled';
  totalPrice: number;
}

export interface MilkRequest {
  id: string;
  farmerId: string;
  farmerName: string;
  quantity: number;
  fatPercentage: number;
  pricePerLiter: number;
  location: string;
  pickupTime: string;
  status: 'active' | 'accepted' | 'collected' | 'expired';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  forecast: Array<{
    day: string;
    high: number;
    low: number;
    condition: string;
  }>;
}

export type Notification = {
  id: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  timestamp: Date;
};