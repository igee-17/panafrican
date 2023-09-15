import React, { useEffect, useState } from "react";
import SectionOne from "../../components/about/SectionOne";
import careerBg from "../../assets/images/careerBg.png";
import { careerData } from "../../utils/career";
import CareerBlock from "../../components/joinus/CareerBlock";
import CareerBlockReversed from "../../components/joinus/CareerBlockReversed";
import LiquidBackground from "../../components/LiquidBackground";
import { Translate } from "react-auto-translate";

const Career = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("message");
  const [mailLink, setMailLink] = useState("");

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    updateMailLink();
  }, [subject, message]);


  const updateMailLink = () => {
    const mailString =
      `?subject=` +
      encodeURIComponent(subject) +
      `&body=` +
      encodeURIComponent(message);
    setMailLink("mailto:info@panafricancapitalholdings.com" + mailString);
  };

  return (
    <section className="career">
      <SectionOne color="#38B6FF" text="Careers" img={careerBg} />

      <div className="animation animate-left">
        <LiquidBackground />
      </div>
      <div className="career-section-two">
        <div className="content">
          {careerData.map((item, index) => {
            if (index % 2 !== 0)
              return (
                <CareerBlockReversed
                  key={index}
                  {...item}
                  mailLink={mailLink}
                />
              );
            return (
              <CareerBlock
                key={index}
                {...item}
                mailLink={mailLink}
                setSubject={setSubject}
              />
            );
          })}
          <div className="join">
            <h1>
              <Translate>Join Us</Translate>
            </h1>
            <p>
              <Translate>
                It’s never been easier to find your perfect role that meets your
                career ambitions. Head over to our career page to explore an
                opportunity at PAC Holdings.
              </Translate>
            </p>
            <button>
              <Translate>View All Jobs</Translate>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
