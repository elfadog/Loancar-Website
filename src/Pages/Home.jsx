import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/Contact Form";
import PlanTrip from "../components/PlanTrip";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

function Home() {
  //smooth load
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true); // Set loaded to true when the component mounts

    const scrollToFAQ = () => {
      const faqSection = document.querySelector(".faq-section");
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Listen for clicks on the "FAQ" link in the footer
    const faqLink = document.querySelector('a[href="/home#faq"]');
    if (faqLink) {
      faqLink.addEventListener("click", scrollToFAQ);
    }

    // Clean up function to remove event listener
    return () => {
      if (faqLink) {
        faqLink.removeEventListener("click", scrollToFAQ);
      }
    };
  }, []);

  return (
    <div
      className={`page-transition ${loaded ? "page-transition-active" : ""}`}
    >
      <Hero />
      <ContactForm />
      <PlanTrip />
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
