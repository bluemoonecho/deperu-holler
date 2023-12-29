import React from "react";
import OberaiaImage from "../assets/images/Oberaia-264x1024.png";
import "../styles/wine-page.css";
import Header from "./Header";
import Background from "../assets/images/deperu_holler_oberaia_bg.jpg";

const Oberaia = () => (
  <>
    <Header
      heading="OBERAIA"
      image={Background}
      subHeading="AFUNDARE A INTRO SA TERRA SENA MÒRRERE"
    />
    <div className="wine-page container">
      <div className="wine-page__area">
        <img
          className="wine-page__bottle md:-mt-80"
          src={OberaiaImage}
          alt="prama-dorada-bottle"
        />
        <div className="wine-page__content">
          <h2 className="font-bold text-2xl md:text-3xl mt-4">
            PRAMA DORADA ISOLA DEI NURAGHI IGT
          </h2>
          <p className="mt-4">
            Quando dai al mondo ciò che hai di buono, lui ti ripaga con una
            brezza, con un sospiro, con un buon vino. Prama Dorada è il
            ritrovamento dei vini bianchi di una volta, quando nei filari si
            mescolavano varietà innestate con marze raccomandate, mai due vini
            uguali. Prama Dorada è l’assemblaggio delle varietà autoctone sarde
            che amiamo di più. Una mescita ricca, elegante e sopratutto unica.
          </p>
          <div className="wine-page__columns">
            <div>
              <p>
                Vitigno:{" "}
                <span className="text-gray-400">
                  vitigni autoctoni sardi a bacca bianca.
                </span>
              </p>
              <p>
                Tipologia di allevamento:
                <span className="text-gray-400"> guyot.</span>{" "}
              </p>
              <p>
                Densità di impianto:{" "}
                <span className="text-gray-400">4.000 piante per ettaro.</span>
              </p>
              <p>
                Resa per ettaro:{" "}
                <span className="text-gray-400">60/70 quintali.</span>
              </p>
              <p>
                Vinificazione{" "}
                <span className="text-gray-400">
                  in bianco, macerazione di minimo sette giorni sulle bucce,
                  pressatura soffice, pied de cuve con lieviti indigeni, blend,
                  battonage di nove mesi sulle fecce fine, senza prodotti di
                  sintesi, chiarifiche o filtrazioni.
                </span>
              </p>
            </div>
            <div>
              <p>
                Colore:{" "}
                <span className="text-gray-400">
                  {" "}
                  giallo pieno con lucide nuance di topazio.
                </span>
              </p>
              <p>
                Olfatto:{" "}
                <span className="text-gray-400">
                  profumi varietali di frutta estiva a polpa bianca senza
                  forzature esotiche. Sentori che evolvono e premiano durante la
                  degustazione con garbate note mandorlate, mielose e di
                  clorofilla in un bouquet di grande finezza.{" "}
                </span>
              </p>
              <p>
                Gusto:{" "}
                <span className="text-gray-400">
                  avvolgente, morbido, caldo che si compensano con leggermente
                  sapido, armonioso e di buona struttura, lascia un leggero
                  retrogusto di mandorla.
                </span>
              </p>
              <p>
                Abbinamenti:{" "}
                <span className="text-gray-400">
                  antipasti elaborati della cucina di mare, prosciutto crudo
                  artigianale, primi piatti sapidi e anche piccanti, formaggi
                  crosta fiorita ed erborinati.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Oberaia;
