import React from 'react';
// spellchecker: disable
const Blog = () => {
  return (
    <div className="bg-gray-50 sm:px-6 px-4 py-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-left">
          <h2 className="text-3xl font-extrabold text-gray-800 inline-block">
            What's Happening With ROSE?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 max-md:max-w-lg mx-auto">
          {/* Blog Post 1 */}
          <div className="cursor-pointer rounded overflow-hidden group bg-white shadow-xl p-6 flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
            <div>
              <span className="text-sm block text-gray-400 mb-2">22 JAN 2025</span>
              <h3 className="ease-in-out duration-300 text-xl font-bold text-gray-800 group-hover:text-purple-500 transition-all">
                Bargaining Report 
              </h3>
              <div className="mt-4">
                <p className="text-gray-400 text-sm">
                Latest bargaining update: ROSE advocated for tuition freezes, sanctuary campus status, and protest protections. Administration countered with reduced sick pay, mandatory direct deposit, strike restrictions, and limited union stewards.
                </p>
              </div>
            </div>
            <hr className="my-5 border-gray-300" />
          </div>
          {/* Blog Post 2 */}
          <div className="cursor-pointer rounded overflow-hidden group bg-white shadow-xl p-6 flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
            <div>
              <span className="text-sm block text-gray-400 mb-2">12 JAN 2025</span>
              <h3 className="ease-in-out duration-300 text-xl font-bold text-gray-800 group-hover:text-purple-500 transition-all">
              Wildfire Mutual Aid Updates
              </h3>
              <div className="mt-4">
                <p className="text-gray-400 text-sm">
                Thank you from the bottom of our hearts for your contributions to the mutual aid fund. Thanks to you, we were able to raise $9,291 over the last 4 days. These funds have gone directly to Oxy students, alumni, staff and community members who have been affected by the Eaton Fire, or have been used to purchase hard-to-find supplies.
                </p>
              </div>
            </div>
            <hr className="my-5 border-gray-300" />
          </div>
          {/* Blog Post 3 */}
          <div className="cursor-pointer rounded overflow-hidden group bg-white shadow-xl p-6 flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
            <div>
              <span className="text-sm block text-gray-400 mb-2">9 JAN 2025</span>
              <h3 className="ease-in-out duration-300 text-xl font-bold text-gray-800 group-hover:text-purple-500 transition-all">
                Emergency Mutual Aid for Wildfires
              </h3>
              <div className="mt-4">
                <p className="text-gray-400 text-sm">
                Need wildfire emergency support? We're distributing emergency funds, KN95 masks, supplies, power banks, gas, and more to affected families. Fill out our request form for assistance.
                </p>
              </div>
            </div>
            <hr className="my-5 border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
