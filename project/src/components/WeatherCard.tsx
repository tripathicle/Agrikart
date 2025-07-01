import React from 'react';
import { Cloud, Sun, CloudRain, Wind, Droplets } from 'lucide-react';
import { WeatherData } from '../types';

interface WeatherCardProps {
  weather: WeatherData;
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny': return <Sun className="h-8 w-8 text-yellow-500" />;
      case 'cloudy': case 'partly cloudy': return <Cloud className="h-8 w-8 text-gray-500" />;
      case 'rain': return <CloudRain className="h-8 w-8 text-blue-500" />;
      default: return <Sun className="h-8 w-8 text-yellow-500" />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">Weather Today</h3>
          <p className="text-blue-100 text-sm">{weather.location}</p>
        </div>
        {getWeatherIcon(weather.condition)}
      </div>

      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-3xl font-bold">{weather.temperature}°C</div>
          <div className="text-blue-100">{weather.condition}</div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <Droplets className="h-4 w-4" />
            <span>{weather.humidity}% Humidity</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Wind className="h-4 w-4" />
            <span>{weather.windSpeed} km/h Wind</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-3">5-Day Forecast</h4>
        <div className="grid grid-cols-5 gap-2">
          {weather.forecast.map((day, index) => (
            <div key={index} className="text-center">
              <div className="text-xs text-blue-100 mb-1">{day.day}</div>
              <div className="mb-1">{getWeatherIcon(day.condition)}</div>
              <div className="text-xs">
                <div className="font-medium">{day.high}°</div>
                <div className="text-blue-200">{day.low}°</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}