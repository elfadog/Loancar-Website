import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function Navbar() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate(); // useNavigate hook for navigation

  const openNav = () => {
    setNav(!nav);
  };

  // Define a function for navigation that also closes the mobile nav
  const handleNavigate = (path) => {
    setNav(false); // Close the nav
    navigate(path); // Navigate to the path
  };

  return (
    <nav>
      {/* mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar__close">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <ul className="mobile-navbar__links">
          <li>
            <Link onClick={() => handleNavigate("/")} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => handleNavigate("/How-It-Works")}
              to="/How-It-Works"
            >
              How it Works
            </Link>
          </li>
          <li>
            <Link onClick={() => handleNavigate("/AboutUs")} to="/AboutUs">
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => handleNavigate("/About-Us")} to="/About-Us">
              About Us
            </Link>
          </li>
          <li>
            <Link onClick={() => handleNavigate("/contact")} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* desktop */}
      <div className="navbar">
        <div className="navbar__img">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={Logo} alt="logo-img" />
          </Link>
        </div>
        <ul className="navbar__links">
          <li>
            <Link className="home-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="about-link" to="/How-It-Works">
              How it Works
            </Link>
          </li>
          <li>
            <Link className="team-link" to="/About-Us">
              About Us
            </Link>
          </li>
          <li>
            <Link className="contact-link" to="/contact">
              Apply Now
            </Link>
          </li>
        </ul>

        {/* mobile */}
        <div className="mobile-hamb" onClick={openNav}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
