import React, { useState } from "react";
import arrowDownBlue from "../assets/logos/arrowDownBlue.svg";
import menuLine from "../assets/logos/menuLine.svg";
import { Link } from "react-router-dom";
import { ourPortfolio, joinUs, resources } from "../utils/navData";
import Prenav from "./navbar/Prenav";
import { Translate } from "react-auto-translate";

const Navbar = ({
  isDropdown,
  setIsDropdown,
  logo,
  setLanguage,
  isPrenavDropdown,
  setIsPrenavDropdown,
  dropdown,
  setDropdown,
}) => {
  const [dropItems, setDropItems] = useState([]);
  const [position, setPosition] = useState({});

  // prenav states
  const [preDropItems, setPreDropItems] = useState([]);
  const [prePosition, setPrePosition] = useState({});
  const [active, setActive] = useState({
    focus: "",
    country: "Nigeria",
    language: "English",
    email: "info@panfricancapitalholdings",
    phone: "+ 234-(1)-271-6899",
  });

  const setActiveItem = ({ text, translation, phone, email }) => {
    if (active.focus === "country") {
      setActive({ ...active, focus: "", country: text, phone, email });
      // console.log("entered");
    } else if (active.focus === "language") {
      setLanguage(translation);
      setActive({ ...active, focus: "", language: text });
    }
    // console.log("no entry");
    setIsPrenavDropdown(false);
  };

  // TOGGLE FOR NAVBAR
  const toggleDropdown = (e, items) => {
    setIsDropdown(!isDropdown);

    const { top, left } = e.target.getBoundingClientRect();
    const topPosition = top;

    setPosition({ top: topPosition, left });
    setDropItems(items);
  };

  return (
    <>
      {/* PRENAV */}
      <Prenav
        active={active}
        setActive={setActive}
        setPreDropItems={setPreDropItems}
        setIsPrenavDropdown={setIsPrenavDropdown}
        isPrenavDropdown={isPrenavDropdown}
        setPrePosition={setPrePosition}
      />

      {/*------- NAVBAR -------*/}
      <nav className="navbar">
        <div className={`${dropdown ? "nav-center open" : "nav-center"}`}>
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <div className={`${dropdown ? "nav-items active" : "nav-items"}`}>
            <div className="item">
              <Link to="/about" onClick={() => setDropdown(false)}>
                <Translate>About</Translate>
              </Link>
            </div>
            <div className="item border">
              <Link to="/portfolio" onClick={() => setDropdown(false)}>
                <Translate>Our Portfolio</Translate>
              </Link>
              <span
                onClick={(e) => toggleDropdown(e, ourPortfolio)}
                className="portfolio-arrow"
              >
                <img
                  className="portfolio-arrow"
                  src={arrowDownBlue}
                  alt="arrowDownBlue"
                />
              </span>
            </div>
            <div className="item border">
              <p>
                <Translate>Resources</Translate>
              </p>
              <span
                onClick={(e) => toggleDropdown(e, resources)}
                className="portfolio-arrow"
              >
                <img
                  src={arrowDownBlue}
                  alt="arrowDownBlue"
                  className="portfolio-arrow"
                />
              </span>
            </div>
            <div className="item border">
              <p>
                <Translate>Join Us</Translate>
              </p>
              <span
                onClick={(e) => toggleDropdown(e, joinUs)}
                className="portfolio-arrow"
              >
                <img
                  src={arrowDownBlue}
                  alt="arrowDownFill"
                  className="portfolio-arrow"
                />
              </span>
            </div>
            <div className="item">
              <Link to="/csr" onClick={() => setDropdown(false)}>
                CSR
              </Link>
            </div>
            <div className="item">
              <Link to="/contact" onClick={() => setDropdown(false)}>
                <Translate>Contact</Translate>
              </Link>
            </div>
          </div>
          <div className="menu" onClick={() => setDropdown(!dropdown)}>
            <img src={menuLine} alt="menuLine" className="menu-image" />
          </div>
        </div>
      </nav>

      {/* PRENAV DROPDOWN */}
      {isPrenavDropdown && (
        <div
          className="pre-dropdown dropdown"
          style={{
            // top: `${prePosition.top}px`,
            top: "72px",
            left: `${prePosition.left}px`,
          }}
        >
          {preDropItems.map((item, index) => {
            const { text } = item;
            if (text === active.country || text === active.language) return;

            return (
              <p
                className="drop-item"
                key={index}
                onClick={() => setActiveItem(item)}
              >
                {text}
              </p>
            );
          })}
        </div>
      )}

      {/* NAVBAR DROPDOWN */}
      {isDropdown && (
        <div
          className="dropdown"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        >
          {dropItems.map((item, index) => {
            if (item.external) {
              return (
                <a
                  href="https://pacresearch.org/"
                  className="drop-item"
                  onClick={() => setIsDropdown(!isDropdown)}
                  target="_blank"
                  key={index}
                  rel="noreferrer"
                >
                  <Translate>{item.text}</Translate>
                </a>
              );
            }
            return (
              <Link
                key={index}
                to={item.path}
                onClick={() => {
                  setIsDropdown(!isDropdown);
                  setDropdown(false);
                }}
                className="drop-item"
              >
                <Translate>{item.text}</Translate>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Navbar;
