import React, { useEffect } from "react";
import SectionOne from "../components/about/SectionOne";
import PortfolioLeft from "../components/portfolio/PortfolioLeft";
import PortfolioRight from "../components/portfolio/PortfolioRight";
import { healthcare } from "../utils/data";
import healthcareBg from "../assets/images/healthcareBg.png";
import animation from "../assets/images/portfolioAnimationLeft.svg";
import LiquidBackground from "../components/LiquidBackground";

const Healthcare = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <SectionOne color="#F00" text="Healthcare" img={healthcareBg} />

      <div className="bottom portfolio">
        <div className="animation ">
          {/* <img src={animation} alt="animation" /> */}
          <LiquidBackground />
        </div>
        {healthcare.map((item, index) => {
          if (index % 2 !== 0 || index === 1) {
            return <PortfolioRight {...item} key={index} />;
          }
          return <PortfolioLeft {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Healthcare;
