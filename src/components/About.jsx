import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300 md:px-8"
    >
      <div className="flex flex-col justify-center items-center w-full h-full px-4">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Christopher, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              As a frontend developer, I am passionate about creating visually
              stunning and user-friendly web applications. With a strong
              foundation in web development technologies and a keen eye for
              design, I am dedicated to delivering seamless and engaging digital
              experiences. My journey in web development has equipped me with
              the skills to turn ideas into interactive, responsive, and
              aesthetically pleasing websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
