import React from 'react'
// spellchecker: disable
const Blog = () => {
  return (
    <div class="bg-gray-50 sm:px-6 px-4 py-12 font-sans">
      <div class="max-w-7xl mx-auto">
        <div class="text-left">
          <h2 class="text-3xl font-extrabold text-gray-800 inline-block">What's Happening With ROSE?</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 max-md:max-w-lg mx-auto">
          <div class="cursor-pointer rounded overflow-hidden group">
            <div>
              <span class="text-sm block text-gray-400 mb-2">10 FEB 2023</span>
              <h3 class="text-xl font-bold text-gray-800 group-hover:text-blue-500 transition-all">A Guide to Igniting Your Imagination</h3>
              <div class="mt-4">
                <p class="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
            <hr class="my-5 border-gray-300" />
          </div>
          <div class="cursor-pointer rounded overflow-hidden group">
            <div>
              <span class="text-sm block text-gray-400 mb-2">7 JUN 2023</span>
              <h3 class="text-xl font-bold text-gray-800 group-hover:text-blue-500 transition-all">Hacks to Supercharge Your Day</h3>
              <div class="mt-4">
                <p class="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
            <hr class="my-5 border-gray-300" />
          </div>
          <div class="cursor-pointer rounded overflow-hidden group">
            <div>
              <span class="text-sm block text-gray-400 mb-2">5 OCT 2023</span>
              <h3 class="text-xl font-bold text-gray-800 group-hover:text-blue-500 transition-all">Trends and Predictions</h3>
              <div class="mt-4">
                <p class="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
            <hr class="my-5 border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Blog;