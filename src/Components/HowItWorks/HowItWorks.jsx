import React from "react";

const cards = [
  {
    icon: "🔍",
    title: "Booking Pick & Drop",
    desc: "Explore features and find what fits your needs quickly and easily.",
  },
  {
    icon: "⚙️",
    title: "Cash On Delivery",
    desc: "Adjust settings and personalize the experience to match your preferences.",
  },
  {
    icon: "🚀",
    title: "Delivery Hub",
    desc: "Get started instantly and put everything into action with minimal effort.",
  },
  {
    icon: "📊",
    title: "Booking SME & Corporate",
    desc: "Monitor results and improve performance with real-time insights.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 rounded-md">
         <div>
          <h2 className="text-3xl mb-4 font-bold text-gray-800">
            How It Works
          </h2>
         
        </div>
      <div className="">
        
        {/* Left Side */}
       

        {/* Right Side */}
        <div className="md:flex gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white hover:border border-red-600 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;