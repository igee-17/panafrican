import React, { useEffect } from "react";
import { Translate } from "react-auto-translate";
import downloadGrey from "../../assets/logos/downloadGrey.svg";

const CareerBlock = ({
  heading,
  text,
  eligibility,
  image,
  mailLink,
  setSubject,
}) => {
  // const handleSubmit = async () => {
  //   // setSubject(heading);
  //   console.log(heading, "done");

  //   // await setSubject(heading); // Wait for the state update to complete
  //   const subject = heading;
  //   const mailtoLink = `mailto:info@panafricancapitalholdings.com?subject=${encodeURIComponent(
  //     subject
  //   )}`;
  //   // window.location.href = mailLink;
  //   window.location.href = mailtoLink;
  // };

  let mailtoLink = `mailto:info@panafricancapitalholdings.com?subject=${encodeURIComponent(
    heading
  )}`;

  return (
    <div className="career-item">
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
        {/* <button id="mail-link" onClick={handleSubmit}>
          SUBMIT RESUME{" "}
          <span>
            <img src={downloadGrey} alt="downloadGrey" />
          </span>
        </button> */}
      </div>
      <div className="right">
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

export default CareerBlock;
