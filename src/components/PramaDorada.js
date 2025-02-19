import React from "react";
import PramaDoradaImage from "../assets/bottles/prama.png";
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
            PRAMA DORADA<br /> ISOLA DEI NURAGHI IGT BIANCO
          </h2>
          <p className="mt-4">
            <Trans>
              Prama Dorada è un omaggio alla tradizione dei vini bianchi di un
              tempo, quando nei vigneti si mescolavano varietà innestate con
              marze selezionate, dando vita a vini unici e irripetibili. Questo
              vino è un’armonia delle varietà autoctone sarde che amiamo di più,
              creando una mescita ricca, elegante e, soprattutto, inimitabile.
            </Trans>
          </p>
          <div className="wine-page__columns">
            <div>
              <p>
                <Trans>
                  Vitigni:{" "}
                  <span className="text-gray-400">
                    Vermentino, Moscato e Malvasia.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Zona di produzione:
                  <span className="text-gray-400">
                    Sessana e Monte Finuiu (Perfugas).
                  </span>{" "}
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
                  <span className="text-gray-400">Guyot.</span>
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
                  <span className="text-gray-400">40/50 quintali.</span>
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
                    La raccolta avviene manualmente, seguita da una delicata
                    pressatura a piedi nudi e da una macerazione di almeno sette
                    giorni sulle bucce. Prepariamo un pied de cuve una settimana
                    prima della vendemmia, che viene inoculato il giorno della
                    raccolta. La fermentazione dura circa 10 giorni, seguita
                    dalla fermentazione malo lattica in botti di acacia, dove il
                    vino riposa per un anno intero. Il vino viene imbottigliato
                    senza chiarifiche né filtrazioni.
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
                    Giallo intenso con lucide sfumature di topazio.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Olfatto:{" "}
                  <span className="text-gray-400">
                    I profumi si evolvono e si rivelano durante la degustazione,
                    con delicate note resinose e di miele che si intrecciano in
                    un bouquet di grande finezza.{" "}
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Gusto:{" "}
                  <span className="text-gray-400">
                    Avvolgente, morbido e caldo, bilanciato da una piacevole
                    sapidità. Presenta una buona struttura e una complessità
                    notevole, lasciando un leggero retrogusto di mandorla e
                    crema pasticcera all’arancia.
                  </span>
                </Trans>
              </p>
              <p>
                <Trans>
                  Abbinamenti:{" "}
                  <span className="text-gray-400">
                    Con quello che ti ispira o che hai a portata di mano. Noi lo
                    gustiamo con un po’ di tutto, soprattutto con piatti
                    speziati della cucina internazionale. lo amiamo in compagnia
                    di una Moqueca de peixe.
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
