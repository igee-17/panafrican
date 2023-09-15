import React, { useEffect } from "react";
import PortfolioLeft from "../components/portfolio/PortfolioLeft";
import PortfolioRight from "../components/portfolio/PortfolioRight";
import { renewable } from "../utils/data";
import renewableBg from "../assets/images/renewableBg.png";
import SectionOne from "../components/about/SectionOne";
import animation from "../assets/images/portfolioAnimationLeft.svg";
import LiquidBackground from "../components/LiquidBackground";

const Renewable = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <SectionOne color="#3CB64B" text="Renewable Energy" img={renewableBg} />

      <div className="bottom portfolio">
        <div className="animation animate-left">
          {/* <img src={animation} alt="animation" /> */}
          <LiquidBackground />
        </div>
        {renewable.map((item, index) => {
          if (index % 2 !== 0 || index === 1) {
            return <PortfolioRight {...item} key={index} />;
          }
          return <PortfolioLeft {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Renewable;
