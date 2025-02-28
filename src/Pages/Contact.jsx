import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import AccidentForm from "../components/AccidentForm";

function Contact() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true); // Start transition when component mounts
  }, []);

  return (
    <div
      className={`page-transition ${loaded ? "page-transition-active" : ""}`}
    >
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <a href="tel:027 227">
                <i className="fa-solid fa-phone"></i>&nbsp; 027 LOAN CAR (027
                5626 227)
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                enquiry@loancar.co.nz
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Auckland, New
                Zealand
              </a>
            </div>
          </div>
          <AccidentForm />
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default Contact;
