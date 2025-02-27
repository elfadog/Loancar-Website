import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [modal, setModal] = useState(false);

  const onSubmit = (data) => {
    const serviceID = "service_p95ot29"; // Replace with your EmailJS service ID
    const templateID = "template_yyksowr"; // Replace with your EmailJS template ID
    const userID = "93mNEzr24n_ZyPO2E"; // Replace with your EmailJS user ID

    const templateParams = {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email,
      extraInfo: data.extraInfo,
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Booking confirmed, We will be in touch shortly");
        setModal(true);
      },
      (error) => {
        console.log("FAILED...", error);
        alert("Failed to send booking request. Please try again.");
      }
    );
  };

  const adjustTextAreaHeight = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
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
                  onChange={adjustTextAreaHeight}
                  style={{ overflow: "hidden" }}
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

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";

// function ContactForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [modal, setModal] = useState(false);

//   const onSubmit = (data) => {
//     axios
//       .post("http://https://loancar.co.nz/send-email", data)
//       .then((response) => {
//         console.log(response.data);
//         alert("Booking confirmed, We will be in touch shortly");
//         setModal(true);
//       })
//       .catch((error) => {
//         console.error("There was an error sending the email!", error);
//         alert("Failed to send booking request. Please try again.");
//       });
//   };

//   const adjustTextAreaHeight = (event) => {
//     const textarea = event.target;
//     textarea.style.height = "auto";
//     textarea.style.height = textarea.scrollHeight + "px";
//   };

//   return (
//     <section id="booking-section" className="book-section">
//       <div
//         className={`modal-overlay ${modal ? "active-modal" : ""}`}
//         onClick={() => setModal(false)}
//       ></div>

//       <div className="container">
//         <div className="book-content">
//           <div className="book-content__box">
//             <h2>Want us to contact you?</h2>

//             {errors.firstName && <p>First name is required.</p>}
//             {errors.lastName && <p>Last name is required.</p>}
//             {errors.email && <p>Email is required.</p>}
//             {errors.phone && <p>Phone number is required.</p>}

//             <form className="box-form" onSubmit={handleSubmit(onSubmit)}>
//               <div className="box-form__contact-type">
//                 <label>
//                   <b>First Name *</b>
//                 </label>
//                 <input
//                   {...register("firstName", { required: true })}
//                   type="text"
//                   placeholder="Enter first name"
//                 />
//               </div>
//               <div className="box-form__contact-type">
//                 <label>
//                   <b>Last Name*</b>
//                 </label>
//                 <input
//                   {...register("lastName", { required: true })}
//                   type="text"
//                   placeholder="Enter your Last name"
//                 />
//               </div>
//               <div className="box-form__contact-type">
//                 <label>
//                   <b>Phone Number *</b>
//                 </label>
//                 <input
//                   {...register("phone", { required: true })}
//                   type="tel"
//                   placeholder="Enter your phone number"
//                 />
//               </div>
//               <div className="box-form__contact-type">
//                 <label>
//                   <b>Email*</b>
//                 </label>
//                 <input
//                   {...register("email", { required: true })}
//                   type="email"
//                   placeholder="Enter your email address"
//                 />
//               </div>
//               <div className="box-form__contact-type">
//                 <label>
//                   <b>Extra information</b>
//                 </label>
//                 <textarea
//                   className="dynamic-textarea"
//                   {...register("extraInfo")}
//                   placeholder="Extra Information"
//                   onChange={adjustTextAreaHeight}
//                   style={{ overflow: "hidden" }}
//                 />
//               </div>

//               <button type="submit">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ContactForm;
