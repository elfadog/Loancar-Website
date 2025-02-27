import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PrivacyPolicy from "../components/PrivacyPolicy";

function TestimonialsPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true); // Start transition when component mounts
  }, []);

  return (
    <div
      className={`page-transition ${loaded ? "page-transition-active" : ""}`}
    >
      <>
        <section className="privacy-page">
          <HeroPages name="Privacy Policy" />
          <PrivacyPolicy />
          <Footer />
        </section>
      </>
    </div>
  );
}

export default TestimonialsPage;
