import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [contactUsData, setContactUsData] = useState({});
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.post(
        `https://backend.raahgujarat.in/getContactDetail`
      );
      const data = await response.data;
      setContactUsData(data.contactDetail || []);
    } catch (error) {
      console.error(error);
      setContactUsData([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {/* Main Footer */}
      <footer className="main-footer">
        <div className="auto-container">
          <div className="widget-wrapper">
            <div className="row ">
              {/* Contact Widget */}
              <div className="col-lg-3 col-md-6 contact-widget footer-widget">
                <h4 className="widget-title">Contact</h4>
                <ul>
                  <li>
                    <Link
                      to={
                        "https://www.google.com/maps/place/Paranti+Awas+Society/@23.0369643,72.6196951,13z/data=!4m10!1m2!2m1!1sE%2F207,+Paranti+Awas+Society,+Nr.+Vasani+Party+Plot,+Beside+Shyam+Residency-83,+Opp.+Dastan+Circle,+S+P+Ring+Road,+Kathwada,+Ahmedabad+-+382430!3m6!1s0x395e878f81c68c2f:0x2405ed69c999268c!8m2!3d23.0553325!4d72.6900117!15sCo4BRS8yMDcsIFBhcmFudGkgQXdhcyBTb2NpZXR5LCBOci4gVmFzYW5pIFBhcnR5IFBsb3QsIEJlc2lkZSBTaHlhbSBSZXNpZGVuY3ktODMsIE9wcC4gRGFzdGFuIENpcmNsZSwgUyBQIFJpbmcgUm9hZCwgS2F0aHdhZGEsIEFobWVkYWJhZCAtIDM4MjQzMJIBD2hvdXNpbmdfc29jaWV0eeABAA!16s%2Fg%2F11gw3bg1tm?entry=ttu"
                      }
                    >
                      {contactUsData.address}
                    </Link>
                  </li>
                  <li>
                    <Link to={`mailto:${contactUsData.email_1}`}>
                      {contactUsData.email_1}
                    </Link>
                  </li>
                  <li>
                    <Link to={`mailto:${contactUsData.email_2}`}>
                      {contactUsData.email_2}
                    </Link>
                  </li>
                </ul>
                <h6>
                  <Link to={`tel:${contactUsData.phone_1}`}>
                    {contactUsData.phone_1}
                  </Link>
                </h6>
                <h6>
                  <Link to={`tel:${contactUsData.phone_2}`}>
                    {contactUsData.phone_2}
                  </Link>
                </h6>
              </div>
              {/* About Widget */}
              <div className="col-lg-3 col-md-6 about-widget footer-widget">
                <h4 className="widget-title">About</h4>
                <ul>
                  <li>
                    <Link to="/feedback">Give Feedback</Link>
                  </li>
                  <li>
                    <Link to="/services">Our Services</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/aboutUs">About Us</Link>
                  </li>
                </ul>
              </div>
              {/* Link Widget */}
              <div className="col-lg-3 col-md-6 link-widget footer-widget">
                <h4 className="widget-title">Quick Link</h4>
                <ul>
                  <li>
                    <Link to="/events">Upcoming Events</Link>
                  </li>
                  <li>
                    <Link to="/futureProject">Future Strategies</Link>
                  </li>

                  <li>
                    <Link to="/volunteer">Become a Volunteer</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="left-content">
              <div className="icon">
                <img style={{ width: "100px" }} src="/images/logo.png" alt="" />
              </div>
              <div className="copyright-text">
                © 2023-2024 All Rights Reserved by <Link to="#">Raah.</Link>
                <br />
              </div>
            </div>
            <div className="right-content">
              <ul className="social-icon-three">
                <li>
                  <Link to="#">
                    <span className="fa fa-facebook" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="fa fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="fa fa-skype" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="fa fa-linkedin" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
