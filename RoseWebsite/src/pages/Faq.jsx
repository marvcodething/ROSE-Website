import React, { useState } from 'react';

const Faq = () => {
  // State to track which accordion item is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to open or close an accordion item
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQs data
  const faqs = [
    {
      question: "Are there any special discounts or promotions available during the event?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
    },
    {
      question: "What are the dates and locations for the product launch events?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
    },
    {
      question: "Can I bring a guest with me to the product launch event?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
    },
    {
      question: "How can I register for the event?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
    },
    {
      question: "Is there parking available at the venue?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
    },
    {
      question: "How can I contact the event organizers?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
    },
  ];

  return (
    <div className="font-sans divide-y rounded-lg max-w-4xl mx-auto px-4 py-20">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Frequently asked questions</h2>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} className="accordion" role="accordion">
          <button
            type="button"
            className={`toggle-button w-full text-base outline-none text-left font-semibold py-6 ${openIndex === index ? "text-orange-500" : "text-purple-500"} hover:text-orange-500 flex items-center`}

            onClick={() => toggleItem(index)}
          >
            <span className="mr-4">{faq.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 42 42"
              className={`w-3 fill-current ml-auto shrink-0 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <path
                d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5h32.118C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
              />
            </svg>
          </button>
          <div
            className={`content overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[1000px] visible" : "max-h-0 invisible"
            }`}
          >
            <p className="text-sm text-gray-600 py-4">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
