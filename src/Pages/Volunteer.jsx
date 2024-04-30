import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Volunteer() {
  const navigate = useNavigate();

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedStateId, setSelectedStateId] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    profilePic: "",
  });

  //getting textdata from input fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    //storing textdata from input fields
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //getting profilePic
  const handleFileChange = (e) => {
    //storing profilePic
    setData((formData) => ({
      ...formData,
      profilePic: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const datas = new FormData();

      for (const key in data) {
        datas.append(key, data[key]);
      }

     await axios.post(
        `https://backend.raahgujarat.in/addVolunteerRequest`,
        datas
      );

      alert("Submitted Succesfully!!");
      navigate("/");
    } catch (error) {
      console.log("Volnteer Error:", error);
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch(
          "https://cdn-api.co-vin.in/api/v2/admin/location/states"
        );
        const data = await response.json();
        setStates(data.states);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    if (data.selectedStateId) {
      fetchCities(data.selectedStateId);
    }
    // eslint-disable-next-line
  }, [data.selectedStateId]);

  const fetchCities = async () => {
    try {
      const response = await fetch(
        `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${selectedStateId}`
      );
      const data = await response.json();
      setCities(data.districts);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleStateChange = (event) => {
    const selectedStateName = event.target.value;
    const selectedState = states.find(
      (state) => state.state_name === selectedStateName
    );
    const selectedStateId = selectedState ? selectedState.state_id : "";
    setSelectedStateId(selectedStateId);
    setData((prevData) => ({
      ...prevData,
      state: selectedStateName,
      selectedStateId: selectedStateId,
    }));
  };

  return (
    <>
      <Header />
      {/* Volunteer */}
      <section className="volunteer-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h1>Become a volunteer</h1>
            <div className="text">
              Please read below to see what a few of our charity partners have
              to say about us.
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div
                className="image-wrapper-one wow fadeInLeft"
                data-wow-delay="400ms"
              >
                <div className="row no-gutters justify-content-center align-items-center">
                  <div className="image">
                    <img src="images/resource/image-4.jpg" alt="" />
                  </div>
                </div>
                <div className="row no-gutters justify-content-center align-items-center">
                  <div className="image">
                    <img src="images/resource/image-5.jpg" alt="" />
                  </div>
                  <div className="image">
                    <img src="images/resource/image-6.jpg" alt="" />
                  </div>
                </div>
                <div className="row no-gutters justify-content-center align-items-center">
                  <div className="image">
                    <img src="images/resource/image-7.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 order-lg-2">
              <div
                className="image-wrapper-two wow fadeInRight"
                data-wow-delay="600ms"
              >
                <div className="row no-gutters justify-content-center align-items-center">
                  <div className="image">
                    <img src="images/resource/image-8.jpg" alt="" />
                  </div>
                </div>
                <div className="row no-gutters justify-content-center align-items-center">
                  <div className="image">
                    <img src="images/resource/image-9.jpg" alt="" />
                  </div>
                  <div className="image">
                    <img src="images/resource/image-10.jpg" alt="" />
                  </div>
                </div>
                <div className="row no-gutters justify-content-center align-items-center">
                  <div className="image">
                    <img src="images/resource/image-11.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="default-form-area wow fadeInUp"
                data-wow-delay="200ms"
              >
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 column">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          value={data.name}
                          className="form-control"
                          placeholder="Your Name*"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 column">
                      <div className="form-group">
                        <select
                          className="filters-selec form-controlt selectmenu"
                          name="gender"
                          onChange={handleChange}
                          value={data.gender}
                          required
                        >
                          <option>Select Gender*</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 column">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          value={data.email}
                          className="form-control required email"
                          placeholder="Email*"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 column">
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phoneNo"
                          onChange={handleChange}
                          value={data.phoneNo}
                          max={10}
                          min={10}
                          className="form-control required phone"
                          placeholder="Phone*"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6 column">
                      <div className="form-group">
                        <input
                          type="text"
                          name="address"
                          onChange={handleChange}
                          value={data.address}
                          className="form-control required phone"
                          placeholder="Address*"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 column">
                      <div className="form-group">
                        <select
                          className="form-control"
                          name="state"
                          value={data.state}
                          onChange={handleStateChange}
                          required
                        >
                          <option value="">Select State</option>
                          {states.map((state) => (
                            <option
                              key={state.state_id}
                              value={state.state_name}
                            >
                              {state.state_name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 column">
                      <div className="form-group">
                        <select
                          className="form-control"
                          name="city"
                          value={data.city}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select City</option>
                          {cities.map((city) => (
                            <option
                              key={city.district_id}
                              value={city.district_name}
                            >
                              {city.district_name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="contact-section-btn">
                    <div className="row m-0 justify-content-md-between align-items-end">
                      <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">
                          PHOTO UPLOAD
                        </label>
                        <input
                          type="file"
                          name="profilePic"
                          onChange={handleFileChange}
                          className="form-control-file"
                          id="exampleFormControlFile1"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          id="form_botcheck"
                          name="form_botcheck"
                          className="form-control"
                          type="hidden"
                          defaultValue
                        />
                        <button
                          className="theme-btn btn-style-one"
                          type="submit"
                          data-loading-text="Please wait..."
                        >
                          <span>Submit Request</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Volunteer;
