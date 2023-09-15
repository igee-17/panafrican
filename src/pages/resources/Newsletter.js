import React, { useEffect } from "react";
import vendorbg from "../../assets/images/vendorbg.png";
import SectionOne from "../../components/about/SectionOne";
import sortascending from "../../assets/logos/sortascending.svg";
import { newletter } from "../../utils/resources/newsletter";
import NewsletterRow from "../../components/resources/NewsletterRow";
import Pagination from "../../components/resources/Pagination";

const Newsletter = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="newsletter">
      <SectionOne color="#38B6FF" text="Newsletter" img={vendorbg} />
      <div className="newsletter-section-two">
        <div className="content">
          <table>
            <thead>
              <tr>
                <td>
                  <span>
                    Description{" "}
                    <span className="image">
                      <img src={sortascending} alt="sortascending" />
                    </span>
                  </span>
                </td>
                <td>
                  <span>
                    Volume{" "}
                    <span>
                      <img src={sortascending} alt="sortascending" />
                    </span>
                  </span>
                </td>
                <td>
                  <span>
                    Date{" "}
                    <span>
                      <img src={sortascending} alt="sortascending" />
                    </span>
                  </span>
                </td>
                <td>
                  <span>
                    Download{" "}
                    <span>
                      <img src={sortascending} alt="sortascending" />
                    </span>
                  </span>
                </td>
              </tr>
            </thead>
            <tbody>
              {newletter.map((item, index) => {
                return <NewsletterRow key={index} {...item} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination />
    </section>
  );
};

export default Newsletter;
