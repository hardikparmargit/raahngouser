import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import axios from "axios";

import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { Link } from "react-router-dom";

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(3);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    axios
      .post(`${process.env.BACKEND_URL}/getService`)
      .then((response) => {
        if (response.data && response.data.success) {
          setServices(response.data.services || []);
        } else {
          console.error(response.data && response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setServices([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  // Change page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Get current products
  const indexOfLastProduct = currentPage * servicesPerPage;
  const indexOfFirstProduct = indexOfLastProduct - servicesPerPage;
  const currentservices = services.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  return (
    <>
      <div className="page-wrapper">
        {/* Preloader */}
        {loading ? (
          <>
            <div className="loader-wrap">
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
            </div>
          </>
        ) : null}
        {/* Main Header*/}
        <Header />
        {/* End Main Header */}

        {/* Upcoming Section */}
        <section
          className="upcoming-events-section-two"
          style={{ backgroundImage: "url(images/banner2.jpg)" }}
        >
          <div className="auto-container">
            <div className="sec-title text-center light">
              <h5>All Services</h5>
              <h1>Our Services </h1>
            </div>
            <div className="wrapper-box">
              <div className="event-block-five">
                <h1>Raah - 2024</h1>
              </div>
            </div>
          </div>
        </section>
        {/* services Section */}
        <section className="services-section style-two">
          <div className="auto-container mt-5">
            <div className="row">
              {currentservices.length > 0 ? (
                currentservices.map((service) => (
                  <div
                    className="event-block-one col-lg-4 col-md-6"
                    key={service._id}
                  >
                    <div className="inner-box">
                      <div className="image">
                        <img
                          style={{
                            height: "300px",
                            width: "100%",
                            objectFit: "cover",
                          }}
                          src={`${process.env.BACKEND_URL}/images/servicePics/${service.servicePic}`}
                          alt={service.servicePic}
                        />
                      </div>
                      <div className="lower-content">
                        <div className="date">
                          <div className="text">
                            <span className=" text-center">
                              {service.serviceName}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="link-btn">
                        <Link to={`/singleServices/${service._id}`}>
                          <span className="flaticon-next-1" />
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="d-flex text-center h1">No events found.</p>
              )}
            </div>
          </div>
          <div className="pagination-container d-flex justify-content-center mt-5">
            <Pagination
              current={currentPage}
              total={services.length}
              pageSize={servicesPerPage}
              onChange={handlePageChange}
              hideOnSinglePage={true}
            />
          </div>
          <br />
        </section>
        {/* Main Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Services;
