import React, { useEffect } from "react";
import SectionOne from "../components/about/SectionOne";
import PortfolioLeft from "../components/portfolio/PortfolioLeft";
import PortfolioRight from "../components/portfolio/PortfolioRight";
import hospitalityBg from "../assets/images/hospitalityBg.png";
import { hospitality } from "../utils/data";
import animation from "../assets/images/portfolioAnimationLeft.svg";
import LiquidBackground from "../components/LiquidBackground";
import { Translate } from "react-auto-translate";

const Hospitality = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="hospitality">
      <SectionOne
        color="#FAB400"
        text="Hospitality & Entertainment"
        img={hospitalityBg}
      />

      <div className="top">
        <p>
          <Translate>
            We do understand that every property is unique, and for that, we
            have design five main Brands in order to fully apply the demands of
            the market, so we look forward to discussing your specific
            opportunity and how we can assist you in revealing the full
            potential of your asset
          </Translate>
        </p>
        {/*<button>Read More</button>*/}
      </div>

      <div className="bottom portfolio">
        <div className="animation">
          {/* <img src={animation} alt="animation" /> */}
          <LiquidBackground />
        </div>
        {hospitality.map((item, index) => {
          if (index % 2 !== 0 || index === 1) {
            return <PortfolioRight {...item} index={index} />;
          }
          return <PortfolioLeft {...item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Hospitality;
