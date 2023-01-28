const PricingPlan = ({ pricingType, monthlyPrice, annuallyPrice, pro, pricingFeature1, pricingFeature2, pricingFeature3 }) => {
  return (
    <div className={`rounded-xl py-4 px-8 text-center text-darkGrayishBlue w-64 lg:w-80 shadow ${pro ? "bg-gradient-to-b from-linearFrom to-linearTo white h-[450px]" : "bg-white"}`}>
      <h1 className={`font-bold my-5 ${pro ? "text-white" : "text-grayishBlue"}`}>Basic</h1>
      <h1 className="my-4 text-6xl font-bold">{ pricingType ? monthlyPrice: annuallyPrice }</h1>

      <ul className="my-6 text-sm">
        <li className="py-4 font-bold border-t border-lightGrayishBlue">
          <h1>{ pricingFeature1 }</h1>
        </li>
        <li className="py-4 font-bold border-t border-lightGrayishBlue">
          <h1>{ pricingFeature2 }</h1>
        </li>
        <li className="py-4 font-bold border-y border-lightGrayishBlue">
          <h1>{ pricingFeature3 }</h1>
        </li>
      </ul>

      <button className={`${pro ? "bg-white text-linearTo hover:border-white hover:bg-transparent proBtn" : "bg-gradient-to-r from-linearFrom to-linearTo hover:border-grayishBlue"} transition duration-300 font-bold border border-transparent mb-4 block text-white w-full py-3 rounded uppercase text-xs hover:from-transparent hover:text-linearTo`}>
        Learn More
      </button>
    </div>
  );
};

export default PricingPlan;
