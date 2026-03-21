import React from "react";
import Marquee from "react-fast-marquee";

import logo1 from "../../assets/brands/amazon.png";
import logo2 from "../../assets/brands/casio.png";
import logo3 from "../../assets/brands/moonstar.png";
import logo4 from "../../assets/brands/randstad.png";
import logo5 from "../../assets/brands/star.png";
import logo6 from "../../assets/brands/start_people.png";

import img1 from "../../assets/live-tracking.png"
import img2 from "../../assets/safe-delivery.png"

const LogoMarquee = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
   const data = [
    {
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
      img: img1,
    },
    {
      title: "100% Safe Delivery",
      desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      img: img2,
    },
    {
      title: "24/7 Call Center Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      img: "https://cdn-icons-png.flaticon.com/512/3059/3059446.png",
    },
  ];

  return (
    <div className="bg-white py-10 my-12">
      <h1 className="text-center mb-10 text-2xl font-bold">We've helped thousands of sales teams</h1>
      <Marquee
        direction="left" // right → left
        speed={50} // control speed
        pauseOnHover={true}
        gradient={false} // disable fade edges (optional)
      >
        {logos.map((logo, index) => (
          <div key={index} className="mx-8">
            <img src={logo} alt="logo" className="h-6 w-auto object-contain" />
          </div>
        ))}
      </Marquee>
      
    {/* Dotted Line */}
           <div className="border-t-2 border-dotted border-gray-700  mt-16"></div>

       <div className="w-full bg-gray-50 p-6 mt-12">
      <div className="max-w-5xl mx-auto space-y-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="md:flex justify-center items-center gap-10 bg-white p-5 rounded-2xl shadow-md h-56"
          >
            {/* Left Image */}
            <img
              src={item.img}
              alt=""
              className="w-36 h-36 object-contain"
            />

            {/* Dotted Line */}
           <div className="border-l-2 border-dotted border-gray-700 h-36"></div>

            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-1 text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default LogoMarquee;
