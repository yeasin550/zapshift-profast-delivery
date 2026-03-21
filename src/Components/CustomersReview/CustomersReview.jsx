import React, { useState } from "react";
import customer from "../../assets/customer-top.png"
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    text: "The service was exceptional from start to finish. A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    text: "We've seen a 40% increase in productivity. A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine.",
  },
  {
    name: "Emma Rodriguez",
    role: "CEO",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    text: "Their support is unmatched. A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine.",
  },
  {
    name: "David Wilson",
    role: "Manager",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    text: "The ROI was evident within the first quarter. A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine.",
  },
];

const CustomersReview = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // helper to get 3 cards (prev, current, next)
  const getItems = () => {
    const prevIndex = index === 0 ? testimonials.length - 1 : index - 1;
    const nextIndex = (index + 1) % testimonials.length;

    return [
      testimonials[prevIndex],
      testimonials[index],
      testimonials[nextIndex],
    ];
  };

  const visibleItems = getItems();

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 text-center">
      <div className="tect-center mb-12">
        <img className="w-48 mx-auto" src={customer} alt="" />

        <h2 className="text-3xl font-bold mb-5">
          What our customers are sayings
        </h2>
        <p>
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, <br /> reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <div className="md:flex items-center justify-center gap-6">
        {visibleItems.map((item, i) => {
          const isCenter = i === 1;

          return (
            <div
              key={i}
              className={`transition-all duration-150 p-6 rounded-xl shadow-lg bg-white md:w-96 h-52 border ${
                isCenter ? "scale-110 opacity-100 hover:bg-[#CAEB66]" : "scale-90 opacity-50"
              }`}
            >
              <p className="mb-4 text-left">{item.text}</p>

             <div className="flex items-center justify-start gap-2">
               <img
                src={item.img}
                className="w-14 h-14 rounded-full object-cover border"
                alt=""
              />

             <div className="text-left">
               <h4 className="font-semibold">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.role}</p>
             </div>
             </div>
            </div>
          );
        })}
      </div>

      {/* Buttons */}
      <div className="flex justify-center mt-8 gap-4">
        <button onClick={prev} className="text-3xl cursor-pointer">
          <FaChevronCircleLeft />
        </button>
        <button onClick={next} className="text-3xl cursor-pointer">
         <FaChevronCircleRight />
        </button>
      </div>
    </div>
  );
};

export default CustomersReview;
