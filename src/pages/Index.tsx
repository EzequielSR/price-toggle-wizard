
import React from 'react';
import PricingSection from '../components/PricingSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full">
        <PricingSection />
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 md:w-40 md:h-40">
        <div className="w-full h-full rounded-full bg-teal-light opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-56 md:h-56">
        <div className="w-full h-full rounded-full bg-purple-light opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default Index;
