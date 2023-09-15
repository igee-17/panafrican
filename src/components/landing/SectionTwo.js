import React from "react";
import { Translate } from "react-auto-translate";
import mobile from "../../assets/images/mobile.png";
import MobileAnimation from "../MobileAnimation";

const SectionTwo = () => {
  return (
    <section className="section-two">
      <div className="section-center">
        {/* <img src={mobile} alt="mobile" /> */}

        <MobileAnimation />
        <div className="text">
          <h2>
            <Translate>Our Investment Philosophy</Translate>
          </h2>
          <p>
            <Translate>
              We believe that progress is informed by the past and inspired by
              the future, this is why we operate an investment philosophy based
              on ideas, partnerships and solutions.
            </Translate>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
