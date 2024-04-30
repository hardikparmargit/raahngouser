import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function Banners() {
  const [isDonatePopupOpen, setIsDonatePopupOpen] = useState(false);

  const openDonatePopup = () => {
    setIsDonatePopupOpen(true);
  };

  const closeDonatePopup = () => {
    setIsDonatePopupOpen(false);
  };
  return (
    <>
      <section className="banner-section">
        <Swiper
          autoplay
          loop
          speed={500}
          className="swiper-container banner-slider"
        >
          {/* Slide Item */}
          <SwiperSlide
            className="swiper-slide"
            style={{
              backgroundImage: "url(images/banner4.jpg)",
              objectFit: "fill",
            }}
          >
            <div className="content-outer">
              <div className="content-box justify-content-center">
                <div className="inner text-center">
                  <h4>
                    <span className="border-shape-left" />6 million out of 36
                    million Nigerian <span className="border-shape-right" />
                  </h4>
                  <h1>Childrens out of school</h1>
                  <div className="text">
                    To improve the learning environment in primary schools by
                    holistically creating world-class <br />
                    basic education systems to the community.
                  </div>
                  <div className="link-box" onClick={openDonatePopup}>
                    <button className="theme-btn btn-style-one donate-box-btn">
                      <span>Donate Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide Item */}
          <SwiperSlide
            className="swiper-slide"
            style={{ backgroundImage: "url(images/banner2.jpg)" }}
          >
            <div className="content-outer">
              <div className="content-box justify-content-center">
                <div className="inner text-center">
                  <h3>To improve learning environment in primary schools</h3>
                  <h1>
                    Together we can make <br />a Difference
                  </h1>
                  <div className="link-box">
                    <button
                      onClick={openDonatePopup}
                      className="theme-btn btn-style-one donate-box-btn"
                    >
                      <span>Donate Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide Item */}
          <SwiperSlide
            className="swiper-slide"
            style={{ backgroundImage: "url(images/banner3.jpg)" }}
          >
            <div className="content-outer">
              <div className="content-box justify-content-center">
                <div className="inner text-center">
                  <h1>Healing &amp; Caring</h1>
                  <div className="text">
                    To improve the learning environment in primary schools by
                    <br />
                    holistically creating world-class.
                  </div>
                  <div className="link-box">
                    <button
                      onClick={openDonatePopup}
                      className="theme-btn btn-style-one donate-box-btn"
                    >
                      <span>Donate Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="banner-slider-pagination style-two" />
          <div className="banner-slider-nav style-one">
            <div className="banner-slider-control banner-slider-button-prev">
              <span className="fa fa-angle-left" />
            </div>
            <div className="banner-slider-control banner-slider-button-next">
              <span className="fa fa-angle-right" />
            </div>
          </div>
        </Swiper>
      </section>
      <div
        id="donate-popup"
        className={`donate-popup ${isDonatePopupOpen ? "popup-visible" : ""}`}
        responsive
      >
        <div className="popup-overlay" />
        <div className="donate-form-area">
          <div className="donate-form-wrapper">
            <div className="close-donate theme-btn">
              <span className="flaticon-close" onClick={closeDonatePopup} />
            </div>
            <div className="sec-title text-center">
              <h1>Donate us to achive our goal</h1>
              <div className="text">
                Beguiled and demoralized by the charms of pleasure of the
                moment, so by desire, <br />
                that they cannot foresee.
              </div>
            </div>
            <form action="/#" className="donate-form default-form">
              {/* <ul className="chicklet-list clearfix">
                <li>
                  <input
                    type="radio"
                    id="donate-amount-1"
                    name="donate-amount"
                  />
                  <label htmlFor="donate-amount-1" data-amount={10}>
                    $10
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="donate-amount-2"
                    name="donate-amount"
                    defaultChecked="checked"
                  />
                  <label htmlFor="donate-amount-2" data-amount={20}>
                    $20
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="donate-amount-3"
                    name="donate-amount"
                  />
                  <label htmlFor="donate-amount-3" data-amount={50}>
                    $50
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="donate-amount-4"
                    name="donate-amount"
                  />
                  <label htmlFor="donate-amount-4" data-amount={100}>
                    $100
                  </label>
                </li>
                <li className="other-amount">
                  <div
                    className="input-container"
                    data-message="Every dollar you donate helps end hunger."
                  >
                    <input
                      type="text"
                      id="other-amount"
                      placeholder="Other Amount"
                    />
                  </div>
                </li>
              </ul> */}

              <h3 className="text-center">Bank Details</h3>
              <h4 className="text-center mb-5">RAAH - State Bank of India</h4>
              <div className="contact-form">
                <div className="row clearfix">
                  <div className="col-md-12 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <h5>A/c. No.: 31269256344</h5>
                      <h5>IFSC No.: SBIN0003043 </h5>
                      <h5>
                        Branch: Civil Hospital Precincts, Opp. B. J. Medical
                        College, Asarava, Ahmedabad-380016{" "}
                      </h5>
                      <h5>
                        Contact Person: Parsottam Parmar (97732 91918 / 99250
                        64083)
                      </h5>

                      {/* <h6>
                        (Donation given to the trust is exempted Under 80G og
                        Income Tax)
                      </h6>
                      <h5>CSR No.: CSR00018777 </h5>
                      <h5>Niti Aayog Unique ID No.: GJ/2014/0076095 </h5> */}
                    </div>
                  </div>
                  {/* <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="fname"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <input type="text" name="fname" placeholder="Contact" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                      <select
                        className="filters-selec form-controlt selectmenu"
                        name="form_subject"
                      >
                        <option value="*">Payment Via</option>
                        <option value=".category-1">Cash</option>
                        <option value=".category-2">Card</option>
                        <option value=".category-2">Bank Transfer</option>
                        <option value=".category-2">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="form-group d-flex align-items-center justify-content-between">
                      <button className="theme-btn btn-style-one" type="submit">
                        <span>Donate Now</span>
                      </button>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" />
                          <span>
                            I would like to donate automatically repeat each
                            month
                          </span>
                        </label>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banners;
