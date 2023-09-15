import React from "react";
import { Translate } from "react-auto-translate";
import { Link } from "react-router-dom";

const PortfolioRight = ({
  img,
  heading,
  text,
  index,
  textColor,
  subHeading,
  bgColor,
  link,
  page,
  headingColor,
}) => {
  // console.log(bgColor);
  return (
    <div className="item right-item">
      <div
        className="text"
        key={index}
        style={
          bgColor
            ? { background: `${bgColor}`, color: "white", padding: "20px" }
            : {}
        }
      >
        <h1
          style={
            bgColor
              ? { background: `${bgColor}`, color: "white" }
              : { color: `${headingColor || textColor}` }
          }
        >
          {/* <Translate>{heading}</Translate> */}
          {heading}
        </h1>
        {subHeading && (
          <h2>
            <Translate>{subHeading}</Translate>
          </h2>
        )}
        <div className="description">
          {text.map((item, index) => (
            <p
              style={
                bgColor ? { background: `${bgColor}`, color: "white" } : {}
              }
              key={index}
            >
              <Translate>{item}</Translate>
            </p>
          ))}
        </div>
        {page ? (
          <Link to={link}>
            <Translate>Read more</Translate>
          </Link>
        ) : (
          <a
            href={link}
            style={bgColor ? { background: `${bgColor}`, color: "white" } : {}}
            target="_blank"
          >
            <Translate> Read more</Translate>
          </a>
        )}
      </div>
      <div className="image">
        <img src={img} alt={img} />
      </div>
    </div>
  );
};

export default PortfolioRight;
