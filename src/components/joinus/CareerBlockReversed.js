import React from "react";
import { Translate } from "react-auto-translate";
import downloadGrey from "../../assets/logos/downloadGrey.svg";

const CareerBlockReversed = ({
  heading,
  text,
  eligibility,
  image,
  mailLink,
}) => {
  let mailtoLink = `mailto:info@panafricancapitalholdings.com?subject=${encodeURIComponent(
    heading
  )}`;

  return (
    <div className="career-item right-item">
      <div className="right">
        <img src={image} alt="image" />
      </div>
      <div className="left">
        <h1>
          <Translate>{heading}</Translate>
        </h1>
        <span className="line"></span>
        <h2>
          <Translate>Overview</Translate>
        </h2>
        {text.map((item, index) => (
          <p key={index}>
            <Translate>{item}</Translate>
          </p>
        ))}
        {eligibility && (
          <>
            <h3>
              <Translate>ELIGIBILITY CRITERIA</Translate>
            </h3>
            <div className="list">
              <ul>
                {eligibility.map((item, index) => (
                  <li key={index}>
                    <Translate>{item}</Translate>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        <a href={mailtoLink} id="mail-link" target='_blank'>
          <Translate>SUBMIT RESUME</Translate>
          <span>
            <img src={downloadGrey} alt="downloadGrey" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default CareerBlockReversed;
