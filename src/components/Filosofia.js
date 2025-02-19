import React from "react";
import Header from "./Header";
import { Trans, t } from "@lingui/macro";
import filosofiaImage from "../assets/images/deperu_holler_il_nostro_lavoro-1024x683.jpg";
const Filosofia = () => (
  <div>
    <Header
      heading={t`CRESCERE CON LE NOSTRE VITI`}
      classNames="text-white"
      image={filosofiaImage}
    />
    <div className="container flex text-left">
      <p className="font-bold italic">
        <Trans>
          Per noi, uno dei gesti più belli e profondi dell’essere umano è
          coltivare, lavorare con la natura e permettere che essa ci ripaghi con
          generosità.
        </Trans>
      </p>
      <p className="mt-8">
        <Trans>
          Con una superficie aziendale di circa 6 ettari, possiamo seguire
          personalmente tutte le fasi della filiera produttiva. Il clima
          ventilato ci consente di ridurre al minimo i trattamenti
          antiparassitari, mentre le alte densità di impianto e le basse rese
          per ettaro aiutano le piante a produrre uva di grande qualità.
        </Trans>
      </p>
      <p className="mt-8">
        <Trans>
          Per comprendere le reali necessità del terreno e delle piante,
          osserviamo attentamente il manto erboso, ricco di flora spontanea, e
          alterniamo concimazioni con letame maturo e compost organico a
          inerbimenti selezionati, basati su leguminose e graminacee. Grazie
          alla passione e al lavoro svolto in modo naturale, sosteniamo il
          terreno e le piante nel dare il meglio di sé, senza logorarle,
          rispettando i tempi, le persone e l’ambiente.
        </Trans>
      </p>
      <p className="mt-8">
        <Trans>
          Il nostro vino nasce principalmente in vigna, ma anche il lavoro
          dell’uomo in cantina gioca un ruolo fondamentale. La nostra
          esperienza, accumulata attraverso la produzione e il consumo di
          numerosi vini, ci offre una base preziosa per interpretare ogni
          annata. L’osservazione del colore, del gusto e del profumo del mosto
          in fermentazione ci fa sognare sulle potenzialità dei vini.
          Utilizziamo la fermentazione spontanea delle nostre uve, seguendo
          attentamente il suo percorso attraverso studi e analisi. Effettuiamo
          diverse vinificazioni per trovare l’equilibrio e il carattere perfetti
          per ogni blend. Il risultato finale è il frutto della sinergia tra la
          natura e l’uomo, che collaborano insieme dalla vite al vino.
        </Trans>
      </p>
    </div>
  </div>
);
export default Filosofia;
