import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import One from "../images/howitworks/1.png";
import Two from "../images/howitworks/2.png";
import Three from "../images/howitworks/3.png";
import Four from "../images/howitworks/4.png";
import Application from "../images/howitworks/application.svg";
import Calendar from "../images/howitworks/calendar.svg";
import CheckBox from "../images/howitworks/check_box.svg";
import Monitor from "../images/howitworks/monitor.svg";
import Handshake from "../images/howitworks/handshake.svg";
import Car from "../images/howitworks/car.svg";
import Payment from "../images/howitworks/payment.svg";
import { useEffect, useState } from "react";

const bookBtn = () => {
  document
    .querySelector("#booking-section")
    .scrollIntoView({ behavior: "smooth" });
};

function HowItWorks() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true); // Start transition when component mounts
  }, []);

  return (
    <>
      <div
        className={`page-transition ${loaded ? "page-transition-active" : ""}`}
      >
        <section className="about-page">
          <HeroPages name="How it Works" />
          <div className="container">
            <div className="about-main">
              <div className="about-main__text">
                <h2>How it Works</h2>
                <div className="grid-container">
                  <div className="grid-item-top">
                    <img className="grid-item-img" src={One} alt="car-icon" />
                    <div>
                      <h3>We Approve your Application</h3>
                    </div>
                  </div>
                  <div className="grid-item-top">
                    <div>
                      <img className="grid-item-img" src={Two} alt="car-icon" />
                    </div>
                    <h3>We deliver the Replacement Vehicle</h3>
                  </div>
                  <div className="grid-item-top">
                    <div>
                      <img
                        className="grid-item-img"
                        src={Three}
                        alt="car-icon"
                      />
                    </div>
                    <h3>We monitor your vehicle repairs</h3>
                  </div>
                  <div className="grid-item-top">
                    <div>
                      <img
                        className="grid-item-img"
                        src={Four}
                        alt="car-icon"
                      />
                    </div>
                    <h3>We invoice the insurer directly</h3>
                  </div>
                </div>
                <p>
                  Our venture is fresh and full of promise! We bring a wealth of
                  enthusiasm, dedication, and proficiency to the accident
                  replacement vehicle industry. Collaborating nationwide with
                  the insurance industry and smash repairer network, we aim to
                  deliver seamless and efficient accident replacement vehicle
                  services across various capital cities and key regional hubs.
                </p>
                <h2>
                  Here are the simple steps to keep you mobile after an
                  accident:
                </h2>
                <p></p>
                <div className="grid-item">
                  <div className="inner-grid">
                    <div className="text">
                      <h4>Submit an Application</h4>
                      <p className="text-left">
                        To submit an application, please utilize our website's
                        contact form. We will promptly assess your online
                        application and provide feedback as soon as possible.
                      </p>
                    </div>
                    <img src={Application} alt="car-icon" />
                  </div>
                </div>
                <div className="grid-item">
                  <div className="inner-grid">
                    <img src={CheckBox} alt="car-icon" />
                    <div className="text">
                      <h5>Approving your Claim</h5>
                      <p className="text-right">
                        Once we've gathered all necessary information, approval
                        typically takes just 15 minutes during business hours.
                        However, in certain instances where there is uncertainty
                        regarding liability for the accident, approval may
                        require additional time as we will need to confirm
                        liability from your Insurer.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid-item">
                  <div className="inner-grid">
                    <div className="text">
                      <h4>Organising delivery/collection</h4>
                      <p className="text-left">
                        Once we approve your claim, we will contact you to
                        coordinate a convenient date and time for delivery.
                        Typically, we will arrange to meet you at your chosen
                        smash repair shop during your vehicle drop-off for
                        repairs. Alternatively, we can leave a replacement
                        vehicle at the repair shop for your collection. If your
                        vehicle is already at the smash repair shop or has been
                        towed or isn't legally drivable, we can deliver your
                        replacement vehicle to your specified location, whether
                        it's your home, workplace, or elsewhere. We are also
                        flexible and can arrange for you to pick up the vehicle
                        at a time and place that suits you best.
                      </p>
                    </div>
                    <img src={Calendar} alt="car-icon" />
                  </div>
                </div>
                <div className="grid-item">
                  <div className="inner-grid">
                    <img src={Handshake} alt="car-icon" />
                    <div className="text">
                      <h5>Vehicle handover</h5>
                      <p className="text-right">
                        When we provide you with your replacement vehicle, we
                        will request you to sign the rental agreement outlining
                        the terms and conditions of the rental. Additionally, we
                        will ask you to sign our Contract of Indemnity along
                        with our standard letter detailing the reasons for your
                        vehicle requirement.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="inner-grid">
                    <div className="text">
                      <h4>Monitoring your repairs</h4>
                      <p className="text-left">
                        We constantly monitor the progress of your smash repair
                        and provide updates as necessary. In the event your
                        vehicle is deemed a total loss, it's important for you
                        to keep us informed about the progress of your
                        settlement. The duration for which you're entitled to
                        keep the replacement vehicle is outlined in detail
                        within our rental agreement terms and conditions.
                      </p>
                    </div>
                    <img src={Monitor} alt="car-icon" />
                  </div>
                </div>
                <div className="grid-item">
                  <div className="inner-grid">
                    <img src={Car} alt="car-icon" />
                    <div className="text">
                      <h5>Collection of your repaired vehicle</h5>
                      <p className="text-right">
                        Upon completion of your repair, simply drop off the
                        LoanCar vehicle at your repair shop and collect your own
                        vehicle. It's important to notify us via phone call once
                        you've done this. We will then arrange to collect our
                        vehicle. In the case where your vehicle has been
                        declared a total loss, we will directly collect our
                        vehicle from you once your settlement is finalized or
                        when the vehicle needs to be returned.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid-item">
                  <div className="inner-grid">
                    <div className="text">
                      <h4>Payment for the hire charges</h4>
                      <p className="text-left">
                        Once the rental period concludes, LoanCar will receive
                        payment for the charges from the relevant insurance
                        company. For more detailed information, please refer to
                        our FAQs. LoanCar will typically obtain a copy of the
                        adjusted smash repair quote directly from the smash
                        repair shop. However, if necessary, you may be requested
                        to provide this to LoanCar upon their request.
                      </p>
                    </div>
                    <img src={Payment} alt="car-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="centered-button">
              <Link
                onClick={bookBtn}
                className="hero-content__text__btns__book-ride"
                to="/Contact"
              >
                Book Now &nbsp; <i className="fa-solid fa-circle-check"></i>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default HowItWorks;
