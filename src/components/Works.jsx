import React from "react";
import Project from "./Project";
import TwitterClone from "../assets/Works/twitter-clone.png";
import YoutubeClone from "../assets/Works/youtube-clone.png";
import PricingPage from "../assets/Works/pricing-page.png";
import AppleClone from "../assets/Works/AppleClone.png"
import Calculator from "../assets/Works/calculator.png";
import FrontendBootcamp from "../assets/Works/frontend-bootcamp.png";
import ReviewApp from "../assets/Works/review-app.png";
import ChrisBlog from "../assets/Works/chris-blog.png";

const Works = () => {
  return (
    <div
      name="work"
      className="w-full bg-[#0a192f] md:h-screen text-gray-300 pb-40 md:px-14 md:py-80"
    >
      <div className="max-w-[1000px] mx-auto p-4 pt-32 md:pt-80 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 inline border-orange-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid item */}
          <Project
            title="Apple Website Clone"
            demo="https://christechiphonewebsiteclone.netlify.app"
            code="https://github.com/conyeneke1/Apple_website"
            img={AppleClone}
          />
          <Project
            title="YouTube Clone"
            demo="https://chris-youtube-clone.netlify.app"
            code="https://github.com/conyeneke1/youtube-clone"
            img={YoutubeClone}
          />
          <Project
            title="Pricing Page"
            demo="https://chrispricingpage.netlify.app"
            code="https://github.com/conyeneke1/pricingPage"
            img={PricingPage}
          />
          <Project
            title="Twitter Clone"
            demo="https://mytwirrer.netlify.app"
            code="https://github.com/conyeneke1/twitter-clone"
            img={TwitterClone}
          />
          <Project
            title="Frontend Bootcamp"
            demo="https://fontendbootcamp.netlify.app"
            code="https://github.com/conyeneke1/frontend-bootcamp"
            img={FrontendBootcamp}
          />
          <Project
            title="Review App"
            demo="https://myreviewapp.netlify.app"
            code="https://github.com/conyeneke1/review-app"
            img={ReviewApp}
          />
          <Project
            title="Calculator"
            demo="https://calculator-chris.netlify.app"
            code="https://github.com/conyeneke1/calculator"
            img={Calculator}
          />
          <Project
            title="Blog"
            demo="soundz-blog.netlify.app"
            code="https://github.com/conyeneke1/chris-blog"
            img={ChrisBlog}
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
