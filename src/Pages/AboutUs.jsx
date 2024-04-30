import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";

function AboutUs() {
  const [about, setAbout] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.post(`https://backend.raahgujarat.in/getMembers`);
      const data = await response.data;
      setAbout(data.members || []);
    } catch (error) {
      console.error(error);
      setAbout([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    fetchData();
  }, []);

  // Group data items by their roles
  const groupedAbout = about.reduce((acc, curr) => {
    acc[curr.memberRole] = [...(acc[curr.memberRole] || []), curr];
    return acc;
  }, {});

  return (
    <>
      <div className="page-wrapper">
        <Header />
        <section
          className="page-title"
          style={{ backgroundImage: "url(images/background/bg-13.jpg)" }}
        >
          <div className="auto-container">
            <div className="content-box">
              <h1>Know About Us</h1>
              <ul className="bread-crumb">
                <li>
                  <a className="home" href="/">
                    <span className="fa fa-home" />
                  </a>
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="history-section">
          <div className="auto-container">
            {Object.entries(groupedAbout).map(([role, data]) => (
              <div className="description" key={role}>
                <div className="text-center">
                  <div className="top-content text-center">
                    <div className="icon-box">
                      <span className="flaticon-hands-and-gestures" />
                    </div>
                    <h1>{role}</h1>
                  </div>
                  {data.map((item) => (
                    <div key={item.memberName}>
                      <h3 className="mt-3 mb-0">{item.memberName}</h3>
                      <p className="text">{item.aboutMember}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
