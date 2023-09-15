import React, { useEffect } from "react";
import SectionOne from "../components/about/SectionOne";
import PortfolioLeft from "../components/portfolio/PortfolioLeft";
import PortfolioRight from "../components/portfolio/PortfolioRight";
import technologyBg from "../assets/images/technologyBg.png";
import { technology } from "../utils/data";
import animation from "../assets/images/portfolioAnimationLeft.svg";
import Paysharp from "../components/portfolio/Paysharp";
import LiquidBackground from "../components/LiquidBackground";

const Technology = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <SectionOne
        color="#FA6900"
        text="Technology and Media "
        img={technologyBg}
      />

      <div className="bottom portfolio">
        <div className="animation animate-left">
          {/* <img src={animation} alt="animation" /> */}
          <LiquidBackground />
        </div>
        {technology.map((item, index) => {
          if (item.heading === "Paysharp Services") {
            return <Paysharp {...item} key={index} />;
          }
          if (index % 2 !== 0 || index === 1) {
            return <PortfolioRight {...item} key={index} />;
          }
          return <PortfolioLeft {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Technology;
