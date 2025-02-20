import slide2 from "../assets/carousel/deperu_holler_slide_1-1024x684.jpg";
import slide1 from "../assets/carousel/deperu_holler_slide_2-1024x684.jpg";
import slide3 from "../assets/carousel/deperu_holler_slide_3-1024x684.jpg";
import slide4 from "../assets/carousel/deperu_holler_slide_4-1024x684.jpg";
import slide5 from "../assets/carousel/deperu_holler_slide_5-1024x768.jpg";
import slide6 from "../assets/carousel/deperu_holler_slide_6-1024x768.jpg";
import { wines } from "../utils/wines"
import { Link, useParams } from "react-router-dom";

import "../styles/home.css";
import Carousel from "./Carousel";
import { Trans } from "@lingui/macro";

import React from "react";

const Home = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

  const { lang } = useParams();

  return (
    <div className="flex flex-col">
      <div className="relative h-full w-full">
        <Carousel images={slides} />
      </div>
      <div className="flex flex-col justify-center align-center mt-24 gap-24 px-12 container">
        <h2 className="flex justify-center text-4xl font-bold">
          <Trans>I NOSTRI VINI</Trans>
        </h2>
        <div className="home__wine-links font-mont">
          {wines(lang).map((wine) => (
            <Link to={wine.href} className="home__wine-link">
              <img className="home__wine-link-image" src={wine.image} alt={wine.name} />
              <span className="home__wine-link-name font-bold mt-10">
                {wine.name.toUpperCase()}
              </span>
            </Link>
          ))}
        </div>
        <div className="home__text">
          <p>
            <Trans>Siamo figli della nostra cultura, dei nostri valori. </Trans>
          </p>
          <p>
            <Trans>Siamo figli del vento.</Trans>
          </p>
          <p>
            <Trans>
              Per noi uno dei gesti più belli e profondi dell’uomo è coltivare,
              lavorare con la natura e lasciare che essa ci ripaghi con
              generosità.
            </Trans>
          </p>
          <p>
            <Trans>
              Per questo abbiamo scelto di lavorarla con rispetto. Aiutiamo la
              terra e le piante a dare il meglio senza logorarle.
            </Trans>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
