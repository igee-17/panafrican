import React, { useEffect } from "react";
import SectionOne from "../components/about/SectionOne";
import PortfolioLeft from "../components/portfolio/PortfolioLeft";
import PortfolioRight from "../components/portfolio/PortfolioRight";
import financialBg from "../assets/images/financialBg.png";
import { financialData } from "../utils/data";
import animation from "../assets/images/portfolioAnimationLeft.svg";
import LiquidBackground from "../components/LiquidBackground";
import { Translate } from "react-auto-translate";

const FinancialServices = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="financial">
      <SectionOne color="#38B6FF" text="Financial Services" img={financialBg} />
      <p className="heading-text">
        <Translate>
          At PAC Holdings, Financial Services is our strength and flagship
          space. Through the years, we have penetrated the financial services
          value-chain and have positioned ourselves to deliver value through
          investment banking and advisory, asset management, securities trading,
          registrar services, trusteeship and supply-chain finance. We have only
          one goal – leverage opportunities and unlock wealth.
        </Translate>
      </p>

      <div className="bottom portfolio">
        <div className="animation animate-left">
          {/* <img src={animation} alt="animation" /> */}
          <LiquidBackground />
        </div>
        {financialData.map((item, index) => {
          if (index % 2 !== 0 || index === 1) {
            return <PortfolioRight {...item} index={index} />;
          }
          return <PortfolioLeft {...item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default FinancialServices;
