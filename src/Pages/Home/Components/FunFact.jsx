import axios from "axios";
import React, { useEffect, useState } from "react";

import CountUp from "react-countup";
function FunFact() {
  const [counts, setCounts] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.post(`${process.env.BACKEND_URL}/getUserCounts`);
      const data = await response.data;
      setCounts(data.counts || []);
      console.log(data);
    } catch (error) {
      console.error(error);
      setCounts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(counts.doneEventCount);

  return (
    <section className="funfacts-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h1>Numbers speaking</h1>
          <div className="text">
            Love learning about crazy facts? Then read these amazing facts that
            will tickle your brain.
          </div>
        </div>
        <div className="outer-box">
          <div className="funfact-wrapper row">
            {/*Column*/}
            <div
              className="col-lg-4 counter-block wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <img src="images/icons/icon-3.png" alt="" />
                </div>
                <h4>Completed Events</h4>
                <div className="count-box">
                  <CountUp start={0} end={counts.doneEventCount} />
                </div>
                <div className="text">Our Completed Events till now...</div>
              </div>
            </div>
            {/*Column*/}
            <div
              className="col-lg-4 counter-block wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <img src="images/icons/icon-4.png" alt="" />
                </div>
                <h4>Our Services</h4>
                <div className="count-box">
                  <span className="prefix" />
                  <CountUp start={0} end={counts.servicesCount} />
                </div>
                <div className="text">
                  We manage services to make your life easier.
                </div>
              </div>
            </div>
            {/*Column*/}
            <div
              className="col-lg-4 counter-block wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <img src="images/icons/icon-5.png" alt="" />
                </div>
                <h4>Volunteers Work With Us</h4>
                <div className="count-box">
                  <CountUp start={0} end={counts.approvedVolunteerCount} />
                </div>
                <div className="text">
                  Our volunteers are ready to help you.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bottom-content text-center">
          <div className="text">
            Indignation and dislike men who are so beguiled and demoralized by
            the charms of pleasure of the <br />
            moment, so blinded by desire, that they cannot foresee.
          </div>
          <div className="link-btn">
            <a href="/#" className="theme-btn btn-style-one donate-box-btn">
              <span>Donate Now</span>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default FunFact;
