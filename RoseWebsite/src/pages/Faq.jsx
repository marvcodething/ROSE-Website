import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a student workers' union?",
      answer: "A student workers' union is an organization that advocates for the rights and interests of students who are employed at their educational institution, ensuring fair wages, reasonable hours, and safe working conditions.",
    },
    {
      question: "Why should I join a student workers' union?",
      answer: "Joining a union allows you to have a collective voice to advocate for better pay, protections, and policies specific to student workers. It also provides access to resources, legal support, and a community of workers with shared goals.",
    },
    {
      question: "How do union dues work?",
      answer: "Union dues are a small percentage of your paycheck that goes toward funding the union's activities, including negotiations, legal representation, and organizing efforts. Your union will provide specific details about dues and how they are used.",
    },
    {
      question: "Can international students join the union?",
      answer: "Yes, international students are generally eligible to join the union. The union ensures that all workers, regardless of visa status, are treated fairly and provided with the same protections.",
    },
    {
      question: "What should I do if I feel overworked or underpaid?",
      answer: "If you feel overworked or underpaid, you should document your concerns and reach out to your union representative. They can help you understand your rights and work toward resolving the issue with your employer.",
    },
    {
      question: "Does the union help with workplace harassment or discrimination?",
      answer: "Yes, unions provide support for workers who experience harassment or discrimination. They can assist with filing grievances, offering legal advice, and ensuring accountability from employers.",
    },
    {
      question: "How can I get more involved in the union?",
      answer: "You can get involved by attending union meetings, volunteering for organizing events, or running for leadership positions. Active participation strengthens the union and its ability to advocate for workers.",
    },
    {
      question: "Are there risks to joining a union?",
      answer: "Union membership is a legally protected right, meaning your employer cannot retaliate against you for joining. However, some employers may discourage union activity. Your union can provide guidance and resources to address such situations.",
    },
    {
      question: "What is the process for negotiating a new contract?",
      answer: "Negotiating a new contract typically involves union representatives meeting with the employer to discuss and agree on wages, benefits, and working conditions. Members may vote on whether to approve the final agreement.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="font-sans divide-y rounded-lg max-w-4xl mx-auto px-4 py-20">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-2">
            Find answers to common questions about your rights, union membership, and workplace protections.
          </p>
        </div>
        {faqs.map((faq, index) => (
          <div key={index} className="accordion" role="region">
            <button
              type="button"
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
              className={`toggle-button w-full text-base outline-none text-left font-semibold py-6 ${
                openIndex === index ? "text-orange-500" : "text-purple-500"
              } hover:text-orange-500 flex items-center`}
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
                <path d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5h32.118C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
              </svg>
            </button>
            <div
              id={`faq-${index}`}
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
