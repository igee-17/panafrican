import React from "react";
import { Translate } from "react-auto-translate";

const SectionTwo = () => {
  return (
    <section className="about-section-two">
      <div className="text-center">
        <p>
          <Translate>
            PanAfrican Capital Holdings Limited is a Proprietary Investment
            Company with special focus on Key Sectors across Africa including
            Financial Services, Hospitality & Entertainment, Real Estate &
            Infrastructure, Agro-Allied & FMCG, Healthcare and Technology &
            Payment Systems.
          </Translate>{" "}
          <br />
          <br />
          <Translate>
            As a Proprietary Investment Company, our specialist subsidiary
            companies across our chosen sectors are geared towards offering
            strategic investment solutions and unlocking value across emerging
            and frontier markets.
          </Translate>{" "}
          <br />
          <br />
          <Translate>
            The company’s corporate Head Office is in Lagos, with presence in
            Accra, Nairobi and Mauritius. With Over the years, we have created
            strong strategic alliances with multilateral financial institutions
            such as African Export-Import bank, Africa Development Bank, Africa
            Finance Corporation, Development Bank of South Africa, Bank of
            Industry, Nigerian Export-Import bank and other banks across the
            continent.
          </Translate>
        </p>
      </div>
    </section>
  );
};

export default SectionTwo;
