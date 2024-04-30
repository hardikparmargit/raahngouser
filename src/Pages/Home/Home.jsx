import React from "react";
import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";

import Footer from "../../Components/Footer";
import Banners from "./Components/Banners";
import About from "./Components/About";
import FunFact from "./Components/FunFact";
import TeamSection from "./Components/TeamSection";
import Events from "./Components/Events";
function Home() {
  
  return (
    <>
      <div className="page-wrapper">
        {/* Preloader */}

        <Header />
        <SideBar />
        <Banners />
        <About />
        {/* <Causes /> */}
        {/* <Donor /> */}
        <FunFact />
        <Events />

        <TeamSection />
        {/* <Blog /> */}
        {/* <Testimonial /> */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
