import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Contact() {
  const navigate = useNavigate();
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

  //storing ContactUs data from input fields
  const [ContactUsData, setContactUsData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  //getting textdata from input fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    // storing textdata from input fields
    setContactUsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContactUsSubmit = async (e) => {
    e.preventDefault();
    const validEmail = ContactUsData.email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    if (!validEmail) {
      toast.error("Please enter a valid email address", {
        autoClose: 1500,
      });
      return;
    }
    console.log(ContactUsData);

    try {
      await axios.post(`/addContactUs`, ContactUsData);
      toast.success("ContactUs Added Succesfully!!", {
        autoClose: 1500,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="page-wrapper">
        {/* Preloader */}
        {/* <div className="loader-wrap">
          <div className="preloader" />
          <div className="layer layer-one">
            <span className="overlay" />
          </div>
          <div className="layer layer-two">
            <span className="overlay" />
          </div>
          <div className="layer layer-three">
            <span className="overlay" />
          </div>
        </div> */}
        <Header />
        <section
          className="page-title"
          style={{ backgroundImage: "url(images/background/bg-13.jpg)" }}
        >
          <div className="auto-container">
            <div className="content-box">
              <h1>Get Touch With Us</h1>
              <ul className="bread-crumb">
                <li>
                  <a className="home" href="/">
                    <span className="fa fa-home" />
                  </a>
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Contact Form */}
        <section className="contact-form-section">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-8">
                <div className="default-form-area">
                  <div className="sec-title">
                    <h1>Drop a line us</h1>
                  </div>
                  <form
                    onSubmit={handleContactUsSubmit}
                    id="contact-form"
                    name="contact_form"
                    className="contact-form"
                    action="inc/sendmail.php"
                    method="post"
                  >
                    <div className="row clearfix">
                      <div className="col-lg-12 col-md-6 column">
                        <div className="form-group">
                          <input
                            type="text"
                            name="username"
                            onChange={handleChange}
                            value={ContactUsData.username}
                            className="form-control"
                            placeholder="Name"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 column">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={ContactUsData.email}
                            className="form-control required email"
                            placeholder="Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 column">
                        <div className="form-group">
                          <input
                            type="tel"
                            name="phone"
                            onChange={handleChange}
                            value={ContactUsData.phone}
                            maxLength={10}
                            minLength={10}
                            className="form-control"
                            placeholder="Phone"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 column">
                        <div className="form-group">
                          <textarea
                            name="message"
                            onChange={handleChange}
                            value={ContactUsData.message}
                            className="form-control textarea required"
                            placeholder="Message...."
                            required
                          />
                        </div>
                        <div className="form-group flex-box">
                          <div className="submit-btn">
                            <input
                              id="form_botcheck"
                              name="form_botcheck"
                              className="form-control"
                              type="hidden"
                            />
                            <button
                              className="theme-btn btn-style-one"
                              type="submit"
                              data-loading-text="Please wait..."
                            >
                              <span>Send Message</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-info-three">
                  <div className="single-info">
                    <h4>Trust Details</h4>
                    <h6>Trust Reg. No.: F/14890/A'bad</h6>
                    <h6>Society Reg. No.: Guj/15182/A'bad</h6>
                    <h6>12-A Certificate No.: 12A/638/2010</h6>
                    <h6>80G (5) 635/2011-12</h6>
                    <h6>
                      (Donation given to the Trust is <br /> exempted Under 80G
                      of Income Tax)
                    </h6>
                    <h6>CSR No.: CSRO0018777</h6>
                    <h6>Niti Aayog Unique ID No.: GJ/2014/0076095</h6>
                    {/* <Link
                      to={
                        "https://www.google.com/maps/place/Paranti+Awas+Society/@23.0369643,72.6196951,13z/data=!4m10!1m2!2m1!1sE%2F207,+Paranti+Awas+Society,+Nr.+Vasani+Party+Plot,+Beside+Shyam+Residency-83,+Opp.+Dastan+Circle,+S+P+Ring+Road,+Kathwada,+Ahmedabad+-+382430!3m6!1s0x395e878f81c68c2f:0x2405ed69c999268c!8m2!3d23.0553325!4d72.6900117!15sCo4BRS8yMDcsIFBhcmFudGkgQXdhcyBTb2NpZXR5LCBOci4gVmFzYW5pIFBhcnR5IFBsb3QsIEJlc2lkZSBTaHlhbSBSZXNpZGVuY3ktODMsIE9wcC4gRGFzdGFuIENpcmNsZSwgUyBQIFJpbmcgUm9hZCwgS2F0aHdhZGEsIEFobWVkYWJhZCAtIDM4MjQzMJIBD2hvdXNpbmdfc29jaWV0eeABAA!16s%2Fg%2F11gw3bg1tm?entry=ttu"
                      }
                    >
                      {contactData.address}
                    </Link> */}
                  </div>
                  <div className="single-info">
                    <h4>Quick Contact</h4>
                    <div className="wrapper-box">
                      <Link to={`mailto:${contactData.email_2}`}>
                        {contactData.email_2}
                      </Link>
                      <br />
                      <Link to={`tel:${contactData.phone_1}`}>
                        {contactData.phone_1}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Google Map */}
        <div className="google-map">{/*Map Canvas*/}</div>
        {/* Main Footer */}
        <Footer />
        {/*Scroll to top*/}
      </div>
    </>
  );
}

export default Contact;
