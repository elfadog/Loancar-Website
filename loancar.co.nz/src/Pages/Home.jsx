// import React, { useEffect } from "react";
// import Hero from "../components/Hero";
// import ContactForm from "../components/Contact Form";
// import PlanTrip from "../components/PlanTrip";
// import Faq from "../components/Faq";
// import Footer from "../components/Footer";

// function Home() {
//   useEffect(() => {
//     const scrollToFAQ = () => {
//       const faqSection = document.querySelector(".faq-box");
//       if (faqSection) {
//         faqSection.scrollIntoView({ behavior: "smooth" });
//       }
//     };

//     // Scroll to the first FAQ section when the component mounts
//     scrollToFAQ();

//     // Clean up function to remove event listener
//     return () => {
//       window.removeEventListener("scroll", scrollToFAQ);
//     };
//   }, []);

//   return (
//     <>
//       <Hero />
//       <ContactForm />
//       <PlanTrip />
//       <Faq />
//       <Footer />
//     </>
//   );
// }

// export default Home;

import React, { useEffect } from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/Contact Form";
import PlanTrip from "../components/PlanTrip";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

function Home() {
  useEffect(() => {
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
    <>
      <Hero />
      <ContactForm />
      <PlanTrip />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
