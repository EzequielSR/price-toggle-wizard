
import React, { useState } from 'react';
import PriceToggle from './PriceToggle';
import PriceCard from './PriceCard';

interface PricingData {
  tier: string;
  monthlyPrice: string;
  annualPrice: string;
  storage: string;
  users: string;
  bandwidth: string;
  featured?: boolean;
}

const pricingData: PricingData[] = [
  {
    tier: 'Basic',
    monthlyPrice: '$19.99',
    annualPrice: '$199.99',
    storage: '500 GB Storage',
    users: '2 Users Allowed',
    bandwidth: 'Send up to 3 GB',
  },
  {
    tier: 'Professional',
    monthlyPrice: '$24.99',
    annualPrice: '$249.99',
    storage: '1 TB Storage',
    users: '5 Users Allowed',
    bandwidth: 'Send up to 10 GB',
    featured: true,
  },
  {
    tier: 'Master',
    monthlyPrice: '$39.99',
    annualPrice: '$399.99',
    storage: '2 TB Storage',
    users: '10 Users Allowed',
    bandwidth: 'Send up to 20 GB',
  },
];

const PricingSection: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-700 mb-2">Our Pricing</h2>
        <PriceToggle onToggle={setIsMonthly} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingData.map((plan, index) => (
          <PriceCard
            key={index}
            tier={plan.tier}
            price={isMonthly ? plan.monthlyPrice : plan.annualPrice}
            storage={plan.storage}
            users={plan.users}
            bandwidth={plan.bandwidth}
            featured={plan.featured}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
