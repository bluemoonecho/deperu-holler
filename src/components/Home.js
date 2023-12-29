import slide1 from "../assets/carousel/deperu_holler_slide_1-1024x684.jpg";
import slide2 from "../assets/carousel/deperu_holler_slide_2-1024x684.jpg";
import slide3 from "../assets/carousel/deperu_holler_slide_3-1024x684.jpg";
import slide4 from "../assets/carousel/deperu_holler_slide_4-1024x684.jpg";
import pramaDorada from "../assets/wines/fronte_pramadorada_etichetta-340x340.png";
import oberaia from "../assets/wines/deperu_holler_oberaia_label-340x337.png";
import familia from "../assets/wines/familia_etichetta-340x340.png";
import fria from "../assets/wines/Etichetta-vino-Fria-2016-Definitiva-01-340x340 (1).png";
import { Link, useParams } from "react-router-dom";

// import slide5 from "../assets/carousel/deperu_holler_slide_5-1024x684.jpg";
// import slide6 from "../assets/carousel/deperu_holler_slide_6-1024x684.jpg";
import "../styles/home.css";
import Carousel from "./Carousel";
import { Trans } from "@lingui/macro";
import LanguageSwitcher from "./LanguageSwitcher";
import React from "react";

const Home = () => {
  const slides = [slide1, slide2, slide3, slide4];
  const { lang } = useParams();

  const wines = [
    {
      image: pramaDorada,
      name: "Prama Dorada",
      href: `/${lang}/prama-dorada`,
    },
    {
      image: oberaia,
      name: "Oberaia",
      href: `/${lang}/oberaia`,
    },
    {
      image: familia,
      name: "Familia",
      href: `/${lang}/familia`,
    },
    {
      image: fria,
      name: "Fria",
      href: `/${lang}/fria`,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="relative h-full w-full">
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold text-7xl z-10 text-white w-full">
          SEMUS FÌGIOS DE SU BENTU
        </h1>
        <Carousel images={slides} />
      </div>
      <div className="flex flex-col justify-center align-center mt-24 gap-24 px-12 container">
        <h2 className="flex justify-center text-4xl font-bold">
          <Trans>I NOSTRI VINI</Trans>
        </h2>
        <div className="flex justify-center gap-10 font-mont">
          {wines.map((wine) => (
            <Link to={wine.href}>
              <img src={wine.image} alt={wine.name} />
              <span className="flex font-bold mt-10 justify-center">
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
