import { CircleCheckBig } from "lucide-react";

const PricingFeatures = ({feature}) => {
    return (
        <div>
            <p><CircleCheckBig className="inline mr-2"></CircleCheckBig>{feature}</p>
        </div>
    );
};

export default PricingFeatures;