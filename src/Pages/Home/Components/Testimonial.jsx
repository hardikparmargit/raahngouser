import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Testimonial() {
  return (
    <section className="testimonial-section-four">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h1>Why people love us</h1>
          <div className="text">
            Please read below to see what a few of our charity partners have to
            say about us.
          </div>
        </div>
        <div className="row">
          <OwlCarousel
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
            className="three-item-carousel owl-theme owl-carousel owl-nav-none owl-dot-style-one"
          >
            <div className="testimonial-block-four">
              <div className="inner-box">
                <div className="image">
                  <img src="images/resource/client-thumb-1.jpg" alt="" />
                </div>
                <h4>It’s helped me so much.</h4>
                <div className="text">
                  Goodsoul! charities provided the jump <br />
                  start we needed to expaand our all efforts <br />
                  and train more volunteers.
                </div>
                <div className="author-title">Isaac Samuel</div>
                <div className="designation">
                  CEO &amp; Founder <a href="/#">Sun Life</a>
                </div>
              </div>
            </div>
            <div className="testimonial-block-four">
              <div className="inner-box">
                <div className="image">
                  <img src="images/resource/client-thumb-2.jpg" alt="" />
                </div>
                <h4>Thank you for support.</h4>
                <div className="text">
                  Thank you so much for making my family <br />
                  your priority. It has meant the world to my <br />
                  mom to have a decent car.
                </div>
                <div className="author-title">Lucas Edward</div>
                <div className="designation">
                  Employee <a href="/#">Target Tech</a>
                </div>
              </div>
            </div>
            <div className="testimonial-block-four">
              <div className="inner-box">
                <div className="image">
                  <img src="images/resource/client-thumb-3.jpg" alt="" />
                </div>
                <h4>Positive experience.</h4>
                <div className="text">
                  Thank you so much for the laptop you <br />
                  provided. It has been very helpful for him <br />
                  and I'm sure will continue.
                </div>
                <div className="author-title">Ollie Reuben</div>
                <div className="designation">
                  Web Designer <a href="/#">Forest Theme</a>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
