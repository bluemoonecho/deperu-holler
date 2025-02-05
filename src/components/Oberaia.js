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
              La vite è una meraviglia della natura, simbolo della simbiosi tra
              terra e ambiente, celebrazione delle radici e della vita che si
              evolve. Sprofondare nella terra senza morire, crescere verso il
              cielo e dare frutti che inebriano e raccontano. Questo vino rosso
              è un omaggio alle nostre radici e alla cultura, dedicato a tutti
              coloro che trasmettono passione e raccontano storie.
            </Trans>
          </p>
          <p className="mt-4">
            <Trans>E a San Giorgio che vince il drago!</Trans>
          </p>
          <p className="mt-4">
            <Trans>Oberaìa è il nostro Cannonau delle feste.</Trans>
          </p>
          <div className="wine-page__columns">
            <div>
              <p>
                <Trans>
                  Vitigni: <span className="text-gray-400">Cannonau.</span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Zona di produzione:{" "}
                  <span className="text-gray-400">Scupaggiu (Bortigiadas)</span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Tipologia di allevamento:{" "}
                  <span className="text-gray-400">
                    Alberello e cordone speronato.
                  </span>
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
                  <span className="text-gray-400">55 quintali.</span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Trattamenti:{" "}
                  <span className="text-gray-400">
                    Rame, zolfo e preparati biologici.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Vinificazione:{" "}
                  <span className="text-gray-400">
                    La raccolta avviene manualmente, seguita da una macerazione
                    sulle bucce di circa venti giorni in tini aperti, senza
                    controllo della temperatura.Fermentazione espontanea,
                    affinamento in botti di rovere per dodici mesi, con
                    ulteriori nove mesi in bottiglia. Il vino viene
                    imbottigliato senza chiarifiche né filtrazioni, per
                    preservarne l'autenticità.
                  </span>
                </Trans>
              </p>
            </div>
            <div>
              <p>
                <Trans>
                  Colore:{" "}
                  <span className="text-gray-400">
                    Rosso rubino brillante, penetrabile con riflessi granati.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Olfatto:{" "}
                  <span className="text-gray-400">
                    Al naso emergono profumi di frutti di bosco – mirtilli e
                    lamponi – mescolati con note di amarena dolce. Si evolve con
                    sentori di tabacco e cioccolato. Al finale si aggiungono
                    sfumature speziate che rendono l’aroma ancora più
                    intrigante.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Gusto:{" "}
                  <span className="text-gray-400">
                    Un sapore ricco e avvolgente, sostenuto da una struttura
                    armoniosa e tannini setosi. La freschezza che lo
                    caratterizza lo rende un vino invitante, perfetto per essere
                    sorseggiato con piacere.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Abbinamenti:{" "}
                  <span className="text-gray-400">
                    Ideale con primi piatti complessi della cucina invernale,
                    cacciagione da pelo e formaggi stagionati.
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
