import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../assets/images/errorImage.jpg";

const Error = () => {
  return (
    <div className="error">
      <div className="center">
        <h1>Page Not Found</h1>
        <Link to="/">BACK HOME</Link>
        <img src={errorImage} alt="errorImage" />
      </div>
    </div>
  );
};

export default Error;
