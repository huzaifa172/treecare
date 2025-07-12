'use client';

import { useState, useEffect } from 'react';

export default function TreeScene3D() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for 3D scene
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
            Interactive 3D Tree Visualization
          </h2>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Explore your trees in stunning 3D. Rotate, zoom, and inspect every detail 
            to understand their health and growth patterns.
          </p>
        </div>

        <div className="relative">
          {/* 3D Scene Container */}
          <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl p-8 min-h-[500px] flex items-center justify-center relative overflow-hidden">
            {isLoading ? (
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
                <p className="text-green-700 font-medium">Loading 3D Scene...</p>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center">
                {/* Placeholder 3D Tree Visualization */}
                <div className="relative w-64 h-80 mb-8">
                  {/* Tree Trunk */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-32 bg-gradient-to-t from-amber-800 to-amber-600 rounded-full"></div>
                  
                  {/* Tree Crown */}
                  <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-b from-green-400 to-green-600 rounded-full opacity-80"></div>
                  <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-b from-green-300 to-green-500 rounded-full opacity-60"></div>
                  <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-b from-green-200 to-green-400 rounded-full opacity-40"></div>
                  
                  {/* Health Indicators */}
                  <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-12 right-4 w-4 h-4 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-20 right-4 w-4 h-4 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>

                {/* Controls */}
                <div className="flex space-x-4">
                  <button className="bg-white/80 hover:bg-white text-green-700 px-4 py-2 rounded-lg font-medium transition-colors shadow-md">
                    Rotate
                  </button>
                  <button className="bg-white/80 hover:bg-white text-green-700 px-4 py-2 rounded-lg font-medium transition-colors shadow-md">
                    Zoom
                  </button>
                  <button className="bg-white/80 hover:bg-white text-green-700 px-4 py-2 rounded-lg font-medium transition-colors shadow-md">
                    Inspect
                  </button>
                </div>

                {/* Health Status */}
                <div className="mt-6 bg-white/90 rounded-lg p-4 shadow-md">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-semibold text-green-800">Tree Health: Excellent</span>
                  </div>
                  <div className="text-sm text-green-700">
                    Height: 12.5m | Age: 8 years | Last Check: 2 hours ago
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Floating Info Cards */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <div className="text-sm font-medium text-green-800">Real-time Data</div>
            <div className="text-xs text-green-600">Updated every 5 minutes</div>
          </div>

          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <div className="text-sm font-medium text-green-800">AI Analysis</div>
            <div className="text-xs text-green-600">98% accuracy</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
            <div className="text-2xl mb-3">🔍</div>
            <h3 className="font-semibold text-green-800 mb-2">Detailed Inspection</h3>
            <p className="text-green-700 text-sm">Zoom in to examine leaves, bark, and branches for signs of disease or stress.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
            <div className="text-2xl mb-3">📊</div>
            <h3 className="font-semibold text-green-800 mb-2">Growth Tracking</h3>
            <p className="text-green-700 text-sm">Monitor growth patterns and compare historical data to predict future development.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
            <div className="text-2xl mb-3">🌡️</div>
            <h3 className="font-semibold text-green-800 mb-2">Health Monitoring</h3>
            <p className="text-green-700 text-sm">Real-time health indicators and automated alerts for any issues detected.</p>
          </div>
        </div>
      </div>
    </section>
  );
}