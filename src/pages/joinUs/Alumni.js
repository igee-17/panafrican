import React, { useEffect, useState } from "react";
import SectionOne from "../../components/about/SectionOne";
import alumni from "../../assets/images/pacAlumni.png";
import mapalumni from "../../assets/images/mapalumni.png";
import alumniBg from "../../assets/images/alumniBg.png";
import paclogo from "../../assets/images/paclogo.svg";
import alumniLogo from "../../assets/logos/alumniLogo.png";
import { alumniData } from "../../utils/joinusData";
import { gettingStarted } from "../../utils/helpers/sendMailHelpers";
import { useNavigate } from "react-router-dom";
import LiquidBackground from "../../components/LiquidBackground";
import { Translate } from "react-auto-translate";

const Alumni = ({ setNavlogo }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
    setNavlogo(alumniLogo);

    // const onBeforeUnload = (e) => {
    //   // run your cleanup code here
    //   setNavlogo(paclogo);
    //   console.log("user is leaving page");
    // };
    // window.addEventListener("beforeunload", onBeforeUnload);
    // return () => {
    //   window.removeEventListener("beforeunload", onBeforeUnload);
    // };
  }, []);

  useEffect(() => {
    const unlisten = navigate((location, action) => {
      if (action === "POP") {
        console.log("User is leaving the page");
        // Do something before the user leaves the page
        // setNavlogo(paclogo);
      }
    });

    return () => {
      console.log("Component is unmounting");
      // Do something before the component unmounts
      setNavlogo(paclogo);
    };
  }, [navigate]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { firstName, lastName, email, address, phone, message } = formData;
    // Handle form submission here with the formData object.

    let recipient_email = process.env.RECIPIENT_EMAIL;
    const fields = Object.keys(formData);

    if (!firstName || !lastName || !email || !address || !phone || !message) {
      alert("Fill all fields");

      return;
    }

    gettingStarted({
      firstName,
      lastName,
      email,
      address,
      phone,
      message,
      recipient_email,
      fields,
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
      message: "",
    });
    console.log(formData);
  };

  return (
    <div className="alumni">
      <SectionOne
        color="#062643"
        text="PAC Alumni Network"
        img={alumni}
      />
      <div className="animation animate-left">
        <LiquidBackground />
      </div>
      <div className="section-two">
        <div className="left">
          <h3>
            <Translate>
              Encouraging Relationships that transcend workplace. Be an icon
              today
            </Translate>
          </h3>
          <p>
            <Translate>
              We are a band of ex-PanAfrican Capital Group staff with a shared
              goal of staying connected while cheering each other on the journey
              of life towards making positive impact where it matters most.
            </Translate>
          </p>
          <button>
            <Translate>Discover more</Translate>
          </button>
        </div>
        <div className="right">
          <img src={mapalumni} alt="mapalumni" />
        </div>
      </div>
      <div className="section-three">
        <div className="form-container">
          <h2>
            <Translate>Getting Started</Translate>
          </h2>
          <span></span>
          <p>
            <Translate>
              Kindly fill this form. You can manually send us email on
              info@panafricancapitalholdings.com
            </Translate>
          </p>
          <form>
            <div className="details">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Office or Home Address"
              />
            </div>
            <input
              type="text"
              className="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone No"
            />
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Message"
            ></textarea>
            <button type="button" onClick={handleSubmit}>
              <Translate>Submit</Translate>
            </button>
          </form>
        </div>
      </div>
      <div className="section-four">
        <div className="section-center">
          {alumniData.map((item, index) => {
            const { heading, text, image } = item;

            if (index % 2 !== 0) {
              return (
                <div className="item left-item" key={index}>
                  <div className="right">
                    <img src={image} alt={heading} />
                  </div>
                  <div className="left">
                    <h2>
                      <Translate>{heading}</Translate>
                    </h2>
                    <p>
                      <Translate>{text}</Translate>
                    </p>
                  </div>
                </div>
              );
            }
            return (
              <div className="item" key={index}>
                <div className="left">
                  <h2>
                    <Translate>{heading}</Translate>
                  </h2>
                  <p>
                    <Translate>{text}</Translate>
                  </p>
                </div>
                <div className="right">
                  <img src={image} alt={heading} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="section-five"
        style={{ backgroundImage: `url(${alumniBg})` }}
      >
        <div className="content">
          <h1>
            <Translate>Join Our Community Today</Translate>
          </h1>
          <p>
            <Translate>Become an icon</Translate>
          </p>
          <button>
            <Translate>Get started</Translate>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
