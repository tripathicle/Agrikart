import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useAppContext } from '../context/AppContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useAppContext();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  // ✅ Use a fallback image if image_url is missing or empty
  const getImageUrl = (url: string | undefined) => {
    return url && url.trim() !== ''
      ? url
      : 'https://via.placeholder.com/150';
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <img
        src={getImageUrl(product.image_url)}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

        <div className="text-2xl font-bold text-green-600 mb-4">
          ₹{product.price}
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-md bg-green-600 hover:bg-green-700 text-white font-medium transition-colors"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
