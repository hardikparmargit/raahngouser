import React, { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import axios from "axios";
import { Link } from "react-router-dom";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(3);

  useEffect(() => {
    axios
      .post(`https://backend.raahgujarat.in/getEvents`)
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


  // Get current products
  const indexOfLastProduct = currentPage * eventsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
      {loading ? (
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
      ) : null}
      <section className="Events-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h1>Events</h1>
            <div className="text">
              We connects nonprofits, donors, and companies in nearly every
              country around the world.
            </div>
          </div>
          <div className="cause-carousel-wrapper">
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
                        <div className="inner-box" style={{height: "450px"}}>
                          <div>
                            <div className="image">
                              <img
                                style={{ width: "100%", height: "250PX", objectFit: "cover" }}
                                src={`https://backend.raahgujarat.in/images/eventPics/${event.eventPic}`}
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="lower-content">
                            <div className="date">
                              <h1>
                                <p>
                                  {new Date(event.eventDate).getDate() || ""}
                                </p>
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
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Events;
