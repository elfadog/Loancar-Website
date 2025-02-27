import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import upArrow from "../images/hero/up-arrow.svg"; // Fixed import syntax and variable name

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document.querySelector("#booking-section");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-content__text">
            <h4>Rental car solutions for inconvenient times</h4>
            <p>
              Let us save you the hassle of finding the correct rental car with
              our expert experience
            </p>
            <p>
              If you are involved in an accident, where you are not at fault, we
              can provide you with a replacement car immediately and at no cost
              to you. If you are at fault, we can provide you a courtesy
              vehicle, subject to the terms and conditions of your insurance
              policy.
            </p>
            <p>
              Call <a href="tel:0275626227">027 LOAN CAR</a> (027 5626 227)
            </p>
            <div className="hero-content__text__btns">
              <Link
                onClick={bookBtn}
                className="hero-content__text__btns__book-ride"
                to="/Contact"
              >
                Apply Now &nbsp; <i className="fa-solid fa-circle-check"></i>
              </Link>
              <Link
                className="hero-content__text__btns__learn-more"
                to="/How-It-Works"
              >
                How it Works &nbsp; <i className="fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* page up */}
      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <i className="fa-solid fa-angle-up"></i>
        <img src={upArrow} alt="up-arrow" />
      </div>
    </section>
  );
}

export default Hero;
