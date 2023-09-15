import React from "react";

const Paysharp = ({ text, heading, items }) => {
  return (
    <div className="paysharp">
      <div className="content">
        <h3>{text}</h3>
        <h2>{heading}</h2>

        <div className="paysharp-items">
          {items?.map((item, index) => {
            return (
              <div className="paysharp-item" key={index}>
                <img src={item.image} alt={item.text} />
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Paysharp;
