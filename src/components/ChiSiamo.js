import React from "react";
import Header from "./Header";
import { Trans } from "@lingui/macro";
import chiSiamo from "../assets/images/deperu_holler_chi_siamo-1024x768.jpg";
const ChiSiamo = () => (
  <div>
    <Header classNames="text-white mt-56" image={chiSiamo} />
    <div className="container flex text-center">
      <h2 className="font-bold text-2xl">
        <Trans>
          Siamo Carlo e Tatiana Deperu Holler, cresciamo con le nostre viti.
        </Trans>
      </h2>
      <h3 className="font-muli">
        <Trans>
          Lavoriamo rispettando la natura, le nostre viti e le persone. Guidiamo
          le viti con cura, preservando la loro identità, affrontando rischi e
          raccogliendo soddisfazioni uniche. Radici profonde, forgiati dal
          vento, cerchiamo il sole.
        </Trans>
      </h3>
      <div className="mt-5">
        <h3 className="font-bold font-muli">
          <Trans>CARLO DEPERU</Trans>
        </h3>
        <p>
          <Trans>
            Sardo, laureato all'Università degli Studi di Milano nella Facoltà
            di Scienze e Tecnologie Agrarie, nel corso di Viticoltura ed
            Enologia. Nella vita e con le vite non si smette mai di imparare;
            dopo aver accumulato diverse esperienze, è tornato a casa per "fare
            il suo". Nel 2007 ha impiantato i primi quattro ettari di vigna e
            quello che prima era un sogno è oggi molto lavoro e grande gioia. Si
            occupa personalmente della vigna e del lavoro in cantina.
          </Trans>
        </p>
      </div>
      <div className="mt-8">
        <h3 className="font-bold font-muli">
          <Trans>TATIANA HOLLER</Trans>
        </h3>
        <p>
          <Trans>
            Brasiliana di origine tedesca, laureata in Marketing e
            Comunicazione. Dopo aver completato gli studi in Brasile, parte per
            un anno sabbatico nel "vecchio mondo". Qui si innamora della nuova
            vita e conosce Carlo, lasciandosi contagiare dal suo amore per la
            Sardegna, per il cibo e per il vino. Insieme hanno deciso di mettere
            radici in questa terra unica. Tatiana gestisce le vendite,
            l’amministrazione e il marketing dell’azienda.
          </Trans>
        </p>
        <p className="mt-10">
          Eravamo barbatella,
          <br />
          Adesso siamo uva,
          <br />
          Siamo Vino
          <br />
          Ci coltiviamo in quest’isola,
          <br />
          Lontano da tutto,
          <br />
          avvicinandoci a noi stessi.
          <br />
          Guardando il lago,
          <br />
          le viti crescono,
          <br />
          la vita segue.
          <br />
          Dall’uva al vino c’è tanta strada
          <br />
          Più che del calice alla bocca.
          <br />
          Lavoro e sorpresa,
          <br />
          Apprendistato e divertimento
          <br />
          Vogliamo il brillo, la risata,
          <br />
          il conflitto, il piacere.
          <br />
          Vogliamo crescere,
          <br />
          intorno al tavolo
          <br />
          davantial calice,
          <br />
          nutrendo l’anima.
        </p>
      </div>
    </div>
  </div>
);

export default ChiSiamo;
