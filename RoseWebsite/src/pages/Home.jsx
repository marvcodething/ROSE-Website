import React from 'react';
import Banner from '../components/Banner';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
// spell-checker: disable
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <div className='bg-purple-600 h-16 absolute top-[-64px] w-full'></div>
      <Banner />
      <div className="font-sans bg-gray-50 px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto">
          <div className="text-left">
            <h2 className="text-gray-800 text-3xl font-bold mb-6">Rising Occidental Student Employees: SEIU 721</h2>
            <p className="mb-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, ipsum vel iaculis bibendum, justo turpis ullamcorper mauris, non aliquam nisi purus vel nisl. Integer efficitur turpis in bibendum tincidunt.</p>
            <p className="mb-4 text-sm text-gray-500">Nulla facilisi. Vestibulum fringilla leo et purus consectetur, vel tincidunt dolor rhoncus. In hac habitasse platea dictumst. Fusce vel sodales elit. Suspendisse potenti. Sed eget consequat nisi.</p>
            <p className="text-sm text-gray-500">consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula. nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
            <p className="text-sm text-gray-500">consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula. nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
          </div>
          <div className="flex flex-col gap-12 items-center py-12">
            <button type="button" className="w-full px-8 py-4 rounded-full text-purple-700 text-lg tracking-wider font-medium border border-purple-700 bg-transparent hover:bg-purple-100 hover:border-purple-800">Become a Member</button>
            <button type="button" className="w-full px-8 py-4 rounded-full text-purple-700 text-lg tracking-wider font-medium border border-purple-700 bg-transparent hover:bg-purple-100 hover:border-purple-800">Get Support</button>
            <button type="button" className="w-full px-8 py-4 rounded-full text-purple-700 text-lg tracking-wider font-medium border border-purple-700 bg-transparent hover:bg-purple-100 hover:border-purple-800">Bargaining Portal</button>
          </div>
        </div>
      </div>
      <Blog />
      <div className="bg-gradient-to-t from-purple-600 to-gray-50 py-20 px-6 font-[sans-serif]">
        <div className="container mx-auto text-center" ref={ref}>
          <h2 className="text-4xl font-bold text-black mb-6">
            Are You One Of The {inView && <CountUp start={0} end={840} duration={2.75} />}+ Student Workers at Occidental College?
          </h2> 
          <h2 className="text-4xl font-bold text-orange-500 mb-6">Join Us Today</h2>
          <p className="text-lg text-black mb-12">Join the movement. Demand more as workers in higher education.</p>
          <a href="javascript:void(0);" className="bg-white text-purple-700 hover:bg-orange-500 shadow-lg hover:text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300 hover:shadow-2xl">
            Get Started
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
