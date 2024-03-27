import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PrivacyPolicy from "../components/PrivacyPolicy";

function TestimonialsPage() {
  return (
    <>
      <section className="privacy-page">
        <HeroPages name="Privacy Policy" />
        <PrivacyPolicy />
        <Footer />
      </section>
    </>
  );
}

export default TestimonialsPage;
