import React from "react";
import FamiliaImage from "../assets/bottles/familia.png";
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
            FAMILIA<br />ISOLA DEI NURAGHI IGT
          </h2>
          <p className="mt-4">
            <Trans>
              Familia è il vino da condividere, da gustare mentre si mangia e si
              ride. È rustico, ma con un’anima fine, generoso nei suoi sentori e
              fiero rappresentante di questa terra.
            </Trans>
          </p>
          <p className="mt-4">
            <Trans>
              Questo vino nasce dall’unione di tre vitigni rossi sardi,
              storicamente coltivati insieme per garantire una costanza
              produttiva. In passato, il vino era considerato un alimento
              essenziale. Le percentuali dei vitigni variano di anno in anno,
              poiché non esiste un protocollo fisso: il blend è creato cercando
              l’equilibrio perfetto tra freschezza, robustezza ed eleganza.
            </Trans>
          </p>
          <div className="wine-page__columns">
            <div>
              <p>
                <Trans>
                  Vitigni:{" "}
                  <span className="text-gray-400">
                    Muristellu (Bovale Sardo), Caricajola e Cannonau.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Zona di produzione:{" "}
                  <span className="text-gray-400">
                    {" "}
                    Scupaggiu (Bortigiadas) e Monte Finuiu (Perfugas).
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Tipologia di terreno:{" "}
                  <span className="text-gray-400">Calcareo argilloso.</span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Tipologia di allevamento:{" "}
                  <span className="text-gray-400">
                    Guyot, alberello e cordone speronato.
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
                    sulle bucce di circa sette giorni. La fermentazione è
                    spontanea, l’affinamento avviene in acciaio e legno. Il vino
                    viene imbottigliato senza chiarifiche né filtrazioni, per
                    preservarne l’autenticità.
                  </span>
                </Trans>
              </p>
            </div>
            <div>
              <p>
                <Trans>
                  Colore:{" "}
                  <span className="text-gray-400">
                    Rosso intenso con riflessi violacei.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Olfatto:{" "}
                  <span className="text-gray-400">
                    Al naso si percepiscono sentori di frutti rossi,
                    accompagnati da delicate note speziate e balsamiche.{" "}
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Gusto:{" "}
                  <span className="text-gray-400">
                    Caldo e corposo, con tannini giovani ed eleganti, di buona
                    acidità. Il finale è lungo e appagante, con richiami ai
                    profumi percepiti al naso.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Abbinamenti:{" "}
                  <span className="text-gray-400">
                    Perfetto con salumi e formaggi, pesci grassi alla brace,
                    carni rosse, zuppe di legumi alla sarda. Ideale per un
                    ispuntinu.
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
