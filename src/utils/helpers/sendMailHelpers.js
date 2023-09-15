import axios from "axios";

export const contact = ({
  fullName,
  email,
  subject,
  message,
  fields,
  recipient_email,
}) => {
  if (fullName && email && subject && message) {
    axios
      .post(
        `${process.env.REACT_APP_SEND_EMAIL_BASE_URL}/pacwebsite/send-message`,
        // " http://localhost:8080/pacwebsite/send-message",
        {
          fullName,
          email,
          subject,
          message,
          fields,
          recipient_email,
        }
      )
      .then(() => alert("Message Sent successfully"))
      .catch((err) => {
        console.log(err);

        alert("Ooops...failed");
      });
  } else return alert("Fill all fields");
};

export const gettingStarted = ({
  firstName,
  lastName,
  email,
  address,
  phone,
  message,
  fields,
  recipient_email,
}) => {
  if (firstName && lastName && email && address && phone && message) {
    axios
      .post(
        `${process.env.REACT_APP_SEND_EMAIL_BASE_URL}/pacwebsite/getting-started`,
        // " http://localhost:8080/pacwebsite/getting-started",
        {
          firstName,
          lastName,
          email,
          address,
          phone,
          message,
          fields,
          recipient_email,
        }
      )
      .then(() => alert("Message Sent successfully"))
      .catch((err) => {
        console.log(err);

        alert("Ooops...failed");
      });
  } else return alert("Fill all fields");
};

export const vendorForm = ({
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
  fields,
  recipient_email,
}) => {
  if (
    company &&
    streetAddress &&
    aptSuiteBuilding &&
    city &&
    state &&
    postalCode &&
    country &&
    registration &&
    dateOfIncorporation &&
    paidUpShare &&
    authorizedShare &&
    tin &&
    bank &&
    account &&
    accountType &&
    phone &&
    mobile &&
    email &&
    yearsInBusiness &&
    natureOfBusiness &&
    registeredWithOtherOrg &&
    keyOrganisations &&
    workDetails &&
    organisation &&
    referenceStreet &&
    referenceApartment &&
    referenceCity &&
    referenceState &&
    referencePostal &&
    referenceCountry &&
    contactPerson &&
    contactPosition &&
    contactPhone &&
    referenceBusinessYears
  ) {
    axios
      .post(
        `${process.env.REACT_APP_SEND_EMAIL_BASE_URL}/pacwebsite/vendor-info`,
        // " http://localhost:8080/pacwebsite/vendor-info",
        {
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
          fields,
          recipient_email,
        }
      )
      .then(() => alert("Message Sent successfully"))
      .catch((err) => {
        console.log(err);

        alert("Ooops...failed");
      });
  } else return alert("Fill all fields");
};
