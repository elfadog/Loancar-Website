import { useState } from "react";
//import sendEmail from "../../Email.js";

function ContactForm() {
  const [modal, setModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  // Additional state variables for new fields
  const [driversLicenseNo, setDriversLicenseNo] = useState("");
  const [driversLicensePhoto, setDriversLicensePhoto] = useState("");
  // const [postalAddress, setPostalAddress] = useState("");
  const [accidentDescription, setAccidentDescription] = useState("");
  // const [vehiclesInvolved, setVehiclesInvolved] = useState("");
  const [accidentAddress, setAccidentAddress] = useState("");
  const [fault, setFault] = useState("");
  const [carRego, setCarRego] = useState("");
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState("");
  const [insuranceCompany, setInsuranceCompany] = useState("");
  const [claimNumber, setClaimNumber] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  // Additional handlers for new fields
  const handleDriversLicenseNo = (e) => {
    setDriversLicenseNo(e.target.value);
  };

  const handleDriversLicensePhoto = (e) => {
    setDriversLicensePhoto(e.target.value);
  };

  // const handlePostalAddress = (e) => {
  //   setPostalAddress(e.target.value);
  // };

  const handleAccidentDescription = (e) => {
    setAccidentDescription(e.target.value);
  };

  // const handleVehiclesInvolved = (e) => {
  //   setVehiclesInvolved(e.target.value);
  // };

  const handleAccidentAddress = (e) => {
    setAccidentAddress(e.target.value);
  };

  const handleFault = (e) => {
    setFault(e.target.value);
  };

  const handleCarRego = (e) => {
    setCarRego(e.target.value);
  };

  const handleCarMake = (e) => {
    setCarMake(e.target.value);
  };

  const handleCarModel = (e) => {
    setCarModel(e.target.value);
  };

  const handleCarYear = (e) => {
    setCarYear(e.target.value);
  };

  const handleInsuranceCompany = (e) => {
    setInsuranceCompany(e.target.value);
  };

  const handleClaimNumber = (e) => {
    setClaimNumber(e.target.value);
  };

  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      city === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  // const confirmBooking = (e) => {
  //   e.preventDefault();
  //   alert("Booking confirmed, We will be in touch shortly");
  // };

  // const confirmBooking = (e) => {
  //   e.preventDefault();
  //   // Log all form details
  //   console.log("Modal:", modal);
  //   console.log("First Name:", firstName);
  //   console.log("Last Name:", lastName);
  //   console.log("Email:", email);
  //   console.log("Phone Number:", phone);
  //   console.log("City:", city);
  //   console.log("Driver's License Number:", driversLicenseNo);
  //   console.log("Driver's License Photo:", driversLicensePhoto);
  //   console.log("Postal Address:", postalAddress);
  //   console.log("Accident Description:", accidentDescription);
  //   console.log("Vehicles Involved:", vehiclesInvolved);
  //   console.log("Accident Address:", accidentAddress);
  //   console.log("Fault:", fault);
  //   console.log("Car Rego:", carRego);
  //   console.log("Car Make:", carMake);
  //   console.log("Car Model:", carModel);
  //   console.log("Car Year:", carYear);
  //   console.log("Insurance Company:", insuranceCompany);
  //   console.log("Claim Number:", claimNumber);
  //   console.log("KM In:", kmIn);
  //   console.log("KM Out:", kmOut);

  //   // Send form data to email specified for Form2
  //   const formData = {
  //     firstName,
  //     lastName,
  //     email,
  //     phone,
  //     city,
  //     driversLicenseNo,
  //     driversLicensePhoto,
  //     postalAddress,
  //     accidentDescription,
  //     vehiclesInvolved,
  //     accidentAddress,
  //     fault,
  //     carRego,
  //     carMake,
  //     carModel,
  //     carYear,
  //     insuranceCompany,
  //     claimNumber,
  //     kmIn,
  //     kmOut,
  //   };

  // Send email to specified address for Form2
  //sendEmail(formData);
  // };

  return (
    <section id="accident-section" className="accident-section">
      <div
        onClick={openModal}
        className={`modal-overlay ${modal ? "active-modal" : ""}`}
      ></div>

      <div className="container">
        <div className="accident-content">
          <div className="accident-content__box">
            <h2>Application form</h2>

            <form className="box-form">
              {/* Non-Fault Drivers Details */}
              <div className="section-container">
                <h2>Non-Fault Drivers Details</h2>
                <div className="grid-container">
                  <div className="box-form__contact-type">
                    <label>
                      <i className="fa-solid fa-car"></i> &nbsp;{" "}
                      <b>First Name *</b>
                    </label>
                    <input
                      value={firstName}
                      onChange={handleFirstName}
                      type="text"
                      placeholder="Enter first name"
                    />
                  </div>

                  <div className="box-form__contact-type">
                    <label>
                      <i className="fa-solid fa-location-dot"></i> &nbsp;{" "}
                      <b>Last Name*</b>
                    </label>
                    <input
                      value={lastName}
                      onChange={handleLastName}
                      type="text"
                      placeholder="Enter your Last name"
                    />
                  </div>

                  <div className="box-form__contact-type">
                    <label>
                      <i className="fa-solid fa-phone"></i> &nbsp;{" "}
                      <b>Phone Number *</b>
                    </label>
                    <input
                      value={phone}
                      onChange={handlePhone}
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="box-form__contact-type">
                    <label>Driver's License Number *</label>
                    <input
                      value={driversLicenseNo}
                      onChange={handleDriversLicenseNo}
                      type="text"
                      placeholder="Enter your driver's license number"
                    />
                  </div>

                  <div className="box-form__contact-type">
                    <label>Driver's License Photo *</label>
                    <input
                      className="box-form__contact-type__photo-input"
                      value={driversLicensePhoto}
                      onChange={handleDriversLicensePhoto}
                      type="file"
                      accept="image/*"
                    />
                  </div>

                  <div className="box-form__contact-type">
                    <label>
                      <i className="fa-solid fa-envelope"></i> &nbsp;{" "}
                      <b>Email*</b>
                    </label>
                    <input
                      value={email}
                      onChange={handleEmail}
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="box-form__contact-type">
                    <label>
                      <i className="fa-solid fa-location-dot"></i> &nbsp;{" "}
                      <b>City *</b>
                    </label>
                    <input
                      value={city}
                      onChange={handleCity}
                      type="text"
                      placeholder="Enter your city"
                    />
                  </div>
                </div>
              </div>

              {/* Accident Details */}
              <div className="section-container">
                <h2>Accident Details</h2>
                <div className="grid-container">
                  <div className="box-form__contact-type">
                    <label>Accident Description *</label>
                    <textarea
                      value={accidentDescription}
                      onChange={handleAccidentDescription}
                      placeholder="Describe the accident"
                    ></textarea>
                  </div>

                  {/* <div className="box-form__contact-type">
                    <label>Vehicles Involved *</label>
                    <input
                      value={vehiclesInvolved}
                      onChange={handleVehiclesInvolved}
                      type="text"
                      placeholder="Enter the vehicles involved"
                    />
                  </div> */}

                  <div className="box-form__contact-type">
                    <label>Address of Accident *</label>
                    <input
                      value={accidentAddress}
                      onChange={handleAccidentAddress}
                      type="text"
                      placeholder="Enter the address of accident"
                    />
                  </div>

                  <div className="box-form__contact-type">
                    <label>Who is at Fault? *</label>
                    <input
                      value={fault}
                      onChange={handleFault}
                      type="text"
                      placeholder="Enter who is at fault"
                    />
                  </div>
                </div>
              </div>

              {/* Non-Fault Vehicle Details */}
              <div className="section-container">
                <h2>Non-Fault Vehicle Details</h2>
                <div className="grid-container">
                  <div className="box-form__contact-type">
                    <label>Car Registration *</label>
                    <input
                      value={carRego}
                      onChange={handleCarRego}
                      type="text"
                      placeholder="Enter car registration"
                    />
                  </div>

                  <div className="box-form__contact-type">
                    <label>Car Make *</label>
                    <input
                      value={carMake}
                      onChange={handleCarMake}
                      type="text"
                      placeholder="Enter car make"
                    />
                  </div>

                  <div className="box-form__contact-type">
                    <label>Car Model *</label>
                    <input
                      value={carModel}
                      onChange={handleCarModel}
                      type="text"
                      placeholder="Enter car model"
                    />
                  </div>

                  <div className="box-form__contact-type">
                    <label>Car Year *</label>
                    <input
                      value={carYear}
                      onChange={handleCarYear}
                      type="text"
                      placeholder="Enter car year"
                    />
                  </div>

                  <div className="box-form__contact-type">
                    <label>Insurance Company *</label>
                    <input
                      value={insuranceCompany}
                      onChange={handleInsuranceCompany}
                      type="text"
                      placeholder="Enter insurance company"
                    />
                  </div>

                  <div className="box-form__contact-type">
                    <label>Claim Number</label>
                    <input
                      value={claimNumber}
                      onChange={handleClaimNumber}
                      type="text"
                      placeholder="Enter claim number"
                    />
                  </div>
                </div>
              </div>

              {/* At Fault Driver's Details */}
              <div className="section-container">
                <h2>At Fault Driver's Details</h2>
                <div className="grid-container">
                  <div className="box-form__contact-type">
                    <label>First Name *</label>
                    <input type="text" placeholder="Enter first name" />
                  </div>

                  <div className="box-form__contact-type">
                    <label>Last Name *</label>
                    <input type="text" placeholder="Enter last name" />
                  </div>

                  <div className="box-form__contact-type">
                    <label>Address *</label>
                    <input type="text" placeholder="Enter address" />
                  </div>

                  <div className="box-form__contact-type">
                    <label>Claim Number </label>
                    <input type="text" placeholder="Enter claim number" />
                  </div>

                  <div className="box-form__contact-type">
                    <label>Insurance Company *</label>
                    <input type="text" placeholder="Enter insurance company" />
                  </div>

                  <div className="box-form__contact-type">
                    <label>Phone Number *</label>
                    <input type="tel" placeholder="Enter phone number" />
                  </div>

                  <div className="box-form__contact-type">
                    <label>Car Rego *</label>
                    <input type="text" placeholder="Enter car registration" />
                  </div>
                </div>
              </div>

              {/* <button onClick={confirmBooking} type="submit">
                Submit
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactForm;
