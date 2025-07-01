import React from 'react';
import { MapPin, Clock, Droplets, IndianRupee } from 'lucide-react';
import { MilkRequest } from '../types';

interface MilkRequestCardProps {
  request: MilkRequest;
  onAccept: (requestId: string) => void;
  userRole?: string;
}

export default function MilkRequestCard({ request, onAccept, userRole = 'dairy-collector' }: MilkRequestCardProps) {
  const formatTime = (timeString: string) => {
    return new Date(timeString).toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'accepted': return 'bg-blue-100 text-blue-700';
      case 'collected': return 'bg-gray-100 text-gray-700';
      case 'expired': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{request.farmerName}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
          {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-center space-x-1 text-blue-600 font-bold text-lg">
            <Droplets className="h-5 w-5" />
            <span>{request.quantity}L</span>
          </div>
          <p className="text-xs text-gray-600">Quantity</p>
        </div>
        <div className="text-center p-3 bg-yellow-50 rounded-lg">
          <div className="text-yellow-600 font-bold text-lg">
            {request.fatPercentage}%
          </div>
          <p className="text-xs text-gray-600">Fat Content</p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-1 text-green-600 font-bold">
          <IndianRupee className="h-4 w-4" />
          <span>{request.pricePerLiter}</span>
          <span className="text-sm font-normal text-gray-500">per liter</span>
        </div>
        <div className="flex items-center space-x-1 text-green-600 font-bold">
          <IndianRupee className="h-4 w-4" />
          <span>{request.pricePerLiter * request.quantity}</span>
          <span className="text-sm font-normal text-gray-500">total</span>
        </div>
      </div>

      <div className="flex items-center space-x-2 mb-3">
        <MapPin className="h-4 w-4 text-gray-400" />
        <span className="text-sm text-gray-600">{request.location}</span>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <Clock className="h-4 w-4 text-gray-400" />
        <span className="text-sm text-gray-600">Pickup: {formatTime(request.pickupTime)}</span>
      </div>

      {userRole === 'dairy-collector' && request.status === 'active' && (
        <button
          onClick={() => onAccept(request.id)}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
        >
          Accept Request
        </button>
      )}

      {request.status === 'accepted' && (
        <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
          <p className="text-blue-700 text-sm font-medium">Request Accepted</p>
          <p className="text-blue-600 text-xs">Pickup scheduled for {formatTime(request.pickupTime)}</p>
        </div>
      )}
    </div>
  );
}