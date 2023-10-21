import React, { useState, useRef, useEffect } from "react";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
// import "react-image-gallery/styles/css/image-gallery.css";
// import { Carousel } from "react-responsive-carousel";
import slide1 from "../assets/carousel/deperu_holler_slide_1-1024x684.jpg";
import slide2 from "../assets/carousel/deperu_holler_slide_2-1024x684.jpg";
import slide3 from "../assets/carousel/deperu_holler_slide_3-1024x684.jpg";
import slide4 from "../assets/carousel/deperu_holler_slide_4-1024x684.jpg";
// import slide5 from "../assets/carousel/deperu_holler_slide_5-1024x684.jpg";
// import slide6 from "../assets/carousel/deperu_holler_slide_6-1024x684.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/home.css";

const Home = () => {
  const slides = [
    {
      original: slide1,
      caption: "Slide 1",
    },
    {
      original: slide2,
      caption: "Slide 2",
    },
    {
      original: slide3,
      caption: "Slide 3",
    },
    {
      original: slide4,
      caption: "Slide 4",
    },
    // {
    //   original: slide5,
    //   caption: "Slide 5",
    // },
    // {
    //   original: slide6,
    //   caption: "Slide 6",
    // },
  ];

  return (
    <div className="flex flex-col home">
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold text-4xl z-50">
        Hello world!
      </h1>
      <div className="h-full w-full">
        <ImageGallery
          showThumbnails={false}
          loading
          fullscreen={slides}
          ss
          lazyLoad={true}
          showPlayButton={false}
          showFullscreenButton={false}
          // autoPlay={true}
          infinite
          showNav={false}
          useTranslate3Ds
          items={slides}
        />
      </div>
    </div>
  );
};

export default Home;
