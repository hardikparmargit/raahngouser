import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Volunteer from "./Pages/Volunteer";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import Feedback from "./Pages/Feedback";
import Home from "./Pages/Home/Home";
import FutureProjects from "./Pages/FutureProjects";
import Events from "./Pages/Events/Events";
import SingleEvent from "./Pages/Events/SingleEvent";
import Services from "./Pages/Services/Services";
import SingleServices from "./Pages/Services/SingleServices";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Media from "./Pages/Media";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/volunteer" element={<Volunteer />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/viewevent/:id" element={<SingleEvent />}></Route>
          <Route path="/feedback" element={<Feedback />}></Route>
          <Route path="/futureProject" element={<FutureProjects />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route
            path="/singleServices/:id"
            element={<SingleServices />}
          ></Route>
          <Route path="/media" element={<Media />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
