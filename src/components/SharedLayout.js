import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const SharedLayout = ({ logo, setLanguage, children }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isPrenavDropdown, setIsPrenavDropdown] = useState(false);

  // small screen dropdown
  const [dropdown, setDropdown] = useState(false);

  const handleClick = (e) => {
    // console.log(e.target.classList);
    if (!e.target.classList.contains("portfolio-arrow")) {
      setIsDropdown(false);
    }
    if (
      !e.target.classList.contains("predropdown") &&
      !e.target.classList.contains("pretext") &&
      !e.target.classList.contains("preimage")
    ) {
      setIsPrenavDropdown(false);
    }

    if (
      !e.target.classList.contains("nav-items") &&
      !e.target.classList.contains("menu") &&
      !e.target.classList.contains("menu-image") &&
      !e.target.classList.contains("portfolio-arrow")
    ) {
      setDropdown(false);
    }
  };
  return (
    <div onClick={(e) => handleClick(e)}>
      <Navbar
        isDropdown={isDropdown}
        setIsDropdown={setIsDropdown}
        logo={logo}
        setLanguage={setLanguage}
        isPrenavDropdown={isPrenavDropdown}
        setIsPrenavDropdown={setIsPrenavDropdown}
        dropdown={dropdown}
        setDropdown={setDropdown}
      />
      {children}
      <Footer />
    </div>
  );
};

export default SharedLayout;
