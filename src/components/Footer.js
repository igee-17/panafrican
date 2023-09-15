import React, { useState } from "react";
import { footer } from "../utils/data";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";
import phoneTransparent from "../assets/images/phoneTransparent.svg";
import mailTransparent from "../assets/images/mailTransparent.svg";
import footerBg from "../assets/images/footerBg.png";
import { Link } from "react-router-dom";
import { Translate } from "react-auto-translate";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import brochure from '../assets/brochure.pdf'

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {

    if (!email) return
    try {
      // Add your code here to handle the subscription process
      // For example, you can add the email to a database or other service
      const postCollectionRef = collection(db, "subscribers");

      // Upload email and current date to Firebase Storage
      const currentDate = new Date().toISOString();
      // await emailRef.putString(`Email: ${email}\nDate: ${currentDate}`);
      // const data = {}
      await addDoc(postCollectionRef, { email, currentDate });
      setEmail('')

      alert("Subscription successful!");
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("Subscription failed. Please try again.");
    }
  };

  return (
    <footer style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="footer-center">
        <div className="item small">
          <div className="bottom">
            <p>
              <Translate>Home</Translate>
            </p>
            <p>
              <Translate>About</Translate>
            </p>
            <p>
              <Translate>Resources</Translate>
            </p>
            <p>
              <Translate>Portfolio</Translate>
            </p>
          </div>
        </div>
        {footer.map((item, index) => {
          const { heading, items } = item;
          return (
            <div key={index} className="item large">
              <h2>
                <Translate>{heading}</Translate>
              </h2>
              <div className="bottom">
                {items.map((i, index) => {
                  if (i.external) {
                    return (
                      <a
                        href={i.link}
                        target="_blank"
                        rel="noreferrer"
                        key={index}
                      >
                        <Translate>{i.text}</Translate>
                      </a>
                    );
                  }
                  if (i.brochure) {
                    return <a
                      href={brochure}
                      target="_blank"
                      rel="noreferrer"
                      key={index}
                    // download
                    >
                      <Translate>{i.text}</Translate>
                    </a>
                  }
                  return (
                    <Link to={i.link} key={index}>
                      <Translate>{i.text}</Translate>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="item ">
          <h2>
            <Translate>connect with us</Translate>
          </h2>
          <div className="bottom">
            <p>
              <Translate>subscribe to our newsletter</Translate>
            </p>
            <div className="input">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleSubscribe}>Subscribe</button>
            </div>
            <p>
              <span>
                <img src={phoneTransparent} alt="phoneTransparent" />
              </span>{" "}
              + 234-(1)-271-6899
            </p>
            <p className="email">
              <span>
                <img src={mailTransparent} alt="mailTransparent" />
              </span>{" "}
              info@panafricancapitalholdings.com
            </p>
            <h3>
              <Translate>follow us</Translate>
            </h3>
            <div className="icons">
              <a
                href="https://www.facebook.com/PACHoldingsLtd"
                target="_blank"
                className="icon"
              >
                <img src={facebook} alt="facebook" />
              </a>
              <a
                href="https://instagram.com/pacholdings?igshid=YmMyMTA2M2Y="
                target="_blank"
                className="icon"
              >
                <img src={instagram} alt="instagram" />
              </a>
              <a
                href="https://twitter.com/PACHoldingsLtd?t=A_VcFWUX98Wng_OPzYJLHg&s=09"
                target="_blank"
                className="icon"
              >
                <img src={twitter} alt="twitter" />
              </a>
              <a
                href="https://www.linkedin.com/company/panafrican-capital-holdings-limited/"
                target="_blank"
                className="icon"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
