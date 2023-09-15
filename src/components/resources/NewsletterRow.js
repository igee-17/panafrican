import React from "react";
import download from "../../assets/logos/download.svg";

const NewsletterRow = ({ description, volume, date }) => {
  return (
    <tr>
      <td>{description}</td>
      <td className="number">{volume}</td>
      <td>{date}</td>
      <td>
        <button>
          <img src={download} alt="download" />
        </button>
      </td>
    </tr>
  );
};

export default NewsletterRow;
