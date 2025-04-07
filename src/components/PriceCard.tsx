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
      className={`rounded-lg overflow-hidden shadow-lg ${
        featured 
          ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white' 
          : 'bg-white text-gray-800'
      } flex flex-col h-full transform hover:-translate-y-1 transition-all duration-300`}
    >
      <div className="p-6 text-center border-b border-opacity-20 border-gray-300">
        <h3 className={`text-lg font-semibold ${featured ? 'text-white' : 'text-gray-600'}`}>{tier}</h3>
      </div>
      
      <div className="p-6 text-center">
        <div className={`text-5xl font-bold ${featured ? 'text-white' : 'text-gray-800'} mb-6`}>
          {price}
        </div>
        <div className="space-y-4 mb-8">
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
          className={`w-full py-3 rounded-md text-sm uppercase tracking-wider font-semibold mt-4 transition-all duration-300 border-2 ${
            featured
              ? 'bg-white text-purple-600 border-white hover:bg-transparent hover:text-white hover:border-white'
              : 'bg-purple-600 text-white border-purple-600 hover:bg-white hover:text-purple-600 hover:border-purple-600'
          }`}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PriceCard;