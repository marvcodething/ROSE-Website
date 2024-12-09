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
          <div className="cursor-pointer rounded overflow-hidden group bg-white shadow-md p-6 flex flex-col justify-between h-full hover:shadow-xl transition-all duration-300">
            <div>
              <span className="text-sm block text-gray-400 mb-2">15 NOV 2023</span>
              <h3 className="ease-in-out duration-300 text-xl font-bold text-gray-800 group-hover:text-purple-500 transition-all">
                Occidental Student Union Celebrates Wage Victory
              </h3>
              <div className="mt-4">
                <p className="text-gray-400 text-sm">
                  ROSE successfully negotiated a 15% wage increase for student workers. Learn how this sets a new standard for on-campus employment.
                </p>
              </div>
            </div>
            <hr className="my-5 border-gray-300" />
          </div>
          {/* Blog Post 2 */}
          <div className="cursor-pointer rounded overflow-hidden group bg-white shadow-md p-6 flex flex-col justify-between h-full hover:shadow-xl transition-all duration-300">
            <div>
              <span className="text-sm block text-gray-400 mb-2">3 DEC 2023</span>
              <h3 className="ease-in-out duration-300 text-xl font-bold text-gray-800 group-hover:text-purple-500 transition-all">
                Join Our Mental Health Workshop
              </h3>
              <div className="mt-4">
                <p className="text-gray-400 text-sm">
                  ROSE is hosting a workshop focusing on mental health and the challenges of balancing work and academics. Don’t miss this opportunity to prioritize your well-being.
                </p>
              </div>
            </div>
            <hr className="my-5 border-gray-300" />
          </div>
          {/* Blog Post 3 */}
          <div className="cursor-pointer rounded overflow-hidden group bg-white shadow-md p-6 flex flex-col justify-between h-full hover:shadow-xl transition-all duration-300">
            <div>
              <span className="text-sm block text-gray-400 mb-2">10 JAN 2024</span>
              <h3 className="ease-in-out duration-300 text-xl font-bold text-gray-800 group-hover:text-purple-500 transition-all">
                ROSE Resource Center Opens
              </h3>
              <div className="mt-4">
                <p className="text-gray-400 text-sm">
                  The new Resource Center is here to support student workers with tools, advice, and guidance for navigating workplace challenges.
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
