import React from "react";
import merchant from "../../assets/location-merchant.png";
import bemerchant from "../../assets/be-a-merchant-bg.png";

const BeMerchant = () => {
  return (
    <div className="md:flex items-center mb-16 bg-[#03373D] md:px-15 px-5 text-white rounded-3xl">
      <div className="space-y-4 mb-12">
        <img className="" src={bemerchant} alt="" />
        <h1 className="md:text-3xl text-2xl font-bold">
          Merchant and Customer Satisfaction <br /> is Our First Priority
        </h1>
        <p>
          We offer the lowest delivery charge with the highest value along with{" "}
          <br />
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <button className="py-2 px-4 rounded-full border font-bold bg-[#CAEB66] text-black">
          Become a Merchant
        </button>
        <button className="py-2 px-4 rounded-full border font-bold md:ml-3 border-[#CAEB66] text-[#CAEB66]">
          Earn with Profast Courier
        </button>
      </div>
      <div>
        <img src={merchant} alt="" />
      </div>
    </div>
  );
};

export default BeMerchant;
