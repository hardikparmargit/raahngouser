import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Events2() {
  return (
    <section className="events-section">
      {/*Event Tabs*/}
      <div className="event-tabs">
        <div className="auto-container">
          <div className="row m-0 justify-content-md-between align-items-end">
            <div className="sec-title">
              <h1>Our exciting events</h1>
              <div className="text">
                Here are our exciting events...would be great to see you at the
                next one!
              </div>
            </div>
            {/*Tabs Header*/}
            <div className="tabs-header clearfix">
              <ul className="event-tab-btns clearfix">
                <li
                  className="event-tab-btn active-btn"
                  data-tab="#event-tab-1"
                >
                  Ongoing
                </li>
                <li className="event-tab-btn" data-tab="#event-tab-2">
                  Upcoming
                </li>
              </ul>
            </div>
          </div>
          <div className="event-tab-wrapper">
            {/*Tabs Content*/}
            <div className="event-tabs-content">
              {/*Event Tab / Active Tab*/}
              <div className="event-tab active-tab" id="event-tab-1">
                <OwlCarousel
                  autoPlay={true}
                  responsive={{
                    0: {
                      items: 1,
                    },
                    576: {
                      items: 2,
                    },
                    768: {
                      items: 3,
                    },
                  }}
                  className="event-carousel owl-theme owl-carousel owl-dot-style-one owlowl-nav-none "
                >
                  {/* Event Blokc One */}
                  <div className="event-block-one">
                    <div className="inner-box">
                      <div className="image">
                        <img src="images/resource/event-1.jpg" alt="" />
                      </div>
                      <div className="lower-content">
                        <div className="date">
                          <h1>25</h1>
                          <div className="text">
                            <span>August</span> <br />
                            09.00am - 03.00pm
                          </div>
                        </div>
                        <h4>
                          <a href="event-details.html">
                            A wooden fishing boat rests on <br />
                            deal in kent
                          </a>
                        </h4>
                        <div className="location">
                          <span className="flaticon-point" />
                          24, Red rose Steet, NY
                        </div>
                      </div>
                      <div className="link-btn">
                        <a href>
                          <span className="flaticon-next" />
                          Join With Us
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Event Blokc One */}
                  <div className="event-block-one">
                    <div className="inner-box">
                      <div className="image">
                        <img src="images/resource/event-2.jpg" alt="" />
                      </div>
                      <div className="lower-content">
                        <div className="date">
                          <h1>16</h1>
                          <div className="text">
                            <span>October</span> <br />
                            10.00am - 05.00pm
                          </div>
                        </div>
                        <h4>
                          <a href="event-details.html">
                            Cancer support – world’s biggest <br />
                            coffee morning
                          </a>
                        </h4>
                        <div className="location">
                          <span className="flaticon-point" />
                          213, Derrick Street, Bos
                        </div>
                      </div>
                      <div className="link-btn">
                        <a href="event-details.html">
                          <span className="flaticon-next" />
                          Join With Us
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Event Blokc One */}
                  <div className="event-block-one">
                    <div className="inner-box">
                      <div className="image">
                        <img src="images/resource/event-3.jpg" alt="" />
                      </div>
                      <div className="lower-content">
                        <div className="date">
                          <h1>27</h1>
                          <div className="text">
                            <span>December</span> <br />
                            09.00am - 03.00pm
                          </div>
                        </div>
                        <h4>
                          <a href="event-details.html">
                            Birmingham children’s hospital <br />
                            night-time obstacle race
                          </a>
                        </h4>
                        <div className="location">
                          <span className="flaticon-point" />
                          5404, Sebenth Street, la
                        </div>
                      </div>
                      <div className="link-btn">
                        <a href="event-details.html">
                          <span className="flaticon-next" />
                          Join With Us
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Event Blokc One */}
                  <div className="event-block-one">
                    <div className="inner-box">
                      <div className="image">
                        <img src="images/resource/event-1.jpg" alt="" />
                      </div>
                      <div className="lower-content">
                        <div className="date">
                          <h1>25</h1>
                          <div className="text">
                            <span>August</span> <br />
                            09.00am - 03.00pm
                          </div>
                        </div>
                        <h4>
                          <a href="event-details.html">
                            A wooden fishing boat rests on <br />
                            deal in kent
                          </a>
                        </h4>
                        <div className="location">
                          <span className="flaticon-point" />
                          24, Red rose Steet, NY
                        </div>
                      </div>
                      <div className="link-btn">
                        <a href="event-details.html">
                          <span className="flaticon-next" />
                          Join With Us
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Event Blokc One */}
                  <div className="event-block-one">
                    <div className="inner-box">
                      <div className="image">
                        <img src="images/resource/event-2.jpg" alt="" />
                      </div>
                      <div className="lower-content">
                        <div className="date">
                          <h1>16</h1>
                          <div className="text">
                            <span>October</span> <br />
                            10.00am - 12.00pm
                          </div>
                        </div>
                        <h4>
                          <a href="event-details.html">
                            Cancer support – world’s biggest <br />
                            coffee morning
                          </a>
                        </h4>
                        <div className="location">
                          <span className="flaticon-point" />
                          213, Derrick Street, Bos
                        </div>
                      </div>
                      <div className="link-btn">
                        <a href="event-details.html">
                          <span className="flaticon-next" />
                          Join With Us
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Event Blokc One */}
                  <div className="event-block-one">
                    <div className="inner-box">
                      <div className="image">
                        <img src="images/resource/event-3.jpg" alt="" />
                      </div>
                      <div className="lower-content">
                        <div className="date">
                          <h1>27</h1>
                          <div className="text">
                            <span>December</span> <br />
                            10.00am - 05.00pm
                          </div>
                        </div>
                        <h4>
                          <a href="event-details.html">
                            Birmingham children’s hospital <br />
                            night-time obstacle race
                          </a>
                        </h4>
                        <div className="location">
                          <span className="flaticon-point" />
                          5404, Sebenth Street, la
                        </div>
                      </div>
                      <div className="link-btn">
                        <a href="event-details.html">
                          <span className="flaticon-next" />
                          Join With Us
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Event Blokc One */}
                  <div className="event-block-one">
                    <div className="inner-box">
                      <div className="image">
                        <img src="images/resource/event-1.jpg" alt="" />
                      </div>
                      <div className="lower-content">
                        <div className="date">
                          <h1>25</h1>
                          <div className="text">
                            <span>August</span> <br />
                            09.00am - 03.00pm
                          </div>
                        </div>
                        <h4>
                          <a href="event-details.html">
                            A wooden fishing boat rests on <br />
                            deal in kent
                          </a>
                        </h4>
                        <div className="location">
                          <span className="flaticon-point" />
                          24, Red rose Steet, NY
                        </div>
                      </div>
                      <div className="link-btn">
                        <a href="event-details.html">
                          <span className="flaticon-next" />
                          Join With Us
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Event Blokc One */}
                  <div className="event-block-one">
                    <div className="inner-box">
                      <div className="image">
                        <img src="images/resource/event-2.jpg" alt="" />
                      </div>
                      <div className="lower-content">
                        <div className="date">
                          <h1>16</h1>
                          <div className="text">
                            <span>October</span> <br />
                            10.00am - 12.00pm
                          </div>
                        </div>
                        <h4>
                          <a href="event-details.html">
                            Cancer support – world’s biggest <br />
                            coffee morning
                          </a>
                        </h4>
                        <div className="location">
                          <span className="flaticon-point" />
                          213, Derrick Street, Bos
                        </div>
                      </div>
                      <div className="link-btn">
                        <a href="event-details.html">
                          <span className="flaticon-next" />
                          Join With Us
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Event Blokc One */}
                  <div className="event-block-one">
                    <div className="inner-box">
                      <div className="image">
                        <img src="images/resource/event-3.jpg" alt="" />
                      </div>
                      <div className="lower-content">
                        <div className="date">
                          <h1>27</h1>
                          <div className="text">
                            <span>December</span> <br />
                            10.00am - 05.00pm
                          </div>
                        </div>
                        <h4>
                          <a href="event-details.html">
                            Birmingham children’s hospital <br />
                            night-time obstacle race
                          </a>
                        </h4>
                        <div className="location">
                          <span className="flaticon-point" />
                          5404, Sebenth Street, la
                        </div>
                      </div>
                      <div className="link-btn">
                        <a href="event-details.html">
                          <span className="flaticon-next" />
                          Join With Us
                        </a>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
              {/*Event Tab*/}
              <div className="event-tab" id="event-tab-2">
                <div className="event-carousel owl-theme owl-carousel owl-dot-style-one owl-nav-none">
                  {/* Event Blokc One */}
                  <div className="event-block-one">
                    <div className="inner-box">
                      <div className="image">
                        <img src="images/resource/event-1.jpg" alt="" />
                      </div>
                      <div className="lower-content">
                        <div className="date">
                          <h1>25</h1>
                          <div className="text">
                            <span>August</span> <br />
                            09.00am - 03.00pm
                          </div>
                        </div>
                        <h4>
                          <a href="event-details.html">
                            A wooden fishing boat rests on <br />
                            deal in kent
                          </a>
                        </h4>
                        <div className="location">
                          <span className="flaticon-point" />
                          24, Red rose Steet, NY
                        </div>
                      </div>
                      <div className="link-btn">
                        <a href>
                          <span className="flaticon-next" />
                          Join With Us
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Event Blokc One */}
                  <div className="event-block-one">
                    <div className="inner-box">
                      <div className="image">
                        <img src="images/resource/event-2.jpg" alt="" />
                      </div>
                      <div className="lower-content">
                        <div className="date">
                          <h1>16</h1>
                          <div className="text">
                            <span>October</span> <br />
                            10.00am - 05.00pm
                          </div>
                        </div>
                        <h4>
                          <a href="event-details.html">
                            Cancer support – world’s biggest <br />
                            coffee morning
                          </a>
                        </h4>
                        <div className="location">
                          <span className="flaticon-point" />
                          213, Derrick Street, Bos
                        </div>
                      </div>
                      <div className="link-btn">
                        <a href="event-details.html">
                          <span className="flaticon-next" />
                          Join With Us
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Event Blokc One */}
                  <div className="event-block-one">
                    <div className="inner-box">
                      <div className="image">
                        <img src="images/resource/event-3.jpg" alt="" />
                      </div>
                      <div className="lower-content">
                        <div className="date">
                          <h1>27</h1>
                          <div className="text">
                            <span>December</span> <br />
                            09.00am - 03.00pm
                          </div>
                        </div>
                        <h4>
                          <a href="event-details.html">
                            Birmingham children’s hospital <br />
                            night-time obstacle race
                          </a>
                        </h4>
                        <div className="location">
                          <span className="flaticon-point" />
                          5404, Sebenth Street, la
                        </div>
                      </div>
                      <div className="link-btn">
                        <a href="event-details.html">
                          <span className="flaticon-next" />
                          Join With Us
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Event Blokc One */}
                  <div className="event-block-one">
                    <div className="inner-box">
                      <div className="image">
                        <img src="images/resource/event-1.jpg" alt="" />
                      </div>
                      <div className="lower-content">
                        <div className="date">
                          <h1>25</h1>
                          <div className="text">
                            <span>August</span> <br />
                            09.00am - 03.00pm
                          </div>
                        </div>
                        <h4>
                          <a href="event-details.html">
                            A wooden fishing boat rests on <br />
                            deal in kent
                          </a>
                        </h4>
                        <div className="location">
                          <span className="flaticon-point" />
                          24, Red rose Steet, NY
                        </div>
                      </div>
                      <div className="link-btn">
                        <a href="event-details.html">
                          <span className="flaticon-next" />
                          Join With Us
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Event Blokc One */}
                  <div className="event-block-one">
                    <div className="inner-box">
                      <div className="image">
                        <img src="images/resource/event-2.jpg" alt="" />
                      </div>
                      <div className="lower-content">
                        <div className="date">
                          <h1>16</h1>
                          <div className="text">
                            <span>October</span> <br />
                            10.00am - 12.00pm
                          </div>
                        </div>
                        <h4>
                          <a href="event-details.html">
                            Cancer support – world’s biggest <br />
                            coffee morning
                          </a>
                        </h4>
                        <div className="location">
                          <span className="flaticon-point" />
                          213, Derrick Street, Bos
                        </div>
                      </div>
                      <div className="link-btn">
                        <a href="event-details.html">
                          <span className="flaticon-next" />
                          Join With Us
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Event Blokc One */}
                  <div className="event-block-one">
                    <div className="inner-box">
                      <div className="image">
                        <img src="images/resource/event-3.jpg" alt="" />
                      </div>
                      <div className="lower-content">
                        <div className="date">
                          <h1>27</h1>
                          <div className="text">
                            <span>December</span> <br />
                            10.00am - 05.00pm
                          </div>
                        </div>
                        <h4>
                          <a href="event-details.html">
                            Birmingham children’s hospital <br />
                            night-time obstacle race
                          </a>
                        </h4>
                        <div className="location">
                          <span className="flaticon-point" />
                          5404, Sebenth Street, la
                        </div>
                      </div>
                      <div className="link-btn">
                        <a href="event-details.html">
                          <span className="flaticon-next" />
                          Join With Us
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Event Blokc One */}
                  <div className="event-block-one">
                    <div className="inner-box">
                      <div className="image">
                        <img src="images/resource/event-1.jpg" alt="" />
                      </div>
                      <div className="lower-content">
                        <div className="date">
                          <h1>25</h1>
                          <div className="text">
                            <span>August</span> <br />
                            09.00am - 03.00pm
                          </div>
                        </div>
                        <h4>
                          <a href="event-details.html">
                            A wooden fishing boat rests on <br />
                            deal in kent
                          </a>
                        </h4>
                        <div className="location">
                          <span className="flaticon-point" />
                          24, Red rose Steet, NY
                        </div>
                      </div>
                      <div className="link-btn">
                        <a href="event-details.html">
                          <span className="flaticon-next" />
                          Join With Us
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Event Blokc One */}
                  <div className="event-block-one">
                    <div className="inner-box">
                      <div className="image">
                        <img src="images/resource/event-2.jpg" alt="" />
                      </div>
                      <div className="lower-content">
                        <div className="date">
                          <h1>16</h1>
                          <div className="text">
                            <span>October</span> <br />
                            10.00am - 12.00pm
                          </div>
                        </div>
                        <h4>
                          <a href="event-details.html">
                            Cancer support – world’s biggest <br />
                            coffee morning
                          </a>
                        </h4>
                        <div className="location">
                          <span className="flaticon-point" />
                          213, Derrick Street, Bos
                        </div>
                      </div>
                      <div className="link-btn">
                        <a href="event-details.html">
                          <span className="flaticon-next" />
                          Join With Us
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Event Blokc One */}
                  <div className="event-block-one">
                    <div className="inner-box">
                      <div className="image">
                        <img src="images/resource/event-3.jpg" alt="" />
                      </div>
                      <div className="lower-content">
                        <div className="date">
                          <h1>27</h1>
                          <div className="text">
                            <span>December</span> <br />
                            10.00am - 05.00pm
                          </div>
                        </div>
                        <h4>
                          <a href="event-details.html">
                            Birmingham children’s hospital <br />
                            night-time obstacle race
                          </a>
                        </h4>
                        <div className="location">
                          <span className="flaticon-point" />
                          5404, Sebenth Street, la
                        </div>
                      </div>
                      <div className="link-btn">
                        <a href="event-details.html">
                          <span className="flaticon-next" />
                          Join With Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events2;
