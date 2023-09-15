import React, { useState } from "react";
import { portfolio } from "../../utils/data";
import { Translate } from "react-auto-translate";

const SectionThree = () => {
  const [active, setActive] = useState(Array(portfolio.length).fill(false));

  return (
    <section className="section-three">
      <div className="heading">
        <h1>
          <Translate>our portfolio</Translate>
        </h1>
      </div>
      <div className="bottom">
        <div className="items">
          {portfolio.map((item, index) => {
            const { img, text, color, whiteImg } = item;

            return (
              <div
                className="item"
                onMouseOver={() => {
                  const newArray = Array(portfolio.length).fill(false);
                  const newActive = [...newArray];
                  newActive[index] = true;
                  setActive(newActive);
                }}
                onMouseLeave={() => {
                  setActive(Array(portfolio.length).fill(false));
                }}
                style={
                  active[index]
                    ? { background: `${color}`, color: "white" }
                    : {}
                }
                key={index}
              >
                <span>
                  <img src={active[index] ? whiteImg : img} alt={text} />
                </span>
                <p>
                  <Translate>{text}</Translate>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
