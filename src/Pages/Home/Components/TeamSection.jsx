import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function TeamSection() {
  const [about, setAbout] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.post(`/getMembers`);
      const data = await response.data;
      setAbout(data.members || []);
    } catch (error) {
      console.error(error);
      setAbout([]);
    } finally {
      setLoading(false);
    }
  };

  let advisoryRole = [];

  for (let i = 0; i < about.length; i++) {
    if (about[i].memberRole === "Advisory Committee") {
      advisoryRole.push(about[i]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="Events-section">
      <div className="auto-container">
        <div className="row m-0 justify-content-md-between align-items-end">
          <div className="sec-title">
            <h1>Team behind Raah</h1>
            <div className="text">
              Our work would not be possible without the work of our dedicated
              volunteers.
            </div>
          </div>
          {/*Link Btn*/}
          <div className="link-btn mb-50">
            <Link to="/aboutUs" className="theme-btn btn-style-two">
              <span>Meet All Members</span>
            </Link>
          </div>
        </div>
        <div className="wrapper-box">
          <div className="row">
            {/* Team Blokc One */}
            {advisoryRole.map((member) => (
              <div className="col-lg-4 team-block-one">
                <div
                  className="inner-box wow fadeInDown"
                  data-wow-delay="200ms"
                >
                  {" "}
                  <div className="image">
                    <a href="/#">
                      <img
                        src={`/images/memberPics/${member.memberPic}`}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="lower-content">
                    <h4>
                      <a href="/#">{member.memberName}</a>
                    </h4>
                    <div className="designation">{member.aboutMember}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
}

export default TeamSection;
