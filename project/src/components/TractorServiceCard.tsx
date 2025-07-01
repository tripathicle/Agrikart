import React from 'react';
import { Star, MapPin, Clock, Wrench, IndianRupee } from 'lucide-react';
import { TractorService } from '../types';

interface TractorServiceCardProps {
  service: TractorService;
  onBook: (serviceId: string) => void;
}

export default function TractorServiceCard({ service, onBook }: TractorServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={service.images[0]}
          alt={service.tractorModel}
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-medium ${
          service.available 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {service.available ? 'Available' : 'Busy'}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{service.tractorModel}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{service.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 font-medium mb-3">{service.ownerName}</p>

        <div className="flex items-center space-x-2 mb-3">
          <MapPin className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-600">{service.location}</span>
        </div>

        <div className="mb-4">
          <div className="flex items-center space-x-1 mb-2">
            <Wrench className="h-4 w-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-700">Services:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {service.services.map((serviceName, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md"
              >
                {serviceName}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-2 bg-gray-50 rounded-md">
            <div className="flex items-center justify-center space-x-1 text-green-600 font-bold">
              <IndianRupee className="h-4 w-4" />
              <span>{service.pricePerHour}</span>
            </div>
            <p className="text-xs text-gray-600">per hour</p>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-md">
            <div className="flex items-center justify-center space-x-1 text-green-600 font-bold">
              <IndianRupee className="h-4 w-4" />
              <span>{service.pricePerAcre}</span>
            </div>
            <p className="text-xs text-gray-600">per acre</p>
          </div>
        </div>

        <button
          onClick={() => onBook(service.id)}
          disabled={!service.available}
          className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-md font-medium transition-colors ${
            service.available
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <Clock className="h-4 w-4" />
          <span>{service.available ? 'Book Now' : 'Currently Busy'}</span>
        </button>
      </div>
    </div>
  );
}