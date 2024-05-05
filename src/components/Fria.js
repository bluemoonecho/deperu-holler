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
            FRIA VERMENTINO DI SARDEGNA DOC
          </h2>
          <p className="mt-4">
            <Trans>
              Quando arriva l’estate lavorare in vigna è piuttosto faticoso e le
              temperature sono alte già dal mattino. Tutti i giorni, verso le
              undici, succede qualcosa di speciale: dal mare arriva una
              benedizione, un’aria fresca che rallegra noi e le piante.
            </Trans>
          </p>
          <p className="mt-4">
            <Trans>
              L’aria tersa di sale si posa sui grappoli dorati del Vermentino.
              Questa sapidità si ritrova nel vino, ci ricorda il vento e tutte
              le strade che percorre. Fria è un Vermentino puro e vero. Fa
              emergere sensazioni ormai rare in un tempo dove tutto può essere
              rimodellato.
            </Trans>
          </p>
          <p className="mt-4">
            <Trans>
              Conquista gli amanti della semplicità e della autenticità.
            </Trans>
          </p>
          <h3 className="font-bold text-xl md:text-1xl mt-8">
            <Trans>Vermentino di Sardegna DOC</Trans>
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
                  Tipologia di allevamento:
                  <span className="text-gray-400"> Guyot.</span>{" "}
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
                  Vinificazione:{" "}
                  <span className="text-gray-400">
                    macerazione di ventiquattro ore sulle bucce, pressatura
                    soffice, pied de cuve con lieviti indigeni. Senza prodotti
                    di sintesi, chiarifiche o filtrazioni.
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
                    giallo paglierino tendente al dorato.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Olfatto:{" "}
                  <span className="text-gray-400">
                    ampio con note di frutta a polpa bianca.{" "}
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Gusto:{" "}
                  <span className="text-gray-400">
                    caldo, fresco e sapido, di buona struttura. Un autentico
                    Vermentino che regala una bella sapidità e un finale
                    mandorlato.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Abbinamenti:{" "}
                  <span className="text-gray-400">
                    antipasti di frutti di mare, risotti con crostacei,
                    minestroni estivi, grigliate di pesce e aperitivi in riva al
                    mare.
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
