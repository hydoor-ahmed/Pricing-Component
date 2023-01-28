import { useState } from "react";
import PricingPlan from "./components/PricingPlan";
const App = () => {
  const [pricingType, setPricingType] = useState(true);
  return (
    <div className="md:h-screen flex items-center flex-col mainBg bg-veryLightGrayishBlue pb-6 md:pb-0">
      <h1 className="text-grayishBlue font-bold text-3xl mt-12">Our Pricing</h1>

      <div className="flex items-center mt-4">
        <h1 className="font-bold text-lightGrayishBlue text-sm">Annually</h1>
        <div
          onClick={() => setPricingType(!pricingType)}
          className="hover:from-linearFrom/50 hover:to-linearTo/50 cursor-pointer mx-4 bg-gradient-to-r from-linearFrom to-linearTo p-1 rounded-full w-12 h-7"
        >
          <span
            className={`${
              pricingType ? "ml-auto" : ""
            } block w-5 h-5 bg-white rounded-full`}
          ></span>
        </div>
        <h1 className="font-bold text-lightGrayishBlue text-sm">Monthly</h1>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 place-items-center gap-4 md:gap-0">
        <PricingPlan
          pricingFeature1="500 GB Storage"
          pricingFeature2="2 Users Allowed"
          pricingFeature3="Send up to 3 GB"
          pricingType={pricingType}
          pro={false}
          monthlyPrice="$19.99"
          annuallyPrice="$199.99"
        />
        <PricingPlan
          pricingFeature1="1 TB Storage"
          pricingFeature2="5 Users Allowed"
          pricingFeature3="Send up to 10 GB"
          pricingType={pricingType}
          pro={true}
          monthlyPrice="$24.99"
          annuallyPrice="$249.99"
        />
        <PricingPlan
          pricingFeature1="2 TB Storage"
          pricingFeature2="10 Users Allowed"
          pricingFeature3="Send up to 20 GB"
          pricingType={pricingType}
          pro={false}
          monthlyPrice="$19.99"
          annuallyPrice="$399.99"
        />
      </div>
    </div>
  );
};

export default App;
