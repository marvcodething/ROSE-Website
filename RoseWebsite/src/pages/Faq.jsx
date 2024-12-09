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
      question: "What is a labor union?",
      answer: "A labor union is an organization that represents the collective interests of workers, bargaining with employers over wages, benefits, and working conditions.",
    },
    {
      question: "How do I join a union?",
      answer: "To join a union, you typically need to be employed in a job that is represented by a union. You can contact the union representative at your workplace or visit the union's website for more information.",
    },
    {
      question: "What are the benefits of joining a union?",
      answer: "Benefits of joining a union include collective bargaining for better wages and benefits, job security, legal representation, and a stronger voice in workplace decisions.",
    },
    {
      question: "How does collective bargaining work?",
      answer: "Collective bargaining is the process where union representatives negotiate with employers on behalf of union members to reach agreements on wages, benefits, and working conditions.",
    },
    {
      question: "What should I do if I have a dispute with my employer?",
      answer: "If you have a dispute with your employer, you should contact your union representative for assistance. They can provide guidance and support in resolving the issue.",
    },
    {
      question: "What is a collective bargaining agreement (CBA)?",
      answer: "A collective bargaining agreement (CBA) is a written contract between the union and the employer that outlines the terms and conditions of employment, including wages, benefits, and working conditions.",
    },
  ];

  return (
    <div className="bg-white">
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
    </div>
  );
};

export default Faq;