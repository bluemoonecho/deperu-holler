import React from "react";
import MariaImage from "../assets/bottles/maria.png";
import "../styles/wine-page.css";
import Header from "./Header";
import Background from "../assets/images/fria_bg.jpg";
import { Trans } from "@lingui/macro";

const Fria = () => (
  <>
    <Header
      heading="MARIA TZUFIA"
      image={Background}
      subHeading="FIORE LANCIATO NEL VENTO"
      winePage
    />
    <div className="wine-page container">
      <div className="wine-page__area">
        <img
          className="wine-page__bottle md:-mt-80"
          src={MariaImage}
          alt="maria-tzufia-bottle"
        />
        <div className="wine-page__content">
          <h2 className="font-bold text-2xl md:text-3xl mt-4">
            MARIA TZUFIA<br /> ISOLA DEI NURAGHI IGT
          </h2>
          <p className="mt-4">
            <Trans>
              In Sardegna, quando una bambina è spettinata o in disordine, si
              dice che "sembra una Maria Tzufia". Nei racconti popolari, Maria
              Tzufia è rappresentata come una giovane che vive in un contesto
              rurale, caratterizzata da una vita semplice e genuina, ma anche da
              una certa incoscienza riguardo al suo aspetto esteriore.
            </Trans>
          </p>
          <p className="mt-4">
            <Trans>
              Il nostro vino, Maria Tzufia, racchiude il profumo del Moscato e
              la freschezza del Vermentino. Nella sua prima annata, si
              presentava in modo "spettinato", con una leggera torbidità, da cui
              abbiamo tratto ispirazione per il suo nome. Questo vino ci ricorda
              le meraviglie semplici e uniche della natura, che seguono il
              proprio ordine. Oggi, Maria Tzufia si è evoluto: da bambina
              spettinata è diventato un vino raffinato e sorprendente . Non è
              dolce, ma nel suo cuore sprigiona la gioia della primavera in
              arrivo, è un vino secco, che regala una freschezza e una mineralità inaspettate.
            </Trans>
          </p>
          <div className="wine-page__columns">
            <div>
              <p>
                <Trans>
                  Vitigni:{" "}
                  <span className="text-gray-400">
                    95% Moscato giallo, 5% Vermentino
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Zona di produzione:{" "}
                  <span className="text-gray-400">
                    {" "}
                    Monte Finuiu e Sessana (Perfugas)
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Tipologia di terreno:
                  <span className="text-gray-400">
                    {" "}
                    Calcareo, argilloso.
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
                    4.400 piante per ettaro.
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
                    La raccolta avviene manualmente. Le due varietà di uve
                    vengono macerate separatamente: quella del Vermentino per un
                    periodo più breve, mentre il Moscato resta a contatto con le
                    bucce più a lungo per estrarre tutto il suo profumo e il suo
                    colore. Successivamente, i mosti vengono assemblati per
                    raggiungere un equilibrio tra mineralità, freschezza e
                    corpo. La pressatura è soffice e la fermentazione è
                    spontanea. Il vino viene imbottigliato senza chiarifiche né
                    filtrazioni.
                  </span>
                </Trans>
              </p>
            </div>
            <div>
              <p>
                <Trans>
                  Colore: <span className="text-gray-400"> Giallo dorato.</span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Olfatto:{" "}
                  <span className="text-gray-400">
                    Ampio, con note di frutta a polpa bianca e agrumi, fiori
                    d'arancio e crema pasticcera.{" "}
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Gusto:{" "}
                  <span className="text-gray-400">
                    Secco, fresco e sapido, di buona struttura, con un finale
                    mandorlato.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Abbinamenti:{" "}
                  <span className="text-gray-400">
                    Ideale per aperitivi, risotti con crostacei, zuppe e piatti
                    con spezie esotiche.
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
