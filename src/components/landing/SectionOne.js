import React, { useEffect, useState } from "react";
import phoneLandingImage from "../../assets/images/phoneLandingImage.png";
import worldMain from "../../assets/images/worldMain.png";
import rightArrow from "../../assets/images/rightArrow.svg";
import leftArrow from "../../assets/images/leftArrow.svg";
import { Translate } from "react-auto-translate";

const SectionOne = () => {
  const [translated, setTranslated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslated(!translated);
    }, 3000);

    return () => clearInterval(interval);
  }, [translated]);

  const handleClick = (e) => {};

  return (
    <section className="section-one" onClick={(e) => handleClick(e)}>
      <div className="section-container">
        <div className="left-button" onClick={() => setTranslated(!translated)}>
          <img src={leftArrow} alt="leftArrow" />
        </div>
        <div
          className="right-button"
          onClick={() => setTranslated(!translated)}
        >
          <img src={rightArrow} alt="rightArrow" />
        </div>
        <div className={`${translated ? "main translated" : "main"}`}>
          <div className="main-bg">
            <img src={phoneLandingImage} alt="phone-bg" />
            <div className="bg-label">
              <div className="text-center">
                <h1>PAC Holdings</h1>
                <h3>
                  <Translate>Unlocking Value Across Africa.</Translate>
                </h3>
              </div>
            </div>
          </div>
          <div className="main-bg world">
            <img src={worldMain} alt="phone-bg" />
            <div className="bg-label">
              <div className="text-center">
                <h3>Africa’s investment future is Pan Africa.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
