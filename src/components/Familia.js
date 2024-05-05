import React from "react";
import FamiliaImage from "../assets/images/Familia.png";
import "../styles/wine-page.css";
import Header from "./Header";
import Background from "../assets/images/deperu_holler_familia_bg.jpg";
import { Trans } from "@lingui/macro";

const Familia = () => (
  <div>
    <Header
      heading="FAMILIA"
      image={Background}
      subHeading="DAE SA UA SU BINU SU CAMINU EST PIUS LONGU CHI DAE SU CALIGHE A SA BUCA
      "
    />
    <div className="wine-page container">
      <div className="wine-page__area">
        <img
          className="wine-page__bottle md:-mt-80"
          src={FamiliaImage}
          alt="prama-dorada-bottle"
        />
        <div className="wine-page__content">
          <h2 className="font-bold text-2xl md:text-3xl mt-4">
            FAMILIA – ISOLA DEI NAURAGHI IGT
          </h2>
          <p className="mt-4">
            <Trans>
              Vogliamo lo splendore, il conflitto, il piacere, vogliamo
              crescere, intorno al tavolo, davanti al calice alimentando
              l’anima.
            </Trans>
          </p>
          <p className="mt-4">
            <Trans>
              Familia è il vino da bere insieme, mangiando e ridendo, rustico ma
              dall’anima fine, generoso nei sentori e fiero di rappresentare
              questa terra, dove il “Muristellu” ha sempre camminato “umpare”
              assieme al Cannonau.
            </Trans>
          </p>
          <p className="mt-4">
            <Trans>
              Infatti i due vitigni per questioni produttive vengono allevati
              nello stesso vigneto per avere una costanza produttiva. La
              percentuale tra i due vitigni varia in base all’annata.
            </Trans>
          </p>
          <div className="wine-page__columns">
            <div>
              <p>
                <Trans>
                  Vitigno:{" "}
                  <span className="text-gray-400">
                    Muristellu (Bovale Sardo) e vitigno autoctono a bacca rossa.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Tipologia di allevamento:
                  <span className="text-gray-400">
                    {" "}
                    Cordone speronato.
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
                  <span className="text-gray-400">55 quintali.</span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Vinificazione{" "}
                  <span className="text-gray-400">
                    raccolta manuale, in rosso con una macerazione sulle bucce
                    di circa sette giorni, lieviti indigeni, affinato in acciaio
                    e in bottiglia. Senza prodotti di sintesi, chiarifiche o
                    filtrazioni.
                  </span>
                </Trans>
              </p>
            </div>
            <div>
              <p>
                <Trans>
                  Colore:{" "}
                  <span className="text-gray-400">
                    rosso intenso con riflessi violacei.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Olfatto:{" "}
                  <span className="text-gray-400">
                    al naso spiccano sentori di frutti rossi uniti a delicate
                    note speziate e balsamiche.{" "}
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Gusto:{" "}
                  <span className="text-gray-400">
                    calda morbidezza che si equilibra con i suoi tannini giovani
                    ma eleganti. Finale lungo e appagante che rimanda in fase di
                    deglutizione ai riconoscimenti dell’olfatto.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Abbinamenti:{" "}
                  <span className="text-gray-400">
                    incontri conviviali pomeridiani con salumi e formaggi di
                    media stagionatura, zuppe di pesce e pesci grassi alla
                    brace, carni rosse, zuppe di legumi speziate.
                  </span>
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Familia;
