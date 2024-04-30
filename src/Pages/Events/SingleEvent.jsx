import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";

function SingleEvent() {
  const location = useLocation();
  const reqId = location.pathname.split("/")[2];
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const fetchEvents = async () => {
      try {
        const response = await axios.post(
          `https://backend.raahgujarat.in/getEventDetailById`,
          {
            reqId,
          }
        );
        const data = await response.data;
        console.log(data);
        setEvent(data.event);
      } catch (error) {
        setEvent(null);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [reqId]);

  return (
    <>
      <div className="page-wrapper">
        {/* Preloader */}
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
        {/* Main Header*/}
        <Header />
        <section
          className="upcoming-events-section-two style-two"
          style={{ backgroundColor: "#2a2550" }}
        >
          <div className="auto-container">
            <div className="sec-title text-center light">
              <h1>{event?.eventName}</h1>
            </div>
          </div>
        </section>
        {/* Event Time & Place */}
        <div className="event-time-place">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="content" style={{ height: "200px" }}>
                  <h2>Where</h2>
                  <div className="text">
                    {event?.eventAddress +
                      ", " +
                      event?.eventCity +
                      ", " +
                      event?.eventState}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content" style={{ height: "200px" }}>
                  <h2>When</h2>
                  <div className="text">
                    Block your calendar on -{" "}
                    {new Date(event?.eventDate).toLocaleDateString()} <br />
                    {new Date(event?.eventDate).toLocaleDateString("en-US", {
                      weekday: "long",
                    })}{" "}
                    at {new Date(event?.eventDate).toLocaleTimeString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Events */}
        <section className="about-event">
          <div className="auto-container">
            <div className="sec-title text-center">
              <h1>Details about our event</h1>
              <div className="text">
                We connects nonprofits, donors, and companies in nearly every
                country around the world.
              </div>
            </div>
            <div className="event-tab-two">
              <ul className="nav nav-tabs tab-btn-style-one" role="tablist">
                <li className="nav-item wow fadeInUp" data-wow-delay=".4s">
                  <a
                    className="nav-link"
                    id="tab-one-area"
                    data-toggle="tab"
                    href="/#tab-one"
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
                          style={{ height: "350px", width: "550px", objectFit: "cover" }}
                          src={`https://backend.raahgujarat.in/images/eventPics/${event?.eventPic}`}
                          alt={event?.eventPic}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="content">
                        <h2>Event description</h2>
                        <div className="text">
                          <p>{event?.eventDescription}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Main Footer */}
        <Footer />
      </div>
    </>
  );
}

export default SingleEvent;
