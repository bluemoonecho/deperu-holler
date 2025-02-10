import React from "react";
import Header from "./Header";
import { t } from "@lingui/macro";
import viniImage from "../assets/images/DeperuHoller_100_1873.jpg";
import { wines } from "../utils/wines";
import { Link, useParams } from "react-router-dom";
const Vini = () => {
  const { lang } = useParams();

  return (
    <div>
      <Header
        classNames="text-white mt-56"
        heading={t`I NOSTRI VINI`}
        image={viniImage}
      />
      <div className="container flex text-center">
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
      </div>
    </div>
  )
};

export default Vini;
