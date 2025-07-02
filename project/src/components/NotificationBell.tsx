import React, { useState } from 'react';
import { Bell } from 'lucide-react';

const NotificationBell: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const notifications = [
    '🚜 New tractor booking request',
    '🥛 Milk pickup scheduled',
    '🌾 Order placed successfully',
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-700 hover:text-green-600 transition"
      >
        <Bell className="h-5 w-5" />
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {notifications.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <ul className="divide-y divide-gray-200 p-2 text-sm text-gray-700">
            {notifications.map((note, index) => (
              <li key={index} className="py-2 px-3 hover:bg-gray-100 rounded">
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
