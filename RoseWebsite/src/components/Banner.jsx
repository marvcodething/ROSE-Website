import React from 'react';
import banner from '../assets/banner.jpg';
// spell-checker: disable
const Banner = () => {
  return (
    <div className="relative font-sans">
      <img src={banner} alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-65 z-10"></div>
      <div className="relative z-20 min-h-[472.5px] h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">United We Bargain. Divided We Beg.</h2>
        <p className="sm:text-lg text-base text-center text-gray-200">Empowering workers, strengthening communities, and shaping a better future together.</p>
      </div>
    </div>
  );
};

export default Banner;