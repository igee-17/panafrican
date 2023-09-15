import React, { useEffect } from "react";
import SectionOne from "../components/about/SectionOne";
import PortfolioLeft from "../components/portfolio/PortfolioLeft";
import PortfolioRight from "../components/portfolio/PortfolioRight";
import agroBg from "../assets/images/agroBg.png";
import { agroAllied } from "../utils/data";
import animation from "../assets/images/portfolioAnimationLeft.svg";
import LiquidBackground from "../components/LiquidBackground";

const AgroAllied = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <SectionOne color="#9ACB34" text="Agro-allied" img={agroBg} />

      <div className="bottom portfolio">
        <div className="animation animate-left">
          {/* <img src={animation} alt="animation" /> */}
          <LiquidBackground />
        </div>
        {agroAllied.map((item, index) => {
          if (index % 2 !== 0 || index === 1) {
            return <PortfolioRight {...item} index={index} />;
          }
          return <PortfolioLeft {...item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default AgroAllied;
