import React, { useEffect } from "react";
import SectionOne from "../components/about/SectionOne";
import PortfolioLeft from "../components/portfolio/PortfolioLeft";
import PortfolioRight from "../components/portfolio/PortfolioRight";
import { realEstate } from "../utils/data";
import estateBg from "../assets/images/estateBg.png";
import animation from "../assets/images/portfolioAnimationLeft.svg";
import LiquidBackground from "../components/LiquidBackground";

const RealEstate = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="real-estate">
      <SectionOne
        color="#4E2E8F"
        text="Real Estate & Infrastructure"
        img={estateBg}
      />

      <div className="bottom portfolio">
        <div className="animation">
          {/* <img src={animation} alt="animation" /> */}
          <LiquidBackground />
        </div>
        {realEstate.map((item, index) => {
          if (index % 2 !== 0 || index === 1) {
            return <PortfolioRight {...item} key={index} />;
          }
          return <PortfolioLeft {...item} key={index} />;
        })}
      </div>
      {/* </div> */}
    </div>
  );
};

export default RealEstate;
