import React, { useEffect } from "react";
import SectionOne from "../components/landing/SectionOne";
import SectionThree from "../components/landing/SectionThree";
import SectionTwo from "../components/landing/SectionTwo";
import SectionFour from "../components/landing/SectionFour";
import Footer from "../components/Footer";

const Landing = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main className="landing">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </main>
  );
};

export default Landing;
