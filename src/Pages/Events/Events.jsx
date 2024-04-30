import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import axios from "axios";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { Link } from "react-router-dom";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(3);

  useEffect(() => {
    axios
      .post(`/getEvents`)
      .then((response) => {
        if (response.data && response.data.success) {
          setEvents(response.data.events || []);
        } else {
          console.error(response.data && response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setEvents([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  // Change page
  const handlePageChange = (page) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setCurrentPage(page);
  };

  // Get current products
  const indexOfLastProduct = currentPage * eventsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstProduct, indexOfLastProduct);

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
        {/* End Main Header */}

        {/* Upcoming Section */}
        <section
          className="upcoming-events-section-two"
          style={{ backgroundImage: "url(images/banner2.jpg)" }}
        >
          <div className="auto-container">
            <div className="sec-title text-center light">
              <h5>All Events</h5>
              <h1>Raah awarness events</h1>
            </div>
            <div className="wrapper-box">
              <div className="event-block-five">
                <h1>Raah - 2024</h1>
              </div>
            </div>
          </div>
        </section>
        {/* Events Section */}
        <section className="events-section style-two">
          <div className="auto-container">
            <div className="row">
              {loading ? (
                <p>Loading...</p>
              ) : currentEvents.length > 0 ? (
                currentEvents.map((event) => (
                  <div
                    
                    className="event-block-one col-lg-4 col-md-6"
                    key={event._id}
                  >
                    <div className="inner-box">
                      <div>
                        <div className="image">
                          <img
                            style={{ width: "100%", height: "250px", objectFit: "cover" }}
                            src={`/images/eventPics/${event.eventPic}`}
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="lower-content">
                        <div className="date">
                          <h1>
                            <p>{new Date(event.eventDate).getDate() || ""}</p>
                          </h1>
                          <div className="text">
                            <span>
                              {new Date(event.eventDate).toLocaleString(
                                "en-IN",
                                {
                                  month: "long",
                                }
                              )}
                            </span>{" "}
                            <br />
                            {new Date(event.eventDate).toLocaleTimeString(
                              "en-IN"
                            )}
                          </div>
                        </div>
                        <h4>
                          <p>{event.eventName || ""}</p>
                        </h4>
                        <div className="location">
                          <span className="flaticon-point" />
                          {event.eventCity}
                        </div>
                      </div>
                      <div className="link-btn">
                        <Link to={`/viewevent/${event._id}`}>
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
              total={events.length}
              pageSize={eventsPerPage}
              onChange={handlePageChange}
              hideOnSinglePage={true}
            />
          </div>
        </section>
        {/* Main Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Events;
