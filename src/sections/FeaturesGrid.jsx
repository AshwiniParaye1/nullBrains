// src/sections/FeaturesGrid.jsx

import FeatureCard from "../components/FeatureCard";
import { features } from "../data/features";

const FeaturesGrid = () => {
  return (
    <div className="container mx-auto px-6 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
