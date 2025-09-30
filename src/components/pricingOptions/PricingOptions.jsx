import { use } from "react";
import PricingCard from "../pricingCard/PricingCard";
import DaisyPricingCard from "../daisyPricingCard/DaisyPricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <div>
      <h2 className="text-4xl md:text-5xl text-center">Get Our Membership</h2>
      <div className="grid gird-cols-1 md:grid-cols-2 gap-5">
        {/* {pricingData.map((cardData) => (
          <PricingCard key={cardData.id} cardData={cardData}></PricingCard>
        ))} */}

        {
          pricingData.map(cardData=><DaisyPricingCard
            key={cardData.id}
            cardData={cardData}
          ></DaisyPricingCard>)
        }
      </div>
    </div>
  );
};

export default PricingOptions;
