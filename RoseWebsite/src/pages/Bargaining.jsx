import React, { useState } from 'react';

const AccordionItem = ({ title, content, link, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 px-6 text-left hover:bg-gray-50 focus:outline-none flex justify-between items-center"
        onClick={onClick}
      >
        <span>{title}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 py-4 px-6' : 'max-h-0'
        }`}
      >
        {link ? (
          <a href={link} className="text-purple-600 hover:text-orange-500 underline">
            {content}
          </a>
        ) : (
          <span className="text-gray-600">{content}</span>
        )}
      </div>
    </div>
  );
};

const Bargaining = () => {
  const [openRoseItems, setOpenRoseItems] = useState({});
  const [openOxyItems, setOpenOxyItems] = useState({});

  const bargainingTopics = [
    { title: "Free Speech", rose: { text: "1/22/2025", link: "https://drive.google.com/file/d/1cpL_NLekuuklZNxLq3aHnilRMP9NJNIO/view?usp=sharing" }, oxy: { text: "No proposal as of yet", link: null } },
    { title: "Tuition Transparency & Cap", rose: { text: "1/22/2025", link: "https://drive.google.com/open?id=1xJUW4oUUOP1_0ELEtIO3rWPXjVw7VDlw" }, oxy: { text: "No proposal as of yet", link: null } },
    { title: "Sanctuary Campus", rose: { text: "1/22/2025", link: "https://drive.google.com/open?id=19ivPMauJIv0gVXYVBt7FJYNHReA6yHdS" }, oxy: { text: "No proposal as of yet", link: null } },
    { title: "Grievance and Arbitation", rose: { text: "No proposal as of yet", link: null }, oxy: { text: "1/22/2025", link: "https://drive.google.com/open?id=1rgEC2Y1N3amVZhAJo_CjoRl7eFrLBBuZ" } },
    { title: "Hour of Work and TimeKeeping", rose: { text: "No proposal as of yet", link: null }, oxy: { text: "1/22/2025", link: "https://drive.google.com/open?id=12OJuFaQhQR61BC7V89MjFfWVQ8WlSvpf" } },
    { title: "Management Functions", rose: { text: "No proposal as of yet", link: null }, oxy: { text: "1/22/2025", link: "https://drive.google.com/open?id=1HiOUzK-QBjRr6gVN_c3ajcTu3bQPwzLz" } },
    { title: "No Economic Activity", rose: { text: "No proposal as of yet", link: null }, oxy: { text: "1/22/2025", link: "https://drive.google.com/open?id=13EEX9SrbZj_NVf1wwaiyY0XAFB0zzDxg" } },
    { title: "Non-Discrimination", rose: { text: "No proposal as of yet", link: null }, oxy: { text: "1/22/2025", link: "https://drive.google.com/open?id=1ZkgqnNcXlYYTw5rAjh6gLH5auUPE0sYS" } },
    { title: "Paid Sick Leave", rose: { text: "No proposal as of yet", link: null }, oxy: { text: "1/22/2025", link: "https://drive.google.com/open?id=1LuRzV3muWLJZWnb0vG4Azh1d3jrO669R" } },
    { title: "Payroll and Direct Deposit", rose: { text: "No proposal as of yet", link: null }, oxy: { text: "1/22/2025", link: "https://drive.google.com/open?id=1R1S8TAHUbGO51-pEPZP9cXoIGZPSXtOb" } },
    { title: "Recognition", rose: { text: "No proposal as of yet", link: null }, oxy: { text: "1/22/2025", link: "https://drive.google.com/open?id=1t0zfrZwz284x_By6_pC_q01V4y7gpEXK" } },
    { title: "Savings", rose: { text: "No proposal as of yet", link: null }, oxy: { text: "1/22/2025", link: "https://drive.google.com/open?id=197pgFXUCMPadq1q-whT2Ygefusz9KDjZ" } },
    { title: "Student Worker Status and Classifications", rose: { text: "No proposal as of yet", link: null }, oxy: { text: "1/22/2025", link: "https://drive.google.com/open?id=1pXN8PrBRmFCpZRgKasPYmz8HOwxsTd6h" } },
    { title: "Term of Agreement", rose: { text: "No proposal as of yet", link: null }, oxy: { text: "1/22/2025", link: "https://drive.google.com/open?id=1MKURpQFw8oRHHo8w3gEocSGWeYylh-AI" } },
    { title: "Union Membership and Dues", rose: { text: "No proposal as of yet", link: null }, oxy: { text: "1/22/2025", link: "https://drive.google.com/open?id=1bYswTPHXL6Ea3Rhy2i7fVpURCrFBf9Qr" } },
    { title: "Union Stewards", rose: { text: "No proposal as of yet", link: null }, oxy: { text: "1/22/2025", link: "https://drive.google.com/open?id=1ps6p4s64q1LsyvNUXnZOSf176-w4KWhj" } }
  ];

  const toggleRoseItem = (index) => {
    setOpenRoseItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleOxyItem = (index) => {
    setOpenOxyItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="bg-white min-h-screen">
    <div className="container mx-auto px-4 py-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Bargaining Portal</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* ROSE Proposals */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-600 text-center">ROSE Proposals</h2>
          <div className="border border-gray-200 rounded-lg">
            {bargainingTopics.map((topic, index) => (
              <AccordionItem
                key={`rose-${index}`}
                title={topic.title}
                content={topic.rose.text}
                link={topic.rose.link}
                isOpen={openRoseItems[index]}
                onClick={() => toggleRoseItem(index)}
              />
            ))}
          </div>
        </div>

        {/* Oxy Proposals */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-500 text-center">Oxy Proposals</h2>
          <div className="border border-gray-200 rounded-lg">
            {bargainingTopics.map((topic, index) => (
              <AccordionItem
                key={`oxy-${index}`}
                title={topic.title}
                content={topic.oxy.text}
                link={topic.oxy.link}
                isOpen={openOxyItems[index]}
                onClick={() => toggleOxyItem(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Bargaining;