import React from 'react';
import { FaInstagram, FaMailBulk } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import contactbanner from '../assets/contactbanner.png';

const Contact = () => {
  return (
    <div className="font-[sans-serif] max-w-6xl mx-auto p-4">
      <div className="relative w-full h-60 overflow-hidden">
        <img src={contactbanner} alt="Banner Image" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black shadow overlay */}
      </div>
      <div className="bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-8">
        <h2 className="text-3xl text-gray-800 font-extrabold text-center mb-12">Contact us</h2>
        
        <form className="space-y-3 max-w-xl mx-auto text-gray-800">
          <input type='text' placeholder='Name' className="w-full border rounded py-3 px-4 text-sm focus:outline-purple-600" />
          <input type='email' placeholder='Email' className="w-full border rounded py-3 px-4 text-sm focus:outline-purple-600" />
          <textarea placeholder='Message' rows="6" className="w-full border rounded px-4 text-sm pt-3 focus:outline-purple-600"></textarea>
          <button type='button' className="text-white w-full bg-purple-600 hover:bg-orange-600 transition-color duration-300 rounded text-sm px-6 py-3 !mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' className="mr-2 inline" viewBox="0 0 548.244 548.244">
              <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" data-original="#000000" />
            </svg>
            Send Message
          </button>
        </form>

        {/* Updated Section */}
        <div className="flex justify-center mt-12">
          <div className="flex flex-col items-center text-center mx-20">
            <FaInstagram className="w-10 h-10 text-purple-600" />
            <h4 className="text-gray-800 text-base font-bold mt-4">DM us</h4>
            <p className="text-sm text-gray-500 mt-2">@rose.seiu</p>
          </div>

          <div className="flex flex-col items-center text-center mx-0">
            <FaMailBulk className="w-10 h-10 text-purple-600" />
            <h4 className="text-gray-800 text-base font-bold mt-4">Chat to us</h4>
            <p className="text-sm text-gray-500 mt-2">risingoccidentalstudentemployees@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
