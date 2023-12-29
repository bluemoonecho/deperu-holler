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
  ];
    return(
  <div>
    <Header
      classNames="text-white mt-56"
      heading={t`I NOSTRI VINI`}
      image={viniImage}
    />
    <div className="container flex text-center">
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
      
    </div>
  </div>
)};

export default Vini;
