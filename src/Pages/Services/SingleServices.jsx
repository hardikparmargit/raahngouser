import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";

function SingleServices() {
  const location = useLocation();
  const reqId = location.pathname.split("/")[2];
  const [service, setService] = useState(null);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const fetchservices = async () => {
      try {
        const response = await axios.post(
          `/getServiceDetailById`,
          {
            reqId,
          }
        );
        const data = await response.data;
        console.log(data);
        setService(data.service);
      } catch (error) {
        setService(null);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchservices();
  }, [reqId]);

  return (
    <>
      <div className="page-wrapper">
        {/* Preloader */}
        {/* <div className="loader-wrap">
          <div className="preloader" />
          <div className="layer layer-one"><span className="overlay" /></div>
          <div className="layer layer-two"><span className="overlay" /></div>        
          <div className="layer layer-three"><span className="overlay" /></div>        
        </div> */}
        {/* Main Header*/}
        <Header />
        {/* Upcoming Section */}
        <section
          className="upcoming-events-section-two style-two"
          style={{ backgroundColor: "#2a2550" }}
        >
          <div className="auto-container">
            <div className="sec-title text-center light">
              <h1>{service?.serviceName}</h1>
            </div>
          </div>
        </section>

        {/* About services */}
        <section className="about-service mt-5">
          <div className="auto-container">
            <div className="sec-title text-center">
              <h1>Details about our Service</h1>
              <div className="text">
                We connect nonprofits, donors, and companies in nearly every
                country around the world.
              </div>
            </div>
            <div className="service-tab-two">
              <ul className="nav nav-tabs tab-btn-style-one" role="tablist">
                <li className="nav-item wow fadeInUp" data-wow-delay=".4s">
                  <a
                    className="nav-link"
                    id="tab-one-area"
                    data-toggle="tab"
                    href="#tab-one"
                    role="tab"
                    aria-controls="tab-one"
                    aria-selected="true"
                  >
                    <h4>RAAH</h4>
                  </a>
                </li>
              </ul>
              <div className="text-center mb-60">
                <span className="border-shape" />
              </div>
              {/* Tab panes */}
              <div className="tab-content">
                <div
                  className="tab-pane fadeInUp animated active"
                  id="tab-two"
                  role="tabpanel"
                  aria-labelledby="tab-two"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="image mb-30">
                        <img
                          style={{ width: "100%" }}
                          src={`/images/servicePics/${service?.servicePic}`}
                          alt={service?.servicePic}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="content">
                        <h2>Description</h2>
                        <div className="text text-justify">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: service?.serviceDescription,
                            }}
                            className="service-description"
                          />
                        </div>
                        {service?.serviceOutcome !== "<p> </p>" ? (
                          <div className="info-box">
                            <h2>Outcomes</h2>
                            <div className="row">
                              <div className=" col-lg-12 ">
                                <ul className="styled-list  list-style-two">
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: service?.serviceOutcome,
                                    }}
                                    className="service-outcome"
                                  />
                                </ul>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        {/*Scroll to top*/}
      </div>
    </>
  );
}

export default SingleServices;
