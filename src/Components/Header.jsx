import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contactData, setContactData] = useState({});
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.post(
        `/getContactDetail`
      );
      const data = await response.data;
      setContactData(data.contactDetail || []);
    } catch (error) {
      console.error(error);
      setContactData([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Main Header*/}
      <header className="main-header">
        {/* <!-- Top bar --> */}
        <div className="top-bar theme-bg">
          <div className="auto-container">
            <div className="wrapper-box">
              <div className="left-content">
                <div className="text">
                  Way Towards Inclusive Development...
                  {/* <a href="/#" className="donate-box-btn">
                    Donate Now.
                  </a> */}
                </div>
              </div>
              <div className="right-content">
                <ul className="contact-info">
                  <li>
                    <span className="flaticon-mail"></span>
                    <Link to={`mailto:${contactData.email_1}`}>
                      {contactData.email_1}
                    </Link>
                  </li>
                  <li>
                    <span className="flaticon-phone"></span>{" "}
                    <Link to={`tel:${contactData.phone_1}`}>
                      {contactData.phone_1}
                    </Link>
                  </li>
                </ul>
                <ul className="social-icon-one">
                  <li>
                    <a href="/#">
                      <span className="fa fa-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <span className="fa fa-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <span className="fa fa-skype"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Header Upper */}
        <div className="header-upper">
          <div className="auto-container">
            <div className="wrapper-box">
              <div className="logo-column">
                <div className="logo-box">
                  <div className="logo">
                    <a href="/">
                      <img
                        src="images/logo.png"
                        style={{ width: "150px", hight: "33px" }}
                        alt=""
                        title=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="right-column">
                <div className="option-wrapper">
                  <div className="nav-outer">
                    {/* Main Menu */}
                    <nav className="main-menu navbar-expand-xl navbar-dark">
                      <div className="collapse navbar-collapse">
                        <ul className="navigation">
                          <li>
                            <Link to={"/"}>Home</Link>
                          </li>
                          <li>
                            <Link to="/services">Our Services</Link>
                          </li>
                          <li>
                            <Link to="/events">Events</Link>
                          </li>
                          <li>
                            <Link to={"/aboutUs"}>About US</Link>
                          </li>
                          <li>
                            <Link to={"/media"}>Media</Link>
                          </li>

                          <li>
                            <Link to="/feedback">Feedback</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact Us</Link>
                          </li>
                          <li>
                            <Link to="/futureProject">Future Strategy</Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    {/* Main Menu End*/}
                  </div>
                  <div className="link-btn">
                    <Link to="/volunteer" className="theme-btn btn-style-one">
                      <span>Join Us</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Header */}
        <div className="sticky-header">
          <div className="auto-container">
            <div className="wrapper-box">
              <div className="logo-column">
                <div className="logo-box">
                  <div className="logo">
                    <a href="/">
                      <img
                        src="images/logo.png"
                        style={{ width: "180px", hight: "30px" }}
                        alt=""
                        title=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="menu-column">
                <div className="nav-outer">
                  <div className="nav-inner">
                    {/* Main Menu */}
                    <nav className="main-menu navbar-expand-xl navbar-dark">
                      <div className="collapse navbar-collapse">
                        <ul className="navigation">
                          <li>
                            <Link to={"/"}>Home</Link>
                          </li>
                          <li>
                            <Link to="/services">Our Services</Link>
                          </li>
                          <li>
                            <Link to="/events">Events</Link>
                          </li>
                          <li>
                            <Link to={"/aboutUs"}>About US</Link>
                          </li>
                          <li>
                            <Link to={"/media"}>Media</Link>
                          </li>

                          <li>
                            <Link to="/feedback">Feedback</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact Us</Link>
                          </li>
                          <li>
                            <Link to="/futureProject">Future Strategy</Link>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    {/* Main Menu End*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu style-one ${
            isMobileMenuOpen ? "collapsed" : ""
          }`}
        >
          <div className="menu-box">
            <div className="logo">
              <a href="/">
                <img
                  src="images/logo.png"
                  style={{ width: "180px", hight: "30px" }}
                  alt=""
                />
              </a>
            </div>
            {/* Main Menu */}
            <nav className="main-menu navbar-expand-xl navbar-dark">
              <div className="navbar-header">
                {/* Toggle Button */}
                <button
                  type="button"
                  className="navbar-toggle"
                  onClick={toggleMobileMenu}
                  aria-label="Toggle navigation"
                >
                  <span className="flaticon-menu"></span>
                </button>
              </div>
              <div
                className={`collapse navbar-collapse ${
                  isMobileMenuOpen ? "show" : ""
                }`}
                id="navbarSupportedContent"
              >
                <ul className="navigation">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/aboutUs"}>About US</Link>
                  </li>

                  <li className="dropdown">
                    <Link to="/events">Events</Link>
                  </li>
                  <li>
                    <Link to="/feedback">Give Feedback</Link>
                  </li>
                  <li>
                    <Link to={"/media"}>Media</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/futureProject">Future Strategy</Link>
                  </li>
                  <li>
                    <Link to="/services">Our Services</Link>
                  </li>
                </ul>
              </div>
            </nav>
            {/* Main Menu End*/}
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="mobile-menu-toggle">
          <button
            className="navbar-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <span className="flaticon-menu"></span>
          </button>
        </div>
      </header>
      {/* End Main Header */}
    </>
  );
}

export default Header;
