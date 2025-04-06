
import React from 'react';
import PricingSection from '../components/PricingSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="w-full">
        <PricingSection />
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-60 h-60 md:w-96 md:h-96 -z-10 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M100,0 C150,50 150,150 100,200 C50,150 50,50 100,0" fill="none" stroke="#696EDD" strokeWidth="1.5" />
          <path d="M70,30 C120,80 120,120 70,170 C20,120 20,80 70,30" fill="none" stroke="#696EDD" strokeWidth="1.5" />
          <path d="M130,30 C180,80 180,120 130,170 C80,120 80,80 130,30" fill="none" stroke="#696EDD" strokeWidth="1.5" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-60 h-60 md:w-96 md:h-96 -z-10 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,100 C50,50 150,50 200,100 C150,150 50,150 0,100" fill="none" stroke="#696EDD" strokeWidth="1.5" />
          <path d="M30,70 C80,20 120,20 170,70 C120,120 80,120 30,70" fill="none" stroke="#696EDD" strokeWidth="1.5" />
          <path d="M30,130 C80,80 120,80 170,130 C120,180 80,180 30,130" fill="none" stroke="#696EDD" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
};

export default Index;
