import React from "react";
function About() {
  return (
    <section className="about-section">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-content-block">
              <h1>
                Be part of a change <br />
                you want to see in the world
              </h1>
              <h4>
                “Network For Econimic Development of Disadvantege Community.”
                <br />
              </h4>
              <div className="text wow fadeInUp" data-wow-delay="200ms">
                In the year 2007-08, RAAH got an opportunity to initiate
                intervention in a slum area of Ahmedabad by the support of
                scholarship received from Dalit Foundation, New Delhi. People in
                the slum were surrounded by numbers of problems such as poor
                socio-economic condition, customs, education and health related
                problems, labour issues, unemployment, child labour, family
                issues, addiction, etc when RAAH started implementation. Looking
                at this pathetic situation of slum dwellers, RAAH decided to
                undertake operation to disseminate awareness, education and to
                improve the standard of living by bringing a change in the lives
                of labours, children, youths, parents and women, hence RAAH was
                formed on 5th February 2010.
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="link-btn wow fadeInLeft"
                    data-wow-delay="500ms"
                  >
                    <a href="/volunteer" className="theme-btn btn-style-two">
                      <i className="flaticon-next" />
                      <span>Join US</span>
                    </a>
                  </div>
                  <div className="text">
                    Be a volunteer in our NGO and be a part of our team to donate your free time to do good work. 
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="link-btn wow fadeInRight"
                    data-wow-delay="900ms"
                  >
                    <a href="/services" className="theme-btn btn-style-three">
                      <i className="flaticon-next" />
                      <span>Our Services</span>
                    </a>
                  </div>
                  <div className="text">
                    Explore our services, which we done already and continous doing in upcoming years.
                  </div>
                </div>
              </div>
              <div className="link-btn-two">
                <a href="/aboutUs" className="theme-btn btn-style-one">
                  <span>More About Us</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-image-block">
              <div className="logo-box">
                <div className="image wow zoomIn" data-wow-delay="500ms">
                  <img src="images/logo.png" alt="" />
                </div>
              </div>
              {/* <div className="image-one wow fadeInUp" data-wow-delay="200ms">
                <img src="images/resource/image-1.jpg" alt="" />
              </div>
              <div className="image-two">
                <img src="images/resource/image-2.jpg" alt="" />
                <a
                  href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s"
                  className="overlay-link lightbox-image video-fancybox"
                >
                  <span className="flaticon-multimedia" />
                </a>
              </div>
              <div
                className="image-three wow fadeInRight"
                data-wow-delay="200ms"
              >
                <img src="images/resource/image-3.jpg" alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
