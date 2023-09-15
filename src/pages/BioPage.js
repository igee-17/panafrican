import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { directors } from "../utils/teamData";

const BioPage = () => {
  const [page, setPage] = useState({});
  const { personId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
    const active = directors.find((item) => item.person === personId);
    setPage(active);
  }, []);

  // console.log(page, personId, useParams());

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <section className="bio-page">
      <div className="btn-container">
        <button onClick={handleNavigate}>BACK</button>
      </div>
      <div className="section-center">
        <div className="left">
          <img src={page.image} alt={page.image} />
        </div>

        <article className="right">
          <div className="desc">
            {page?.data?.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

          <h2>{page.name}</h2>
          <h3>{page.position}</h3>
        </article>
      </div>
    </section>
  );
};

export default BioPage;
