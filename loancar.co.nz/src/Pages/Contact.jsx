import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import AccidentForm from "../components/AccidentForm";

function Contact() {
  return (
    <section className="contact-page">
      <HeroPages name="Contact" />
      <div className="container">
        <div className="contact-div">
          <div className="contact-div__text">
            <h2>Need additional information?</h2>
            <a href="/">
              <i className="fa-solid fa-phone"></i>&nbsp; 027 LOAN CAR (027 5626
              227)
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
  );
}

export default Contact;
