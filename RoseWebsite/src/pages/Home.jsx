import React from "react";
import Banner from "../components/Banner";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
// spell-checker: disable
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <div className="bg-purple-600 h-16 absolute top-[-64px] w-full"></div>
      <Banner />
      <div className="font-sans bg-gray-50 px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="text-left">
            <h2 className="text-gray-800 text-3xl font-bold mb-6">
              Empowering Occidental Students Through Unity
            </h2>
            <p className="mb-4 text-sm text-gray-500">
              The Occidental Student Union is dedicated to advocating for the rights, welfare, and opportunities of student workers on campus. We strive to build a strong community where student voices are heard and respected.
            </p>
            <p className="mb-4 text-sm text-gray-500">
              Our mission is to ensure that every student worker at Occidental College feels valued and supported. By coming together, we can address issues like fair wages, equitable working conditions, and access to professional development opportunities.
            </p>
            <p className="mb-4 text-sm text-gray-500">
              Whether you’re working in the library, dining services, or as a teaching assistant, you deserve to have your contributions recognized and your concerns addressed. Joining the union connects you with a network of like-minded individuals committed to making a positive impact.
            </p>
          </div>
          <div className="flex flex-col gap-12 items-center py-12">
          <Link to="/UnionCard" className="w-full">
              <button
                type="button"
                className="transition-all ease-in-out duration-500 w-full px-8 py-4 font-semibold rounded-full text-purple-700 text-lg tracking-wider font-medium border border-purple-700 bg-transparent hover:bg-purple-100 hover:border-purple-800 hover:text-xl hover:font-extrabold"
              >
                Join Us
              </button>
            </Link>
            <Link to="/contact" className="w-full">
              <button
                type="button"
                className="transition-all ease-in-out duration-500 w-full px-8 py-4 font-semibold rounded-full text-purple-700 text-lg tracking-wider font-medium border border-purple-700 bg-transparent hover:bg-purple-100 hover:border-purple-800 hover:text-xl hover:font-extrabold"
              >
                Get Support
              </button>
            </Link>
            <button
              type="button"
              className="transition-all ease-in-out duration-500 w-full px-8 py-4 font-semibold rounded-full text-purple-700 text-lg tracking-wider font-medium border border-purple-700 bg-transparent hover:bg-purple-100 hover:border-purple-800 hover:text-xl hover:font-extrabold"
            >
              Bargaining Portal
            </button>
          </div>
        </div>
      </div>
      <Blog />
      <div className="bg-gradient-to-t from-purple-600 to-gray-50 py-20 px-6 font-[sans-serif]">
        <div className="container mx-auto text-center" ref={ref}>
          <h2 className="text-4xl font-bold text-black mb-6">
            Are You One Of The{" "}
            {inView && <CountUp start={0} end={840} duration={2.75} />}+ Student
            Workers at Occidental College?
          </h2>
          <h2 className="text-4xl font-bold text-orange-500 mb-6">
            Join Us Today
          </h2>
          <p className="text-lg text-black mb-12">
            Join the movement. Demand more as workers in higher education.
          </p>
          <a
            href="/UnionCard"
            className="transition-all bg-white text-purple-700 hover:bg-orange-500 shadow-lg hover:text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300 hover:shadow-2xl hover:text-xl"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
