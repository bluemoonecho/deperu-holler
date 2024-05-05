import React from "react";
import PramaDoradaImage from "../assets/images/Still-Prama-Dorada.png";
import "../styles/wine-page.css";
import Header from "./Header";
import Background from "../assets/images/fria_bg.jpg";
import { Trans } from "@lingui/macro";

const PramaDorada = () => (
  <>
    <Header
      heading="PRAMA DORADA"
      image={Background}
      subHeading="FIAMUS BARBATELLAS E COMO SEMUS UA, SEMUS BINU"
    />
    <div className="wine-page container">
      <div className="wine-page__area">
        <img
          className="wine-page__bottle md:-mt-80"
          src={PramaDoradaImage}
          alt="prama-dorada-bottle"
        />
        <div className="wine-page__content">
          <h2 className="font-bold text-2xl md:text-3xl mt-4">
            PRAMA DORADA ISOLA DEI NURAGHI IGT
          </h2>
          <p className="mt-4">
            <Trans>
              Quando dai al mondo ciò che hai di buono, lui ti ripaga con una
              brezza, con un sospiro, con un buon vino. Prama Dorada è il
              ritrovamento dei vini bianchi di una volta, quando nei filari si
              mescolavano varietà innestate con marze raccomandate, mai due vini
              uguali. Prama Dorada è l’assemblaggio delle varietà autoctone
              sarde che amiamo di più. Una mescita ricca, elegante e sopratutto
              unica.
            </Trans>
          </p>
          <div className="wine-page__columns">
            <div>
              <p>
                <Trans>
                  Vitigno:{" "}
                  <span className="text-gray-400">
                    vitigni autoctoni sardi a bacca bianca.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Tipologia di allevamento:
                  <span className="text-gray-400"> guyot.</span>{" "}
                </Trans>
              </p>
              <p>
                <Trans>
                  Densità di impianto:{" "}
                  <span className="text-gray-400">
                    4.000 piante per ettaro.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Resa per ettaro:{" "}
                  <span className="text-gray-400">60/70 quintali.</span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Vinificazione{" "}
                  <span className="text-gray-400">
                    in bianco, macerazione di minimo sette giorni sulle bucce,
                    pressatura soffice, pied de cuve con lieviti indigeni,
                    blend, battonage di nove mesi sulle fecce fine, senza
                    prodotti di sintesi, chiarifiche o filtrazioni.
                  </span>
                </Trans>
              </p>
            </div>
            <div>
              <p>
                <Trans>
                  Colore:{" "}
                  <span className="text-gray-400">
                    {" "}
                    giallo pieno con lucide nuance di topazio.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Olfatto:{" "}
                  <span className="text-gray-400">
                    profumi varietali di frutta estiva a polpa bianca senza
                    forzature esotiche. Sentori che evolvono e premiano durante
                    la degustazione con garbate note mandorlate, mielose e di
                    clorofilla in un bouquet di grande finezza.{" "}
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Gusto:{" "}
                  <span className="text-gray-400">
                    avvolgente, morbido, caldo che si compensano con leggermente
                    sapido, armonioso e di buona struttura, lascia un leggero
                    retrogusto di mandorla.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Abbinamenti:{" "}
                  <span className="text-gray-400">
                    antipasti elaborati della cucina di mare, prosciutto crudo
                    artigianale, primi piatti sapidi e anche piccanti, formaggi
                    crosta fiorita ed erborinati.
                  </span>
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default PramaDorada;
