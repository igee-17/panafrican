import React, { useEffect } from "react";
import PortfolioLeft from "../components/portfolio/PortfolioLeft";
import PortfolioRight from "../components/portfolio/PortfolioRight";
import { portfolioData } from "../utils/portfolioData";

const Portfolio = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="portfolio margin">
      {portfolioData.map((data, index) => {
        if (index % 2 !== 0 || index === 1) {
          return <PortfolioRight {...data} index={index} />;
        }
        return <PortfolioLeft {...data} index={index} />;
      })}
    </div>
  );
};

export default Portfolio;
