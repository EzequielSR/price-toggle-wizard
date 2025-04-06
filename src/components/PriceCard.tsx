
import React from 'react';

interface PriceCardProps {
  tier: string;
  price: string;
  storage: string;
  users: string;
  bandwidth: string;
  featured?: boolean;
}

const PriceCard: React.FC<PriceCardProps> = ({ 
  tier, 
  price, 
  storage, 
  users, 
  bandwidth, 
  featured = false 
}) => {
  return (
    <div 
      className={`price-card rounded-lg overflow-hidden shadow-md ${
        featured 
          ? 'featured-card text-white' 
          : 'bg-white text-gray-800'
      } flex flex-col h-full`}
    >
      <div className="p-6 text-center border-b border-opacity-20 border-gray-300">
        <h3 className={`text-lg font-semibold ${featured ? 'text-white' : 'text-gray-600'}`}>{tier}</h3>
      </div>
      
      <div className="p-6 text-center">
        <div className={`text-4xl font-bold ${featured ? 'text-white' : 'text-gray-800'} mb-1`}>
          {price}
        </div>
        <div className="space-y-4 my-6">
          <p className={`py-3 text-sm ${featured ? 'text-white' : 'text-gray-600'} border-b border-opacity-20 ${featured ? 'border-white' : 'border-gray-300'}`}>
            {storage}
          </p>
          <p className={`py-3 text-sm ${featured ? 'text-white' : 'text-gray-600'} border-b border-opacity-20 ${featured ? 'border-white' : 'border-gray-300'}`}>
            {users}
          </p>
          <p className={`py-3 text-sm ${featured ? 'text-white' : 'text-gray-600'}`}>
            {bandwidth}
          </p>
        </div>
        
        <button 
          className={`learn-more-btn w-full py-3 rounded-md text-sm uppercase tracking-wider font-semibold mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            featured 
              ? 'bg-white text-purple-600 hover:bg-opacity-90 focus:ring-white' 
              : 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500'
          }`}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
