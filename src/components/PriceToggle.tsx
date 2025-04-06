
import React, { useState } from 'react';

interface PriceToggleProps {
  onToggle: (isMonthly: boolean) => void;
}

const PriceToggle: React.FC<PriceToggleProps> = ({ onToggle }) => {
  const [isMonthly, setIsMonthly] = useState(false);

  const handleToggle = () => {
    const newValue = !isMonthly;
    setIsMonthly(newValue);
    onToggle(newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className="flex items-center justify-center gap-6 mt-6 mb-12">
      <span className={`text-sm md:text-base transition-colors ${isMonthly ? 'text-gray-400' : 'text-gray-700 font-medium'}`}>Annually</span>
      <div 
        className="w-[60px] h-[30px] bg-gradient-to-r from-purple-500 to-purple-700 rounded-full p-1 cursor-pointer relative"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="switch"
        aria-checked={isMonthly}
      >
        <div 
          className={`w-[22px] h-[22px] bg-white rounded-full transition-transform duration-300 ${
            isMonthly ? 'translate-x-[30px]' : 'translate-x-0'
          }`} 
        />
      </div>
      <span className={`text-sm md:text-base transition-colors ${isMonthly ? 'text-gray-700 font-medium' : 'text-gray-400'}`}>Monthly</span>
    </div>
  );
};

export default PriceToggle;
