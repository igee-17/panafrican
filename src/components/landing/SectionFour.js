import React, { useEffect, useState } from "react";
import worldImage from "../../assets/images/worldImage.svg";
import playCircle from "../../assets/images/playCircle.svg";
import arrowLeft from "../../assets/images/arrowLeft.svg";
import arrowRight from "../../assets/images/arrowRight.svg";
import vector from "../../assets/logos/vector.svg";
import vector1 from "../../assets/logos/vector1.svg";
import vector2 from "../../assets/logos/vector2.svg";
import vectorBlue from "../../assets/logos/vectorBlue.svg";
import LiquidBackground from "../LiquidBackground";
import ButtonAnimation from "../ButtonAnimation";
import { Translate } from "react-auto-translate";
import { itemsData } from "../../utils/landingData";
import { getPosts } from "../../utils/helpers/admin/fetchPosts";
import { Link } from "react-router-dom";
import { limitStringTo70Characters } from "../../utils/resources/arrangeNews";
import CustomLoader from "../resources/CustomLoader";

const SectionFour = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [activeVector, setActiveVector] = useState(vector1);
  const [postLists, setPostLists] = useState([]);
  const [loading, setLoading] = useState(false);


  const posts = JSON.parse(localStorage.getItem("posts"));
  const itemsPerPage = 3;
  // const totalPages = Math.ceil(postLists.length / itemsPerPage);
  const totalPages = Math.ceil(postLists.length - 1);



  useEffect(() => {
    posts && localStorage.clear("posts");
    setLoading(true);

    getPosts(setPostLists, setLoading);
  }, []);


  const handleScroll = (direction) => {
    if (direction === "left" && scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    } else if (direction === "right" && scrollIndex < totalPages - 1) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const startIndex = scrollIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleFoundations = postLists.slice(scrollIndex, scrollIndex + 3);

  return (
    <section
      className="section-four"
    //   style={{ backgroundImage: `url(${curvedbg})` }}
    >
      <span className="bg-image">
        {/* <img src={curvedbg} alt="curvedbg" /> */}
        <LiquidBackground />
      </span>
      <div className="spirit">
        {/* <img src={spirit} alt="spirit" /> */}
        <div
          className="image"
          onMouseOver={() => {
            setActiveVector(vectorBlue);
          }}
          onMouseLeave={() => {
            setActiveVector(vector1);
          }}
        >
          <div className="outer" style={{ backgroundImage: `url(${vector})` }}>
            <div
              className="middle"
              style={{ backgroundImage: `url(${activeVector})` }}
            >
              <div
                className="inner"
                style={{ backgroundImage: `url(${vector2})` }}
              >
                <p className="text">
                  <Translate>OUR SPIRIT</Translate>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="items">
          {itemsData.map((item, index) => {
            const { letter, text } = item;

            return (
              <div className="item" key={index}>
                <h1>
                  <Translate>{letter}</Translate>
                </h1>
                <p>
                  <Translate>{text}</Translate>
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* MIDDLE */}
      <div className="middle">
        <div className="image">
          <img src={playCircle} alt="playCircle" className="play" />
          <img src={worldImage} alt="worldImage" className="world" />
        </div>
        <div className="text">
          <p>
            <Translate>
              Creating Impact through opportunities, strategic alliances and
              partnerships.
            </Translate>
          </p>
          <a>
            <span>
              <Translate>Learn more</Translate>
            </span>
            <div className="liquid">
              <ButtonAnimation />
            </div>
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bottom">
        <h2>
          <Translate>STAY UPDATED</Translate>
        </h2>
        <div className="foundations-container">
          {loading ? <CustomLoader /> :
            <div className="foundations">
              {visibleFoundations.map((item, index) => {
                const { imgUrl, header, id } = item;
                return (
                  <div
                    className="item"
                    key={index}
                    style={{ backgroundImage: `url(${imgUrl})` }}
                  >
                    <div className="text">
                      <span></span>
                      <p>
                        <Translate>{limitStringTo70Characters(header)}...</Translate>
                      </p>
                      <Link to={`/resources/stay-updated/${id}`}>
                        <Translate> Read more</Translate>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          }</div>
        <div className="navigation">
          <span className="arrow" onClick={() => handleScroll("left")}>
            <img src={arrowLeft} alt="arrowLeft" />
          </span>
          <div className="pages">
            {Array.from({ length: totalPages }, (_, index) => (
              <span
                key={index}
                className={`page ${index === scrollIndex ? "active" : ""}`}
                onClick={() => setScrollIndex(index)}
              ></span>
            ))}
          </div>
          <span className="arrow" onClick={() => handleScroll("right")}>
            <img src={arrowRight} alt="arrowRight" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
