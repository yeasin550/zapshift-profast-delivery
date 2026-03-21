import React from "react";
// import service from "../../assets/service.png"

const cards = [
  {
    icon: "🔍",
    title: "Express  & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    icon: "⚙️",
    title: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  },
  {
    icon: "🚀",
    title: "Fulfillment Solution",
    desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    icon: "🛒",
    title: "Cash on Home Delivery",
    desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    icon: "🛒",
    title: "Corporate Service / Contract In Logistics",
    desc: "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    icon: "🛒",
    title: "Parcel Return",
    desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const OurServices = () => {
  return (
    <section className="py-16 px-6 border rounded-2xl mt-5">
      <div className=" text-center mb-5">
        <h2 className="text-4xl font-bold ">Our Services</h2>
        <p className="mt-4">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br/> business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="gap-10">
        {/* Right Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white hover:bg-[#CAEB66] border flex flex-col items-center justify-center p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{card.title}</h3>
              <p className="text-gray-600 text-center text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
