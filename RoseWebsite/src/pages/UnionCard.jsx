import React from 'react';
import { Toaster, toast } from 'react-hot-toast';
import unionbanner from '../assets/unionbanner.png';

const UnionCard = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // Validation
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "cellPhone",
      "homeAddress",
      "streetAddress",
      "city",
      "zipCode",
      "employer",
      "jobTitle",
      "signature",
      "terms",
      "electronicSignature",
      "todaysDate"
    ];

    for (const field of requiredFields) {
      if (!formData.get(field)) {
        toast.error("Please fill out all required fields.");
        return;
      }
    }

    // Email validation
    const email = formData.get("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Proceed with form submission
    formData.append("access_key", "96336478-98ce-42dc-8509-4997f3a8bb5c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success('Form submitted successfully!');
      console.log("Success", res);
      form.reset(); // Clear the form
    } else {
      toast.error('Submission failed. Please try again.');
      console.error("Failed", res);
    }
  };

  return (
    <div className="bg-white">
      <Toaster />
      <div className="font-[sans-serif] max-w-6xl mx-auto p-4">
        <div className="relative w-full h-60 overflow-hidden">
          {/* Placeholder image */}
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-lg">
            <img src={unionbanner} alt="Union Banner" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black shadow overlay */}
        </div>
        <div className="bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-8">
          <h2 className="text-3xl text-gray-800 font-extrabold text-center mb-12">Union Card</h2>

          <form onSubmit={onSubmit} className="space-y-6 max-w-2xl mx-auto text-gray-800">
            {/* Name Components */}
            <div className="space-y- bg-purple-400 rounded-md py-5 px-5">
              <input type="text" placeholder="First Name*" name="firstName" required className="w-full border rounded py-3 px-4 text-sm focus:outline-purple-600" />
              <input type="text" placeholder="Middle Initial" name="middleInitial" className="w-full border rounded py-3 px-4 text-sm focus:outline-purple-600" />
              <input type="text" placeholder="Last Name*" name="lastName" required className="w-full border rounded py-3 px-4 text-sm focus:outline-purple-600" />
            </div>

            {/* Contact Components */}
            <div className="space-y-4 bg-purple-400 rounded-md py-5 px-5">
              <input type="email" placeholder="Email Address*" name="email" required className="w-full border rounded py-3 px-4 text-sm focus:outline-purple-600" />
              <input type="tel" placeholder="Cell Phone*" name="cellPhone" required className="w-full border rounded py-3 px-4 text-sm focus:outline-purple-600" />
              <p className="text-sm text-gray-600 mt-2">
                By providing my cellular telephone number, I understand that SEIU and its locals and affiliates may use automated calling technologies and/or text message me on my cellular phone on a periodic basis. SEIU will never charge for text message alerts. Carrier message and data rates may apply to such alerts. To stop receiving messages, text STOP to 721721. Text HELP to 721721 for more information.
              </p>
              <input type="tel" placeholder="Home Phone" name="homePhone" className="w-full border rounded py-3 px-4 text-sm focus:outline-purple-600" />
            </div>

            {/* Address Components */}
            <div className="space-y-4 bg-purple-400 rounded-md py-5 px-5">
              <p className="text-sm text-gray-600">Home Address</p>
              <input type="text" placeholder="Street Address" name="streetAddress" className="w-full border rounded py-3 px-4 text-sm focus:outline-purple-600" />
              <input type="text" placeholder="City" name="city" className="w-full border rounded py-3 px-4 text-sm focus:outline-purple-600" />
              <input type="text" placeholder="Zip Code" name="zipCode" required className="w-full border rounded py-3 px-4 text-sm focus:outline-purple-600" />
            </div>

            {/* Other Components */}
            <div className="space-y-4 bg-purple-400 rounded-md py-5 px-5">
              <input type="text" placeholder="Employer*" name="employer" required className="w-full border rounded py-3 px-4 text-sm focus:outline-purple-600" />
              <input type="text" placeholder="Job Title*" name="jobTitle" required className="w-full border rounded py-3 px-4 text-sm focus:outline-purple-600" />
              <input type="text" placeholder="Department" name="department" className="w-full border rounded py-3 px-4 text-sm focus:outline-purple-600" />
              <textarea placeholder="Signature*" name="signature" required rows="3" className="w-full border rounded px-4 text-sm py-3 focus:outline-purple-600"></textarea>
              <p className="text-sm text-gray-600 mt-2">
                BY CLICKING SUBMIT, YOU ACCEPT THAT YOUR PRINTED NAME, IP ADDRESS AND THE DATE AND TIME WILL BE USED AS YOUR DIGITAL SIGNATURE FOR THE PURPOSES OF THIS FORM.
              </p>
              <label className="flex items-center space-x-3">
                <input type="checkbox" name="terms" required className="form-checkbox h-5 w-5 text-purple-600" />
                <span className="text-sm text-gray-600">YES, I UNDERSTAND AND AGREE TO THE TERMS ABOVE.*</span>
              </label>
              <input type="text" placeholder="Electronic Signature*" name="electronicSignature" required className="w-full border rounded py-3 px-4 text-sm focus:outline-purple-600" />
              <input type="date" name="todaysDate" required className="w-full border rounded py-3 px-4 text-sm focus:outline-purple-600" />
            </div>

            <button type="submit" className="text-white w-full bg-purple-600 hover:bg-orange-500 transition-colors duration-300 rounded text-sm px-6 py-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UnionCard;
