import React, { useState } from 'react';
import { MapPin, Clock, Calendar } from 'lucide-react';
import TractorServiceCard from '../components/TractorServiceCard';
import { mockTractorServices } from '../data/mockData';

export default function TractorServices() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [bookingData, setBookingData] = useState({
    landSize: '',
    location: '',
    date: '',
    time: '',
    serviceType: 'ploughing',
  });

  const handleBookService = (serviceId: string) => {
    setSelectedService(serviceId);
    setShowBookingModal(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    alert('Booking request submitted! The tractor owner will contact you shortly.');
    setShowBookingModal(false);
    setBookingData({
      landSize: '',
      location: '',
      date: '',
      time: '',
      serviceType: 'ploughing',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tractor Services</h1>
          <p className="text-gray-600">Book tractors for ploughing, seeding, harvesting, and more</p>
        </div>

        {/* How it Works */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-3">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">1. Select Location</h3>
              <p className="text-sm text-gray-600">Enter your farm location and land size</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-3 rounded-full inline-block mb-3">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">2. Book Service</h3>
              <p className="text-sm text-gray-600">Choose date, time, and type of service</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 p-3 rounded-full inline-block mb-3">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">3. Get Service</h3>
              <p className="text-sm text-gray-600">Tractor arrives at scheduled time</p>
            </div>
          </div>
        </div>

        {/* Available Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTractorServices.map((service) => (
            <TractorServiceCard
              key={service.id}
              service={service}
              onBook={handleBookService}
            />
          ))}
        </div>

        {/* Booking Modal */}
        {showBookingModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-screen overflow-y-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Tractor Service</h2>
                
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Land Size (acres)
                    </label>
                    <input
                      type="number"
                      required
                      value={bookingData.landSize}
                      onChange={(e) => setBookingData({ ...bookingData, landSize: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter land size"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Farm Location
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingData.location}
                      onChange={(e) => setBookingData({ ...bookingData, location: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your farm address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type
                    </label>
                    <select
                      value={bookingData.serviceType}
                      onChange={(e) => setBookingData({ ...bookingData, serviceType: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="ploughing">Ploughing</option>
                      <option value="seeding">Seeding</option>
                      <option value="harvesting">Harvesting</option>
                      <option value="cultivating">Cultivating</option>
                      <option value="spraying">Spraying</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        value={bookingData.date}
                        onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        required
                        value={bookingData.time}
                        onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-6">
                    <button
                      type="button"
                      onClick={() => setShowBookingModal(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Book Service
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}