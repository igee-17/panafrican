import React from "react";
import { Translate } from "react-auto-translate";
import aboutBg from "../../assets/images/aboutBg.png";

const SectionOne = ({ color, text, img, textColor }) => {
  return (
    <section className="about-section-one">
      <div className="section-container">
        <div className={`"main"}`}>
          <div className="main-bg">
            <img src={img} alt="phone-bg" />
            <div className="bg-label" style={{ backgroundColor: `${color}` }}>
              <div className="text-center">
                <h1 style={{ color: `${textColor}` }}>
                  <Translate>{text}</Translate>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
