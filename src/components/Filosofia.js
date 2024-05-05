import React from "react";
import Header from "./Header";
import { Trans, t } from "@lingui/macro";
import filosofiaImage from "../assets/images/deperu_holler_il_nostro_lavoro-1024x683.jpg";
const Filosofia = () => (
  <div>
    <Header
      heading={t`…CRESCERE CON LE NOSTRE VITI.`}
      classNames="text-white"
      image={filosofiaImage}
    />
    <div className="container flex text-center">
      <p className="font-bold italic">
        <Trans>
          Per noi uno dei gesti più belli e profondi dell’uomo è coltivare,
          lavorare con la natura e lasciare che essa ci ripaghi con generosità.
        </Trans>
      </p>
      <p className="mt-8">
        <Trans>Per questo abbiamo scelto di lavorarla con rispetto.
          Aiutiamo la terra e le piante a dare il meglio senza logorarle.
          Con una superficie aziendale di circa 6 ettari possiamo seguire
          personalmente tutte le fasi della filiera produttiva. Le alte densità
          di impianto (circa 6.000 piante per ettaro), le basse rese per ettaro
          (50 quintali) e le tipologie di allevamento, aiutano il vigneto a
          produrre uve di grande qualità.
        </Trans>
      </p>
      <p className="mt-8">
        <Trans>
          Per ora abbiamo scelto di non avere certificazioni, ma il nostro
          lavoro è profondamente naturale e biologico col massimo rispetto delle
          piante, dell’ambiente e della persona.
        </Trans>
      </p>
      <p className="mt-8">
        <Trans>
          Utilizziamo l’irrigazione solo se strettamente necessaria, non usiamo
          erbicidi né concimi di origine inorganica. Valorizziamo l’utilizzo di
          tecniche alternative come l’inerbimento temporaneo con leguminose e
          così facendo diamo priorità alle reali necessità delle piante.
          Il vento della nostra isola che abbonda nella nostra vigna rende il
          clima asciutto e ci aiuta a ridurre al minimo i trattamenti
          antiparassitari.
        </Trans>
      </p>
      <p className="mt-8">
        <Trans>
          Il nostro vino viene fatto soprattutto in vigna, ma è quando l’uva
          arriva in cantina e la trasformazione ha inizio che la fantasia e
          l’esperienza iniziano a divinare cosa diventerà, guardando il colore,
          gustando la dolcezza e inebriandosi con il profumo del mosto in
          fermentazione. Il risultato sarà merito della natura e dell’uomo che
          vigila questa magica trasformazione cercando di interferire il meno
          possibile nel naturale cammino dell’uva in vino.
        </Trans>
      </p>
    </div>
  </div>
);
export default Filosofia;
