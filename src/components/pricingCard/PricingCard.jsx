import PricingFeatures from "../pricingFeatures/PricingFeatures";

const PricingCard = ({ cardData }) => {
  return (
    <div className="flex flex-col border border-amber-950 bg-amber-700 rounded-2xl p-4">
      <p className="text-4xl md:text-5xl lg:text-7xl">{cardData.name}</p>
      <h4 className="text-3xl">{cardData.price}</h4>
      <div className="flex-1 bg-amber-500 p-4 rounded-sm">
        <p className="text-xl font-bold">{cardData.description}</p>
        {cardData.features.map((feature, index) => (
          <PricingFeatures key={index} feature={feature}></PricingFeatures>
        ))}
      </div>
      <button className="btn w-full">Subscribe</button>
    </div>
  );
};

export default PricingCard;
