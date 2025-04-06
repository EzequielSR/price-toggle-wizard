
import React, { useState } from 'react';
import { handleKeyboardEvent } from '../utils/keyboard';

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

  return (
    <div className="flex items-center justify-center gap-6 mt-6 mb-12">
      <span className={`text-sm md:text-base transition-colors ${isMonthly ? 'text-gray-400' : 'text-gray-700 font-medium'}`}>Annually</span>
      <label 
        className="switch-container"
        onKeyDown={(e) => handleKeyboardEvent(e, handleToggle)} 
        tabIndex={0}
        role="switch"
        aria-checked={isMonthly}
      >
        <input 
          type="checkbox" 
          checked={isMonthly} 
          onChange={handleToggle}
          aria-label="Toggle between annual and monthly billing"
          className="sr-only"
        />
        <span className="switch-slider"></span>
      </label>
      <span className={`text-sm md:text-base transition-colors ${isMonthly ? 'text-gray-700 font-medium' : 'text-gray-400'}`}>Monthly</span>
    </div>
  );
};

export default PriceToggle;
