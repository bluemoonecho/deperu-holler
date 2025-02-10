import React from "react";
// import FriaImage from "../assets/images/Still-FRIA_edit.png";
import "../styles/wine-page.css";
import Header from "./Header";
import Background from "../assets/images/fria_bg.jpg";
import { Trans } from "@lingui/macro";

const Fria = () => (
  <>
    <Header
      heading="BEIJO"
      image={Background}
      subHeading="BEVETE E AMATEVI"
      winePage
    />
    <div className="wine-page container">
      <div className="wine-page__area">
        {/* <img
          className="wine-page__bottle md:-mt-80"
          src={null}
          alt="prama-dorada-bottle"
        /> */}
        <div className="wine-page__content">
          <h2 className="font-bold text-2xl md:text-3xl mt-4">
            BEIJO<br /> VINO ROSSO
          </h2>
          <p className="mt-4">
            <Trans>
              Il nome "Beijo" significa "bacio", un gesto semplice ma ricco di
              emozione, così questo vino invita a celebrare l'amore e le
              connessioni umane.
            </Trans>
          </p>
          <p className="mt-4">
            <Trans>
              Beijo è un vino semplice, facile, ma pieno di sfumature e profumi
              che sfuggono all’identificazione delle singole uve. È composto di
              dieci varietà che crescono insieme nella stessa terra, creando
              un’armonia unica. Questa ricchezza di varietà riflette la
              biodiversità del territorio, dove le viti sono accompagnate da una
              miriade di erbe spontanee che prosperano nel nostro ambiente. Il
              risultato è un vino che racconta una storia, quella della terra in
              cui è nato, delle sue tradizioni e delle sue peculiarità.
            </Trans>
          </p>
          <div className="wine-page__columns">
            <div>
              <p>
                <Trans>
                  Vitigni:{" "}
                  <span className="text-gray-400">
                    Vitigni a bacca rossa e bianca.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Zona di produzione:{" "}
                  <span className="text-gray-400">
                    {" "}
                    Monte Finuiu (Perfugas-SS)
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
                  <span className="text-gray-400">50 quintali.</span>
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
                    Nello stesso giorno tutte le uve vengono raccolte
                    manualmente e pressate dopo una breve sosta sulle bucce di
                    qualche ora. Fermentazione indotta dalla aggiunta di bucce
                    di moscato e vermentino proveniente da altre vasche in piena
                    fermentazione. Affinato in acciaio viene imbottigliato senza
                    chiarifiche né filtrazioni.
                  </span>
                </Trans>
              </p>
            </div>
            <div>
              <p>
                <Trans>
                  Colore:{" "}
                  <span className="text-gray-400">Rosso rubino chiaro.</span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Olfatto:{" "}
                  <span className="text-gray-400">
                    Fragolina, essenze vegetali, viola.{" "}
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Gusto:{" "}
                  <span className="text-gray-400">
                    Piacevole acidità, secco, avvolgente.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Abbinamenti:{" "}
                  <span className="text-gray-400">
                    Fritturine da chiosco, gita in barca.
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
