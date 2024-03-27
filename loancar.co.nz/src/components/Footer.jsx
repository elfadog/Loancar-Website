import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <ul className="footer-content__1">
            <li>
              <span>LoanCar</span>
            </li>
            <li>
              We offer temporary rental vehciles, for those inconvenient times
            </li>
            <li>
              <a
                style={{ fontSize: "14px" }}
                target="_blank"
                rel="noreferrer"
                href="https//:www.samsitservices.co.nz"
              >
                Design by Sam
              </a>
            </li>
          </ul>

          <ul className="footer-content__2">
            <li>Other Links</li>
            <li>
              {" "}
              <Link className="about-link" to="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            {/* <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li> */}
            <li>
              {" "}
              <Link className="about-link" to="/Home#Faq">
                FAQ
              </Link>
            </li>
            {/* <li>
              <a href="/Home#Faq">FAQ</a>
            </li> */}
            <li>
              {" "}
              <Link className="about-link" to="/How-It-Works">
                How it Works
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/About-Us">
                About Us
              </Link>
            </li>
            {/* <li>
              <a href="/About-Us">About Us</a>
            </li> */}
            {/* <li>
              <a href="#home">T&C's</a>
            </li> */}
          </ul>

          <ul className="footer-content__2">
            <li>Company Information</li>
            <li>NZBN: 9429033217468</li>
            <li>Trading Name: Dynamic Limited,</li>
            <li>T/A Loancar.co.nz</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
