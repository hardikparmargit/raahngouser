import React from "react";

function SideBar() {
  return (
    <>
      {/* Hidden Sidebar */}
      <section className="hidden-sidebar close-sidebar">
        <div className="wrapper-box">
          <div className="hidden-sidebar-close">
            <span className="flaticon-cross" />
          </div>
          <div className="logo">
            <a href="/#">
              <img src="images/logo.png" alt="" />
            </a>
          </div>
          <div className="content">
            <div className="about-widget-four sidebar-widget">
              <h3>To improve learning environment in primary schools</h3>
              <div className="text">
                We denounce with righteous indignation and dislike men who we
                are to beguiled demoralized by the charms of pleasures that
                moment, so we blinded desires, that they indignations.
              </div>
            </div>
            {/* News Widget */}
            <div className="news-widget-two sidebar-widget">
              <div className="widget-title">News &amp; Updates</div>
              <div className="post-wrapper">
                <div className="image">
                  <a href="blog-details.html">
                    <img src="images/resource/post-thumb-1.jpg" alt="" />
                  </a>
                </div>
                <div className="category">LIFE SAVING</div>
                <h4>
                  <a href="blog-details.html">
                    Goodsoul partners with lafarge on national literacy
                    competition
                  </a>
                </h4>
              </div>
              <div className="post-wrapper">
                <div className="image">
                  <a href="blog-details.html">
                    <img src="images/resource/post-thumb-2.jpg" alt="" />
                  </a>
                </div>
                <div className="category">Education</div>
                <h4>
                  <a href="blog-details.html">
                    Goodsoul improves education infrastructure
                  </a>
                </h4>
              </div>
            </div>
            {/* Newsletter Widget */}
            <div className="newsletter-widget-two">
              <div className="widget-title">Newsletter Subscription</div>
              <form action="/#">
                <input type="email" placeholder="Enter Email Address" />
                <button className="theme-btn btn-style-one w-100">
                  <i className="flaticon-next" />
                  <span>Subscribe Us</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SideBar;
