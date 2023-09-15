import React, { useState } from "react";
import SectionOne from "../components/about/SectionOne";
import contactBg from "../assets/images/contactBg.png";
import contactMapOne from "../assets/images/contactMapOne.png";
import contactMapTwo from "../assets/images/contactMapTwo.png";
import Block from "../components/contact/Block";
import {
  contactDetailsOne,
  contactDetailsThree,
  contactDetailsTwo,
} from "../utils/contactData";
import { contact } from "../utils/helpers/sendMailHelpers";
import LiquidBackground from "../components/LiquidBackground";
import { Translate } from "react-auto-translate";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let recipient_email = process.env.RECIPIENT_EMAIL;

    const { fullName, email, subject, message } = formData;
    const fields = Object.keys(formData);

    // Handle form submission here with the formData object.
    console.log(formData);
    contact({ fullName, email, subject, message, recipient_email, fields });

    setFormData({ fullName: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact">
      <SectionOne color="#38B6FF" text="Contact Us" img={contactBg} />
      <div className="animation animate-left">
        <LiquidBackground />
      </div>
      <div className="contact-section-two map-item">
        <div className="heading">
          <h1>
            <Translate>Connect with PAC</Translate>
          </h1>
          <span></span>
          <p>
            <Translate>
              Connect with the right client relationship and specialist teams to
              move you forward
            </Translate>
          </p>
        </div>

        <div className="bottom">
          <div className="left">
            <div className="title item">
              <h2>PAC Holdings</h2>
              <div className="text">
                <p>Plot 8A, Elsie Femi Pearse,</p>
                <p>Off Adeola Odeku, P.O. Box 70823,</p>
                <p>Victoria Island</p>
                <p>Lagos, Nigeria.</p>
              </div>
            </div>
            <div className="telephone item">
              <h2>
                <Translate>Telephone</Translate>
              </h2>
              <div className="text">
                <p>+234 (0) 271 6899</p>
                <p>+234 (0) 271 6893</p>
              </div>
            </div>
            <div className="email item">
              <h2>
                <Translate>Email us</Translate>
              </h2>
              <div className="text">
                <a href="info@panafricancapitalholdings.com">
                  info@panafricancapitalholdings.com
                </a>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={contactMapOne} alt="contactMapOne" />
          </div>
        </div>
      </div>
      {/* SECTION THREE */}
      <div className="contact-section-three">
        <h1>
          <Translate>Our Contact Details</Translate>
        </h1>
        <div className="content">
          <div className="left row">
            {contactDetailsOne.map((item, index) => {
              return <Block {...item} key={index} />;
            })}
          </div>
          <span className="line"></span>
          <div className="middle row">
            {contactDetailsTwo.map((item, index) => {
              return <Block {...item} key={index} />;
            })}
          </div>
          <span className="line"></span>
          <div className="right row">
            {contactDetailsThree.map((item, index) => {
              return <Block {...item} key={index} />;
            })}
          </div>
        </div>
      </div>
      {/* SECTION FOUR */}
      <div className="contact-section-four map-item">
        <div className="bottom map-bottom">
          <div className="right">
            <img src={contactMapTwo} alt="contactMapOne" />
          </div>
          <div className="left">
            <div className="title item">
              <h2>PAC Holdings</h2>
              <div className="text">
                <p>PanAfrican Capital (GH) Ltd.8, Blohum Street,</p>
                <p>Dzorwulu, , Along Dzorwulu Road P.M.B CT 252,</p>
                <p>Cantonments, Accra</p>
                <p>Accra, Ghana.</p>
              </div>
            </div>
            <div className="telephone item">
              <h2>
                <Translate>Telephone</Translate>
              </h2>
              <div className="text">
                <p>+ 233 (0) 262 727400</p>
              </div>
            </div>
            <div className="email item">
              <h2>
                <Translate>Email us</Translate>
              </h2>
              <div className="text">
                <a href="info@panafricancapitalholdings.com">
                  info@panafricancapitalholdings.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION FIVE */}
      <div className="section-five">
        <h1>
          <Translate>Send us a message</Translate>
        </h1>
        <span></span>
        <form onSubmit={handleSubmit}>
          <div className="top">
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">
            <Translate>Submit</Translate>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
