
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
    <div className="flex items-center justify-center gap-4 mt-6 mb-12">
      <span className={`text-sm md:text-base ${isMonthly ? 'text-gray-400' : 'text-gray-700 font-medium'}`}>Annually</span>
      <label className="switch-container" onKeyDown={handleKeyDown} tabIndex={0}>
        <input 
          type="checkbox" 
          checked={isMonthly} 
          onChange={handleToggle}
          aria-label="Toggle between annual and monthly billing"
        />
        <span className="switch-slider"></span>
      </label>
      <span className={`text-sm md:text-base ${isMonthly ? 'text-gray-700 font-medium' : 'text-gray-400'}`}>Monthly</span>
    </div>
  );
};

export default PriceToggle;
