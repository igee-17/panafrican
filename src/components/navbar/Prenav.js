import React, { useState } from "react";
import mail from "../../assets/logos/mail.svg";
import phone from "../../assets/logos/phone.svg";
import calender from "../../assets/logos/calender.svg";
import clock from "../../assets/logos/clock.svg";
import { countries, languages } from "../../utils/navData";
import arrowDownFill from "../../assets/logos/arrowDownFill.svg";
import { Translate } from "react-auto-translate";

const Prenav = ({
  active,
  setActive,
  setPreDropItems,
  setIsPrenavDropdown,
  isPrenavDropdown,
  setPrePosition,
}) => {
  const togglePreDropdown = (e, category) => {
    const { type, items } = category;
    const { top, left } = e.target.getBoundingClientRect();
    const topPosition = top;

    setIsPrenavDropdown(!isPrenavDropdown);
    setPrePosition({ top: topPosition, left });
    setPreDropItems(items);

    // console.log(preDropItems);
    setActive({ ...active, focus: `${type}` });
  };

  return (
    <div
      className={`${
        active.country !== "Nigeria" ? "pre-nav pre-nav-selected" : "pre-nav"
      }`}
    >
      <div className="center">
        <div
          className="predropdown item"
          onClick={(e) => togglePreDropdown(e, countries)}
        >
          <p className="pretext">
            <Translate>{active.country}</Translate>
          </p>
          <span>
            <img src={arrowDownFill} alt="arrowDownFill" className="preimage" />
          </span>
        </div>
        <div className="item">
          <img src={calender} alt="arrowDownFill" />
          <p>
            <Translate>Mon - Fri</Translate>
          </p>
        </div>
        <div className="item">
          <span>
            <img src={clock} alt="arrowDownFill" />
          </span>
          <p>
            <Translate>8:00am-5:00pm</Translate>
          </p>
        </div>
        <div className="item">
          <span>
            <img src={phone} alt="arrowDownFill" />
          </span>
          <p>{active.phone}</p>
        </div>
        <div className="item">
          <span>
            <img src={mail} alt="arrowDownFill" />
          </span>
          <p>{active.email}</p>
        </div>
        <div
          className="predropdown item"
          onClick={(e) => togglePreDropdown(e, languages)}
        >
          <p className="pretext">
            <Translate>{active.language}</Translate>
          </p>
          <span>
            {" "}
            <img src={arrowDownFill} alt="arrowDownFill" className="preimage" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Prenav;
