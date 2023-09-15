import React from "react";
import { Translate } from "react-auto-translate";

const Block = ({ title, number }) => {
  return (
    <div className="block">
      <h3>{title}</h3>
      <div className="details">
        <p>
          <Translate>international</Translate>
        </p>
        <div className="send">
          <p>{number} </p>
          <h4>
            <Translate>Send an email</Translate>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Block;
