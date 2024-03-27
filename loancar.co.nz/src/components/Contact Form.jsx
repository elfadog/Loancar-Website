// import { useState } from "react";

// function ContactForm() {
//   const [modal, setModal] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [extraInfo, setExtraInfo] = useState("");
//   // const [city, setCity] = useState("");

//   const handleFirstName = (e) => {
//     setFirstName(e.target.value);
//   };

//   const handleLastName = (e) => {
//     setLastName(e.target.value);
//   };

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePhone = (e) => {
//     setPhone(e.target.value);
//   };

//   const handleExtraInfo = (e) => {
//     setExtraInfo(e.target.value);
//   };

//   // const handleCity = (e) => {
//   //   setCity(e.target.value);
//   // };

//   const openModal = (e) => {
//     e.preventDefault();
//     const errorMsg = document.querySelector(".error-message");
//     if (
//       firstName === "" ||
//       lastName === "" ||
//       email === "" ||
//       phone === ""
//       // city === ""
//     ) {
//       errorMsg.style.display = "flex";
//     } else {
//       setModal(!modal);
//       const modalDiv = document.querySelector(".booking-modal");
//       modalDiv.scroll(0, 0);
//       errorMsg.style.display = "none";
//     }
//   };

//   const confirmBooking = (e) => {
//     e.preventDefault();
//     alert("Booking confirmed, We will be in touch shortly");
//   };

//   return (
//     <section id="booking-section" className="book-section">
//       <div
//         onClick={openModal}
//         className={`modal-overlay ${modal ? "active-modal" : ""}`}
//       ></div>

//       <div className="container">
//         <div className="book-content">
//           <div className="book-content__box">
//             <h2>Want us to contact you?</h2>

//             {/* <p className="error-message">
//               All fields required! <i className="fa-solid fa-xmark"></i>
//             </p> */}

//             <form className="box-form">
//               <div className="box-form__contact-type">
//                 <label>
//                   {/* <i className="fa-solid fa-car"></i> &nbsp;  */}
//                   <b>First Name *</b>
//                 </label>
//                 <input
//                   value={firstName}
//                   onChange={handleFirstName}
//                   type="text"
//                   placeholder="Enter first name"
//                 />
//               </div>
//               <div className="box-form__contact-type">
//                 <label>
//                   {/* <i className="fa-solid fa-location-dot"></i> &nbsp;{" "} */}
//                   <b>Last Name*</b>
//                 </label>
//                 <input
//                   value={lastName}
//                   onChange={handleLastName}
//                   type="text"
//                   placeholder="Enter your Last name"
//                 />
//               </div>

//               <div className="box-form__contact-type">
//                 <label>
//                   {/* <i className="fa-solid fa-phone"></i> &nbsp;{" "} */}
//                   <b>Phone Number *</b>
//                 </label>
//                 <input
//                   value={phone}
//                   onChange={handlePhone}
//                   type="tel"
//                   placeholder="Enter your phone number"
//                 />
//               </div>

//               {/* <div className="box-form__contact-type">
//                 <label>
//                   <i className="fa-solid fa-location-dot"></i> &nbsp;{" "}
//                   <b>City *</b>
//                 </label>
//                 <input
//                   value={city}
//                   onChange={handleCity}
//                   type="text"
//                   placeholder="Enter your city"
//                 />
//               </div> */}

//               <div className="box-form__contact-type">
//                 <label>
//                   {/* <i className="fa-solid fa-envelope"></i> &nbsp; */}
//                   <b>Email*</b>
//                 </label>
//                 <input
//                   value={email}
//                   onChange={handleEmail}
//                   type="email"
//                   placeholder="Enter your email address"
//                 />
//               </div>

//               {/* <label>
//                 <i className="fa-solid fa-envelope"></i> &nbsp;{" "}
//                 <b>Extra information</b>
//               </label> */}
//               <label>
//                 <b>Extra information</b>
//               </label>
//               <textarea
//                 value={extraInfo}
//                 onChange={handleExtraInfo}
//                 type="textarea"
//                 placeholder="Extra Information"
//               />

//               <button onClick={confirmBooking} type="submit">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ContactForm;

import { useState } from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [modal, setModal] = useState(false);

  // This function will be called when the form is valid
  const onSubmit = (data) => {
    console.log(data); // You can see all your form data here
    // Here, you can also implement the logic to show the modal or alert the user
    alert("Booking confirmed, We will be in touch shortly");
    setModal(true); // or handle it as needed
  };

  const adjustTextAreaHeight = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto"; // Reset height to recalculate
    textarea.style.height = textarea.scrollHeight + "px"; // Set new height
  };

  return (
    <section id="booking-section" className="book-section">
      <div
        className={`modal-overlay ${modal ? "active-modal" : ""}`}
        onClick={() => setModal(false)}
      ></div>

      <div className="container">
        <div className="book-content">
          <div className="book-content__box">
            <h2>Want us to contact you?</h2>

            {/* You can map errors from react-hook-form here if needed */}
            {errors.firstName && <p>First name is required.</p>}
            {errors.lastName && <p>Last name is required.</p>}
            {errors.email && <p>Email is required.</p>}
            {errors.phone && <p>Phone number is required.</p>}

            <form className="box-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="box-form__contact-type">
                <label>
                  <b>First Name *</b>
                </label>
                <input
                  {...register("firstName", { required: true })}
                  type="text"
                  placeholder="Enter first name"
                />
              </div>
              <div className="box-form__contact-type">
                <label>
                  <b>Last Name*</b>
                </label>
                <input
                  {...register("lastName", { required: true })}
                  type="text"
                  placeholder="Enter your Last name"
                />
              </div>
              <div className="box-form__contact-type">
                <label>
                  <b>Phone Number *</b>
                </label>
                <input
                  {...register("phone", { required: true })}
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="box-form__contact-type">
                <label>
                  <b>Email*</b>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="box-form__contact-type">
                <label>
                  <b>Extra information</b>
                </label>
                <textarea
                  className="dynamic-textarea"
                  {...register("extraInfo")}
                  placeholder="Extra Information"
                  onChange={adjustTextAreaHeight} // Add the onChange handler here
                  style={{ overflow: "hidden" }} // Prevent scrollbar flicker
                />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
