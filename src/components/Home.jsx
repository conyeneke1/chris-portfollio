import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen md:px-8 md:pt-8 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-16 flex flex-col justify-center h-full text-white">
        <p className="text-yellow-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl  font-bold text-[#ccd6f6]">
          Christopher Onyeneke
        </h1>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#8892b0]">
          I'm a Frontend Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a self-taught frontend developer specialized in building the
          client side of a website.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 flex items-center hover:bg-yellow-600 hover:border-yellow-600 duration-200">
            <Link
              className="flex items-center"
              to="work"
              smooth={true}
              offset={50}
              duration={500}
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-4" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
