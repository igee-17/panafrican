import React from "react";
import goalsBg from "../../assets/images/goalsBg.png";
import binoculars from "../../assets/logos/binoculars.svg";
import airplane from "../../assets/logos/airplane.svg";
import handshake from "../../assets/logos/handshake.svg";
import { Translate } from "react-auto-translate";
import { coreValues } from "../../utils/teamData";

const SectionThree = () => {
  return (
    <section
      className="about-section-three"
      style={{ backgroundImage: `url(${goalsBg})` }}
    >
      {/* <div className="bg-image">
        <img src={goalsBg} alt="goalsBg" />
      </div> */}
      <div className="goals-center">
        <div className="goals">
          <div className="goal-container">
            <div className="goal">
              <img src={binoculars} alt="binoculars" />
              <p className="main-text">
                <Translate>our vision</Translate>
              </p>
              <div className="text">
                <p>
                  <Translate>
                    “To deliver exceptional services in our chosen markets and
                    create value for all our stakeholders”
                  </Translate>
                </p>
              </div>
            </div>
          </div>
          <div className="goal-container">
            <div className="goal">
              <img src={airplane} alt="airplane" />
              <p className="main-text">
                <Translate>our mission</Translate>
              </p>
              <div className="text">
                <p>
                  <Translate>
                    “To run successful & socially responsible business
                    institutions, providing sustainable returns to stake
                    holders”
                  </Translate>
                </p>
              </div>
            </div>
          </div>
          <div className="goal-container">
            <div className="goal">
              <img src={handshake} alt="handshake" />
              <p className="main-text">
                <Translate>our core values</Translate>
              </p>
              <div className="spirit text">
                {coreValues.map((item, index) => {
                  const { name, value } = item;
                  return (
                    <p key={index}>
                      <span>
                        <Translate>{value}</Translate>
                      </span>
                      <Translate> {name}</Translate>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
