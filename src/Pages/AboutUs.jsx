import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Team() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true); // Start transition when component mounts
  }, []);

  return (
    <div
      className={`page-transition ${loaded ? "page-transition-active" : ""}`}
    >
      <section className="about-us">
        <HeroPages name="About Us" />
        <div className="about-us-content">
          <p>
            LoanCar was established in 2024, as a new player in the accident
            replacement vehicle industry in New Zealand. With experience of over
            20 years in the Insurance industry, we are committed to building a
            reputation for exceptional customer service, integrity, efficiency,
            and transparency. We are building strong relationships with
            insurance companies and repairers to provide a hassle-free
            replacement vehicle service focused on minimizing stress and
            inconvenience following an accident. At LoanCar, we continuously
            strive to innovate and improve our efficiency levels to reduce costs
            and enhance the replacement service we offer, aiming to minimise
            hire costs for the insurance industry. If you've been involved in an
            accident, don't hesitate to give us a call. We're here to help get
            you back on the road!
          </p>
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default Team;
