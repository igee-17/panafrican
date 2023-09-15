import React, { useEffect, useState } from "react";
import vendorbg from "../../assets/images/vendorbg.png";
import SectionOne from "../../components/about/SectionOne";
import locationGrey from "../../assets/logos/locationGrey.svg";
import house from "../../assets/logos/house.svg";
import date from "../../assets/logos/date.svg";
import suitcase from "../../assets/logos/suitcase.svg";
import pen from "../../assets/logos/pen.svg";
import microscope from "../../assets/logos/microscope.svg";
import nuban from "../../assets/logos/nuban.svg";
import contact from "../../assets/logos/contact.svg";
import position from "../../assets/logos/position.svg";
import business from "../../assets/logos/business.svg";
import cloud from "../../assets/logos/cloud.svg";
import cancel from "../../assets/logos/cancel.svg";
import { vendorForm } from "../../utils/helpers/sendMailHelpers";
import { Translate } from "react-auto-translate";

const Vendor = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    company: "",
    streetAddress: "",
    aptSuiteBuilding: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    registration: "",
    dateOfIncorporation: "",
    paidUpShare: "",
    authorizedShare: "",
    tin: "",
    bank: "",
    account: "",
    accountType: "",

    phone: "",
    mobile: "",
    email: "",
    yearsInBusiness: "",
    natureOfBusiness: "",
    registeredWithOtherOrg: "",
    keyOrganisations: "",
    workDetails: "",

    organisation: "",
    referenceStreet: "",
    referenceApartment: "",
    referenceCity: "",
    referenceState: "",
    referencePostal: "",
    referenceCountry: "",
    contactPerson: "",
    contactPosition: "",
    contactPhone: "",
    referenceBusinessYears: "",
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

    const {
      company,
      streetAddress,
      aptSuiteBuilding,
      city,
      state,
      postalCode,
      country,
      registration,
      dateOfIncorporation,
      paidUpShare,
      authorizedShare,
      tin,
      bank,
      account,
      accountType,
      phone,
      mobile,
      email,
      yearsInBusiness,
      natureOfBusiness,
      registeredWithOtherOrg,
      keyOrganisations,
      workDetails,
      organisation,
      referenceStreet,
      referenceApartment,
      referenceCity,
      referenceState,
      referencePostal,
      referenceCountry,
      contactPerson,
      contactPosition,
      contactPhone,
      referenceBusinessYears,
    } = formData;
    // Handle form submission here with the formData object.

    let recipient_email = process.env.RECIPIENT_EMAIL;
    const fields = Object.keys(formData);

    vendorForm({
      company,
      streetAddress,
      aptSuiteBuilding,
      city,
      state,
      postalCode,
      country,
      registration,
      dateOfIncorporation,
      paidUpShare,
      authorizedShare,
      tin,
      bank,
      account,
      accountType,
      phone,
      mobile,
      email,
      yearsInBusiness,
      natureOfBusiness,
      registeredWithOtherOrg,
      keyOrganisations,
      workDetails,
      organisation,
      referenceStreet,
      referenceApartment,
      referenceCity,
      referenceState,
      referencePostal,
      referenceCountry,
      contactPerson,
      contactPosition,
      contactPhone,
      referenceBusinessYears,
      recipient_email,
      fields,
    });
    console.log(formData);
  };

  return (
    <div className="vendor">
      <SectionOne
        color="#38B6FF"
        text="Vendor Registration Form"
        img={vendorbg}
      />
      <div className="section-two">
        <div className="center">
          <div className="heading">
            <p>
              <Translate>Vendor Information</Translate>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="name">
              <label htmlFor="company">
                <Translate>Name of Company</Translate>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="address">
              <label>
                <Translate>Permanent Business Address</Translate>
              </label>
              <div className="input">
                <img src={locationGrey} alt="locationGrey" />
                <input
                  type="text"
                  placeholder="Street Address"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <img src={locationGrey} alt="locationGrey" />
                <input
                  type="text"
                  placeholder="Apt. Suite. Bldg. (optional)"
                  name="aptSuiteBuilding"
                  value={formData.aptSuiteBuilding}
                  onChange={handleChange}
                />
              </div>

              <div className="items">
                <div className="input">
                  <img src={locationGrey} alt="locationGrey" />
                  <input
                    type="text"
                    placeholder="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="input">
                  <img src={locationGrey} alt="locationGrey" />
                  <input
                    type="text"
                    placeholder="State / Province / Region"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
                <div className="input">
                  <img src={locationGrey} alt="locationGrey" />
                  <input
                    type="text"
                    placeholder="Postal / Zip Code"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                  />
                </div>
                <select
                  name="country"
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">
                    <Translate>- - Select Country - -</Translate>
                  </option>
                  <option value="nigeria">
                    <Translate>nigeria</Translate>
                  </option>
                  {/* Add other country options as needed */}
                </select>
              </div>
            </div>

            <div className="information">
              <div className="item">
                <label htmlFor="registration">
                  <Translate> Company Registration Number</Translate>
                </label>
                <div className="input">
                  <img src={house} alt="locationGrey" />
                  <input
                    type="text"
                    id="registration"
                    placeholder="CAC registration number"
                    name="registration"
                    value={formData.registration}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="item">
                <label htmlFor="dateOfIncorporation">
                  <Translate> Date of Incorporation</Translate>
                </label>
                <div className="input">
                  <img src={date} alt="locationGrey" />
                  <input
                    type="date"
                    id="dateOfIncorporation"
                    placeholder="Select Date"
                    name="dateOfIncorporation"
                    value={formData.dateOfIncorporation}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="item">
                <label htmlFor="paidUpShare">
                  <Translate>Paid-Up Share Capital</Translate>
                </label>
                <div className="input">
                  <img src={suitcase} alt="locationGrey" />
                  <input
                    type="text"
                    id="paidUpShare"
                    placeholder="CAC registration number"
                    name="paidUpShare"
                    value={formData.paidUpShare}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="item">
                <label htmlFor="authorizedShare">
                  <Translate>Authorized Share Capital:</Translate>
                </label>
                <div className="input">
                  <img src={pen} alt="locationGrey" />
                  <input
                    type="text"
                    id="authorizedShare"
                    placeholder=""
                    name="authorizedShare"
                    value={formData.authorizedShare}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="item">
                <label htmlFor="tin">
                  <Translate>Tax Identification Number</Translate>
                </label>
                <div className="input">
                  <img src={microscope} alt="locationGrey" />
                  <input
                    type="text"
                    id="tin"
                    placeholder="TIN"
                    name="tin"
                    value={formData.tin}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="heading">
              <p>
                <Translate>Account Information</Translate>
              </p>
            </div>

            <div className="information">
              <div className="item">
                <label htmlFor="bank">
                  <Translate>Bank Name</Translate>
                </label>
                <div className="input">
                  <img src={house} alt="house" />
                  <input
                    type="text"
                    id="bank"
                    name="bank"
                    value={formData.bank}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="item">
                <label htmlFor="account">
                  <Translate>Account Number</Translate>
                </label>
                <div className="input">
                  <img src={nuban} alt="house" />
                  <input
                    type="text"
                    id="account"
                    placeholder="NUBAN or standard account number"
                    name="account"
                    value={formData.account}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="account-type">
              <label htmlFor="accountType">
                <Translate>Type of Account</Translate>
              </label>
              <div className="options">
                <div className="option">
                  <input
                    type="radio"
                    value="savings"
                    name="accountType"
                    checked={formData.accountType === "savings"}
                    onChange={handleChange}
                  />{" "}
                  <span>
                    <Translate>Savings</Translate>
                  </span>
                </div>
                <div className="option">
                  <input
                    type="radio"
                    value="current"
                    name="accountType"
                    checked={formData.accountType === "current"}
                    onChange={handleChange}
                  />{" "}
                  <span>
                    <Translate>Current</Translate>
                  </span>
                </div>
                <div className="option">
                  <input
                    type="radio"
                    value="domiciliary"
                    name="accountType"
                    checked={formData.accountType === "domiciliary"}
                    onChange={handleChange}
                  />{" "}
                  <span>
                    <Translate>Domiciliary</Translate>
                  </span>
                </div>
                <div className="option">
                  <input
                    type="radio"
                    value="corporate"
                    name="accountType"
                    checked={formData.accountType === "corporate"}
                    onChange={handleChange}
                  />{" "}
                  <span>
                    <Translate>Corporate</Translate>
                  </span>
                </div>
                <div className="option">
                  <input
                    type="radio"
                    value="other"
                    name="accountType"
                    checked={formData.accountType === "other"}
                    onChange={handleChange}
                  />{" "}
                  <span>
                    <Translate>Other</Translate>
                  </span>
                </div>
              </div>
            </div>

            {/* CONTACT INFORMATION */}
            <div className="heading">
              <p>
                <Translate>Contact Information</Translate>
              </p>
            </div>
            <div className="information">
              <div className="item">
                <label htmlFor="phone">
                  <Translate>Phone Number</Translate>
                </label>
                <div className="input">
                  <img src={house} alt="house" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    placeholder="Official phone number"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="item">
                <label htmlFor="mobile">
                  <Translate>Mobile Phone</Translate>
                </label>
                <div className="input">
                  <img src={date} alt="house" />
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    placeholder="Alternative phone number"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="item">
                <label htmlFor="email">
                  <Translate>Email Address</Translate>
                </label>
                <div className="input">
                  <img src={suitcase} alt="suitcase" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="item">
                <label htmlFor="yearsInBusiness">
                  <Translate>Number of years in business</Translate>
                </label>
                <div className="input">
                  <img src={pen} alt="pen" />
                  <input
                    type="text"
                    id="yearsInBusiness"
                    name="yearsInBusiness"
                    value={formData.yearsInBusiness}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <label htmlFor="natureOfBusiness">
              <Translate>Nature of Business</Translate>
            </label>
            <textarea
              name="natureOfBusiness"
              id="natureOfBusiness"
              className="nature"
              value={formData.natureOfBusiness}
              onChange={handleChange}
            ></textarea>

            <div className="account-type">
              <label htmlFor="registeredWithOtherOrg">
                <Translate>
                  {" "}
                  Are you registered with any other organisation
                </Translate>
              </label>
              <div className="options">
                <div className="option">
                  <input
                    type="radio"
                    value="yes"
                    name="registeredWithOtherOrg"
                    checked={formData.registeredWithOtherOrg === "yes"}
                    onChange={handleChange}
                  />{" "}
                  <span>
                    <Translate>Yes</Translate>
                  </span>
                </div>
                <div className="option">
                  <input
                    type="radio"
                    value="no"
                    name="registeredWithOtherOrg"
                    checked={formData.registeredWithOtherOrg === "no"}
                    onChange={handleChange}
                  />{" "}
                  <span>
                    <Translate>No</Translate>
                  </span>
                </div>
              </div>
            </div>

            <label htmlFor="keyOrganisations">
              <Translate>
                {" "}
                If yes, give names and addresses of key Organisations
              </Translate>
            </label>
            <textarea
              name="keyOrganisations"
              id="keyOrganisations"
              className="text-details"
              placeholder="Other companies you are registered with"
              value={formData.keyOrganisations}
              onChange={handleChange}
            ></textarea>

            <label htmlFor="workDetails">
              <Translate>
                Give brief details of the type and value of work you have done
                in the 24 months
              </Translate>
            </label>
            <textarea
              name="workDetails"
              id="workDetails"
              className="text-details"
              value={formData.workDetails}
              onChange={handleChange}
            ></textarea>

            {/* REFERENCES */}
            <div className="heading">
              <p>
                <Translate>References</Translate>
              </p>
            </div>
            <h3>
              <Translate>
                {" "}
                Please list one (1) reference that is familiar with your work
              </Translate>
            </h3>
            <label htmlFor="organisation">
              <Translate>Name of Organisation</Translate>
            </label>
            <div className="input">
              <img src={locationGrey} alt="locationGrey" />
              <input
                type="text"
                id="organisation"
                name="organisation"
                value={formData.organisation}
                placeholder="Company name"
                onChange={handleChange}
              />
            </div>

            <div className="address">
              <label>
                <Translate>Address</Translate>
              </label>
              <div className="input">
                <img src={locationGrey} alt="locationGrey" />
                <input
                  type="text"
                  placeholder="Street Address"
                  name="referenceStreet"
                  value={formData.referenceStreet}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <img src={locationGrey} alt="locationGrey" />
                <input
                  type="text"
                  placeholder="Apt. Suite. Bldg. (optional)"
                  name="referenceApartment"
                  value={formData.referenceApartment}
                  onChange={handleChange}
                />
              </div>

              <div className="items">
                <div className="input">
                  <img src={locationGrey} alt="locationGrey" />
                  <input
                    type="text"
                    placeholder="City"
                    name="referenceCity"
                    value={formData.referenceCity}
                    onChange={handleChange}
                  />
                </div>
                <div className="input">
                  <img src={locationGrey} alt="locationGrey" />
                  <input
                    type="text"
                    placeholder="State / Province / Region"
                    name="referenceState"
                    value={formData.referenceState}
                    onChange={handleChange}
                  />
                </div>
                <div className="input">
                  <img src={locationGrey} alt="locationGrey" />
                  <input
                    type="text"
                    placeholder="Postal / Zip Code"
                    name="referencePostal"
                    value={formData.referencePostal}
                    onChange={handleChange}
                  />
                </div>
                <select
                  name="referenceCountry"
                  id=""
                  value={formData.referenceCountry}
                  onChange={handleChange}
                >
                  <option value="">
                    <Translate>- - Select Country - -</Translate>
                  </option>
                  <option value="nigeria">
                    <Translate>nigeria</Translate>
                  </option>
                </select>
              </div>
            </div>
            <div className="information">
              <div className="item">
                <label htmlFor="contactPerson">
                  <Translate>Contact Person</Translate>
                </label>
                <div className="input">
                  <img src={contact} alt="locationGrey" />
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="item">
                <label htmlFor="contactPosition">
                  <Translate>Position</Translate>
                </label>
                <div className="input">
                  <img src={position} alt="locationGrey" />
                  <input
                    type="text"
                    id="contactPosition"
                    name="contactPosition"
                    value={formData.contactPosition}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="item">
                <label htmlFor="contactPhone">
                  <Translate>Phone Number</Translate>
                </label>
                <div className="input">
                  <img src={suitcase} alt="locationGrey" />
                  <input
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    placeholder="Contact’s phone number"
                    value={formData.contactPhone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="item">
                <label htmlFor="referenceBusinessYears">
                  <Translate>Years in business</Translate>
                </label>
                <div className="input">
                  <img src={business} alt="locationGrey" />
                  <input
                    type="number"
                    id="referenceBusinessYears"
                    name="referenceBusinessYears"
                    placeholder="How long have you been in business with the above named company"
                    value={formData.referenceBusinessYears}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* UPLOADS */}
            <div className="heading">
              <p>
                <Translate>Uploads</Translate>
              </p>
            </div>
            <h3>
              <Translate>
                Please note that application should be accompanied with the
                following;
              </Translate>
            </h3>
            <p className="upload-text">
              <Translate>
                1. A photocopy of Certificate of Incorporation 2. A photocopy of
                Memorandum and Articles of Association 3. A photocopy of VAT
                registration Certificate 4. Any other relevant document
              </Translate>
            </p>
            <label>
              <Translate>Upload documents mentioned above</Translate>
            </label>
            <div className="upload-input">
              <label htmlFor="documents">
                <input type="file" multiple id="documents" />
                <div className="upload-btn">
                  <img src={cloud} alt="cloud" />
                </div>
                {/* <button type="button" className="upload-btn">
          </button> */}
              </label>
              <button type="button" className="cancel-btn">
                <img src={cancel} alt="cancel" />
              </button>
            </div>
            <label>
              <Translate>Other relevant documents</Translate>
            </label>
            <div className="upload-input">
              <label htmlFor="otherDocuments">
                <input type="file" multiple id="otherDocuments" />
                <div className="upload-btn">
                  <img src={cloud} alt="cloud" />
                </div>
                {/* <button type="button" className="upload-btn">
          </button> */}
              </label>
              <button type="button" className="cancel-btn">
                <img src={cancel} alt="cancel" />
              </button>
            </div>
            <div className="account-type">
              <label htmlFor="accountType">
                <Translate>
                  I hereby certify that the above information submitted is true
                  and correct
                </Translate>
              </label>
              <div className="options">
                <div className="option">
                  <input
                    type="radio"
                    value="trueInformation"
                    name="accountType"
                    id="accountType"
                    checked={formData.accountType === "trueInformation"}
                    onChange={handleChange}
                  />{" "}
                  <span>
                    <Translate>Yes, I confirm</Translate>
                  </span>
                </div>
              </div>
            </div>
            <button type="submit" className="submit-btn">
              <Translate>submit</Translate>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Vendor;
