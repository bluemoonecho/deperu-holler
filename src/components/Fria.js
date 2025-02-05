import React from "react";
import FriaImage from "../assets/images/Still-FRIA_edit.png";
import "../styles/wine-page.css";
import Header from "./Header";
import Background from "../assets/images/fria_bg.jpg";
import { Trans } from "@lingui/macro";

const Fria = () => (
  <>
    <Header
      heading="FRIA"
      image={Background}
      subHeading="SEMUS SU FRUTU DE SA CULTURA NOSTRA, DE SOS BALORES E DE SU BENTU."
      winePage
    />
    <div className="wine-page container">
      <div className="wine-page__area">
        <img
          className="wine-page__bottle md:-mt-80"
          src={FriaImage}
          alt="prama-dorada-bottle"
        />
        <div className="wine-page__content">
          <h2 className="font-bold text-2xl md:text-3xl mt-4">
            FRIA ISOLA DEI NURAGHI VERMENTINO IGT
          </h2>
          <p className="mt-4">
            <Trans>
              Con l'arrivo dell'estate, lavorare in vigna diventa piuttosto
              faticoso, con le temperature che si alzano già dal mattino. Ogni
              giorno, intorno alle undici, accade qualcosa di speciale: dal mare
              arriva una benedizione, un’aria fresca che rallegra noi e le
              piante.
            </Trans>
          </p>
          <p className="mt-4">
            <Trans>
              L'aria tersa e salmastra si posa delicatamente sui grappoli dorati
              del Vermentino. Questa sapidità si ritrova nel vino, evocando il
              vento e i percorsi che ha attraversato.
            </Trans>
          </p>
          <p className="mt-4">
            <Trans>
              Fria è un Vermentino puro e vero, capace di far emergere
              sensazioni rare in un'epoca in cui tutto può essere rimodellato.
            </Trans>
          </p>
          <p className="mt-4">
            <Trans>Conquista chi ama la semplicità e l'autenticità.</Trans>
          </p>
          <h3 className="font-bold text-xl md:text-1xl mt-8">
            <Trans>FRIA ISOLA DEI NURAGHI VERMENTINO IGT</Trans>
          </h3>
          <div className="wine-page__columns">
            <div>
              <p>
                <Trans>
                  Vitigno:{" "}
                  <span className="text-gray-400">Vermentino 100%</span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Zona di produzione:{" "}
                  <span className="text-gray-400">
                    {" "}
                    Scupaggiu (Bortigiadas)
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Tipologia di terreno:
                  <span className="text-gray-400">
                    {" "}
                    Calcareo, argilloso. disfacimento granitico. scisti
                  </span>{" "}
                </Trans>
              </p>
              <p>
                <Trans>
                  Tipologia di allevamento:
                  <span className="text-gray-400"> Guyot.</span>{" "}
                </Trans>
              </p>
              <p>
                <Trans>
                  Densità di impianto:{" "}
                  <span className="text-gray-400">
                    5.600 piante per ettaro.
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
                  Trattamenti:{" "}
                  <span className="text-gray-400">
                    Rame, zolfo e preparati biologici
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Vinificazione:{" "}
                  <span className="text-gray-400">
                    Raccolta manuale. macerazione di due o tre giorni sulle
                    bucce, fermentazione spontanea, pressatura soffice. Affinato
                    in acciaio. Il vino viene imbottigliato senza chiarifiche né
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
                    {" "}
                    Giallo paglierino tendente al dorato.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Olfatto:{" "}
                  <span className="text-gray-400">
                    Ampio con note di frutta a polpa bianca, note resinose.{" "}
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Gusto:{" "}
                  <span className="text-gray-400">
                    Fresco e sapido, di buona struttura. Un autentico Vermentino
                    che regala un bel finale mandorlato.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Abbinamenti:{" "}
                  <span className="text-gray-400">
                    Ideale con antipasti di mare, minestroni estivi e grigliate
                    di pesce. Tuttavia, il suo posto preferito è senza dubbio
                    sotto l’ombrellone, in riva al mare.
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

export default Fria;
