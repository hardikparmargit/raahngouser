import React from "react";

function Donor() {
  return (
    <section
      className="donor-section"
      style={{ backgroundImage: "url(images/background/bg-1.jpg)" }}
    >
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-8 left-column">
            <div className="sec-title light">
              <h1>The trusted choice of donors</h1>
              <div className="text">
                We connects nonprofits, donors, and companies in nearly every
                country around the world.
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 donor-block">
                <div className="inner-box wow fadeInUp" data-wow-delay="200ms">
                  <div className="top-content">
                    <div className="image">
                      <img src="images/resource/donor-1.jpg" alt="" />
                      <div className="overlay">
                        <div className="icon">
                          <a href="/#">
                            <span className="fa fa-twitter" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <h4>Austin Leon</h4>
                    <div className="location">San Jose</div>
                  </div>
                  <div className="bottom-content">
                    <div className="text">Donation</div>
                    <div className="price">$250</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 donor-block">
                <div className="inner-box wow fadeInUp" data-wow-delay="500ms">
                  <div className="top-content">
                    <div className="image">
                      <img src="images/resource/donor-2.jpg" alt="" />
                      <div className="overlay">
                        <div className="icon">
                          <a href="/#">
                            <span className="fa fa-twitter" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <h4>Alvina Betty</h4>
                    <div className="location">Liverpool</div>
                  </div>
                  <div className="bottom-content">
                    <div className="text">Donation</div>
                    <div className="price">$200</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 donor-block">
                <div className="inner-box wow fadeInUp" data-wow-delay="200ms">
                  <div className="top-content">
                    <div className="image">
                      <img src="images/resource/donor-3.jpg" alt="" />
                      <div className="overlay">
                        <div className="icon">
                          <a href="/#">
                            <span className="fa fa-twitter" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <h4>Jasper Flelix</h4>
                    <div className="location">Newcastle</div>
                  </div>
                  <div className="bottom-content">
                    <div className="text">Donation</div>
                    <div className="price">$500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 right-column">
            <div
              className="feature-block-one wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="icon-box">
                <span className="flaticon-world" />
              </div>
              <h4>
                Maximum tax <br />
                benefit
              </h4>
            </div>
            <div
              className="feature-block-one wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="icon-box">
                <span className="flaticon-reward" />
              </div>
              <h4>
                Publicity <br />
                or anonymity
              </h4>
            </div>
            <div
              className="feature-block-one wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="icon-box">
                <span className="flaticon-shield" />
              </div>
              <h4>
                Guaranteed <br />
                and relevance
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Donor;
