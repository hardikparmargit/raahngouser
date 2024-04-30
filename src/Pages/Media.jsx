import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import axios from "axios";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
function Media() {
  const [index, setIndex] = React.useState(-1);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  const [getImages, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`https://backend.raahgujarat.in/getMedia`);
        const data = await response.data;
        setImages(data.media.reverse() || []);
        console.log(data);
      } catch (error) {
        console.error(error);
        setImages([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  let images = [];

  for (let i = 0; i < getImages.length; i++) {
    images.push({
      src: `https://backend.raahgujarat.in/images/mediaPics/${getImages[i].mediaImage}`,
      description: getImages[i].mediaCaption,
      width: getImages[i].mediaWidth,
      height: getImages[i].mediaHeight,
    });
  }

  console.log(images);
  return (
    <>
      <div className="page-wrapper">
        {/* Your existing code */}
        <Header />
        <section
          className="page-title"
          style={{ backgroundImage: "url(images/background/bg-13.jpg)" }}
        >
          {/* Your existing code */}
        </section>
        <section style={{backgroundColor:"white"}} className="gallery-section-two p-5">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-12">
                <PhotoAlbum
                  layout="rows"
                  photos={images}
                  
                  targetRowHeight={150}
                  onClick={({ index: current }) => setIndex(current)}
                />
                <Lightbox
                  index={index}
                  plugins={[Captions]}
                  slides={images}
                  open={index >= 0}
                  close={() => setIndex(-1)}
                />
              </div>
            </div>
          </div>{" "}
        </section>{" "}
        <Footer />
      </div>
    </>
  );
}

export default Media;
