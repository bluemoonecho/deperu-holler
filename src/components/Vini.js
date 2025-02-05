import React from "react";
import Header from "./Header";
import { t } from "@lingui/macro";
import viniImage from "../assets/images/DeperuHoller_100_1873.jpg";
import pramaDorada from "../assets/wines/fronte_pramadorada_etichetta-340x340.png";
import oberaia from "../assets/wines/deperu_holler_oberaia_label-340x337.png";
import familia from "../assets/wines/familia_etichetta-340x340.png";
import fria from "../assets/wines/Etichetta-vino-Fria-2016-Definitiva-01-340x340 (1).png";
import { Link, useParams } from "react-router-dom";
const Vini = () => {
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
    {
      image: fria,
      name: "Maria Tzufia",
      href: `/${lang}/maria-tzufia`,
    },
    {
      image: fria,
      name: "Beijo",
      href: `/${lang}/beijo`,
    },
  ];
  return (
    <div>
      <Header
        classNames="text-white mt-56"
        heading={t`I NOSTRI VINI`}
        image={viniImage}
      />
      <div className="container flex text-center">
        <div className="home__wine-links font-mont">
          {wines.map((wine) => (
            <Link to={wine.href} className="home__wine-link">
              <img className="home__wine-link-image" src={wine.image} alt={wine.name} />
              <span className="home__wine-link-name font-bold mt-10">
                {wine.name.toUpperCase()}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Vini;
