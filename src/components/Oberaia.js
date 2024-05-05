import React from "react";
import OberaiaImage from "../assets/images/Oberaia-264x1024.png";
import "../styles/wine-page.css";
import Header from "./Header";
import Background from "../assets/images/deperu_holler_oberaia_bg.jpg";
import { Trans } from "@lingui/macro";

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
            OBERAÌA – ISOLA DEI NAURAGHI IGT
          </h2>
          <p className="mt-4">
            <Trans>
              Quale grande privilegio della vite! Simbiosi profonda tra terra e
              pianta, celebrazione delle radice e della vita.
            </Trans>
          </p>
          <p className="mt-4">
            <Trans>
              Il 23 Aprile si celebra a Perfugas uno dei santi patroni, San
              Giorgio Guerriero. Questo vino rosso è un omaggio alle radici,
              alla cultura, a quelli dell’antica associazione Oberaìa de Santu
              Jorzi che si dedicano alla buona riuscita dei festeggiamenti.
              Oberaìa è il nostro vino della festa.
            </Trans>
          </p>
          <div className="wine-page__columns">
            <div>
              <p>
                <Trans>
                  Vitigno:{" "}
                  <span className="text-gray-400">
                    vitigno autoctono a bacca rossa, Cabernet Sauvignon.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Tipologia di allevamento:
                  <span className="text-gray-400">
                    {" "}
                    alberello e cordone speronato.
                  </span>{" "}
                </Trans>
              </p>
              <p>
                <Trans>
                  Densità di impianto:{" "}
                  <span className="text-gray-400">
                    5.680 piante per ettaro.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Resa per ettaro:{" "}
                  <span className="text-gray-400">35 quintali.</span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Vinificazione{" "}
                  <span className="text-gray-400">
                    in rosso con macerazione sulle bucce di venti giorni,
                    lieviti indigeni, affinamento in botti di rovere per dodici
                    mesi sulle fecce ed ulteriori nove mesi in bottiglia.
                  </span>
                </Trans>
              </p>
            </div>
            <div>
              <p>
                <Trans>
                  Colore:{" "}
                  <span className="text-gray-400">
                    rosso intenso con riflessi granati.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Olfatto:{" "}
                  <span className="text-gray-400">
                    sentori di frutti di bosco e amarena, note speziate.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Gusto:{" "}
                  <span className="text-gray-400">
                    pieno, ricco, corposo, tannico al punto giusto.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Abbinamenti:{" "}
                  <span className="text-gray-400">
                    primi piatti complessi della cucina invernale, cacciagione
                    da pelo, formaggi stagionati.
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

export default Oberaia;
