import React, { useState } from 'react';
import { Plus, MapPin, Clock } from 'lucide-react';
import MilkRequestCard from '../components/MilkRequestCard';
import { mockMilkRequests } from '../data/mockData';
import { useAppContext } from '../context/AppContext';

export default function MilkTrading() {
  const { state } = useAppContext();
  const [showCreateRequest, setShowCreateRequest] = useState(false);
  const [activeTab, setActiveTab] = useState('browse');
  const [requestData, setRequestData] = useState({
    quantity: '',
    fatPercentage: '',
    pricePerLiter: '',
    location: '',
    pickupTime: '',
  });

  const handleAcceptRequest = (requestId: string) => {
    alert('Milk request accepted! You will receive pickup details shortly.');
  };

  const handleCreateRequest = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Milk request created successfully! Nearby collectors will be notified.');
    setShowCreateRequest(false);
    setRequestData({
      quantity: '',
      fatPercentage: '',
      pricePerLiter: '',
      location: '',
      pickupTime: '',
    });
  };

  const userRole = state.user?.role || 'farmer';

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Milk Trading Platform</h1>
          <p className="text-gray-600">Connect dairy farmers with collectors and processors</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('browse')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'browse'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Browse Requests
              </button>
              {userRole === 'farmer' && (
                <button
                  onClick={() => setActiveTab('my-requests')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'my-requests'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  My Requests
                </button>
              )}
            </nav>
          </div>

          <div className="p-6">
            {/* Create Request Button */}
            {userRole === 'farmer' && activeTab === 'browse' && (
              <div className="mb-6">
                <button
                  onClick={() => setShowCreateRequest(true)}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium flex items-center space-x-2 transition-colors"
                >
                  <Plus className="h-5 w-5" />
                  <span>Create Milk Request</span>
                </button>
              </div>
            )}

            {/* How it Works - for new users */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-blue-900 mb-2">How Milk Trading Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
                <div>
                  <strong>For Farmers:</strong>
                  <ul className="list-disc list-inside mt-1">
                    <li>Post milk quantity and quality details</li>
                    <li>Set your price per liter</li>
                    <li>Schedule convenient pickup times</li>
                  </ul>
                </div>
                <div>
                  <strong>For Collectors:</strong>
                  <ul className="list-disc list-inside mt-1">
                    <li>Browse available milk requests</li>
                    <li>Accept requests that match your route</li>
                    <li>Contact farmers directly for pickup</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Milk Requests */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockMilkRequests.map((request) => (
                <MilkRequestCard
                  key={request.id}
                  request={request}
                  onAccept={handleAcceptRequest}
                  userRole={userRole}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Create Request Modal */}
        {showCreateRequest && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-screen overflow-y-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Milk Request</h2>
                
                <form onSubmit={handleCreateRequest} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity (Liters)
                    </label>
                    <input
                      type="number"
                      required
                      value={requestData.quantity}
                      onChange={(e) => setRequestData({ ...requestData, quantity: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter milk quantity"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fat Percentage (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      required
                      value={requestData.fatPercentage}
                      onChange={(e) => setRequestData({ ...requestData, fatPercentage: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="e.g., 6.2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price per Liter (₹)
                    </label>
                    <input
                      type="number"
                      required
                      value={requestData.pricePerLiter}
                      onChange={(e) => setRequestData({ ...requestData, pricePerLiter: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter price per liter"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Farm Location
                    </label>
                    <input
                      type="text"
                      required
                      value={requestData.location}
                      onChange={(e) => setRequestData({ ...requestData, location: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your farm address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Pickup Time
                    </label>
                    <input
                      type="datetime-local"
                      required
                      value={requestData.pickupTime}
                      onChange={(e) => setRequestData({ ...requestData, pickupTime: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex space-x-4 pt-6">
                    <button
                      type="button"
                      onClick={() => setShowCreateRequest(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    >
                      Create Request
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