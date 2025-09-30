import { use } from "react";
import PricingCard from "../pricingCard/PricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <div>
      <h2 className="text-4xl md:text-5xl text-center">Get Our Membership</h2>
      <div className="grid gird-cols-1 md:grid-cols-2 gap-5">
        {pricingData.map((cardData) => (
          <PricingCard key={cardData.id} cardData={cardData}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
