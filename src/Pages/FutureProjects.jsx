import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";

function FutureProjects() {
  const [datas, setDatas] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        `https://backend.raahgujarat.in/getFutureStrategy`
      );
      const data = await response.data;
      setDatas(data.strategy || []);
    } catch (error) {
      console.error(error);
      setDatas([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="page-wrapper">
        {/* Preloader */}
        {/* <div className="loader-wrap">
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
        </div> */}
        {/* Main Header*/}
        <Header />
        {/* End Main Header */}
        {/* Hidden Sidebar */}

        {/* Page Title */}
        <section
          className="page-title"
          style={{ backgroundImage: "url(images/background/bg-13.jpg)" }}
        >
          <div className="auto-container">
            <div className="content-box">
              <h1>Future Strategy of 'RAAH'</h1>
              <ul className="bread-crumb">
                <li>
                  <a className="home" href="/">
                    <span className="fa fa-home" />
                  </a>
                </li>
                <li>Future Strategy </li>
              </ul>
            </div>
          </div>
        </section>
        {/* History Section */}
        <section className="history-section">
          <div className="auto-container">
            <div className="description">
              <div className="top-content text-center">
                <div className="icon-box">
                  <span className="flaticon-hands-and-gestures" />
                </div>
                <h1>List</h1>
              </div>
              <div className="px-5 col-lg-12">
                <ul className="list-style-one">
                  <div
                    className="text text-justify"
                    dangerouslySetInnerHTML={{ __html: datas?.strategy }}
                  ></div>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Main Footer */}
        <Footer />
        {/*Scroll to top*/}
      </div>
    </>
  );
}

export default FutureProjects;
