import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <section className="plan-section">
      <div className="container">
        <div className="plan-container">
          <div className="plan-container__title">
            <h3>Get back on the road again</h3>
            <h2>Quick & easy insurance car rental</h2>
          </div>

          <div className="plan-container__boxes">
            <div className="plan-container__boxes__box">
              <img src={SelectCar} alt="icon_img" />
              <h3>Like for Like</h3>
              <p>
                We offer a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>

            <div className="plan-container__boxes__box">
              <img src={Contact} alt="icon_img" />
              <h3>Wide Coverage</h3>
              <p>
                We are always ready to help with any questions or concerns We
                can provide a replacement vehicle anywhere in Auckland.
              </p>
            </div>

            <div className="plan-container__boxes__box">
              <img src={Drive} alt="icon_img" />
              <h3>Fast Delivery</h3>
              <p>
                We have multiple locations in the city, making it quick and easy
                to pick up your rental car.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlanTrip;
