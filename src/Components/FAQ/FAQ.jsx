import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does this posture corrector work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
      question: "What is the pricing structure?",
      answer:
        "Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="font-bold text-4xl">
            Frequently Asked Question (FAQ)
          </h2>
          <p>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
        </div>

        <div className="max-w-5xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 hover:border-black shadow-lg rounded-lgr"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6 cursor-pointer"
              >
                <span className="text-lg font-semibold text-black">
                  {faq.question}
                </span>

                {/* Arrow */}
                <svg
                  className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

           <div className="flex items-center gap-2 w-64 mx-auto mt-5">
         <button className="py-1.5 px-4 rounded-xl border font-bold bg-[#CAEB66] text-black cursor-pointer">
          See More FAQ’s
        </button>
          <GoArrowUpRight className='border w-8 h-8 p-1 rounded-full cursor-pointer' />
      </div>
        
      </div>
     
    </section>
  );
};

export default FAQ;