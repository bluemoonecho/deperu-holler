import React from "react";
import Header from "./Header";
import { Trans, t } from "@lingui/macro";
import territorioImage from "../assets/images/deperu_holler_il_territorio-1024x684.jpg";

const Territorio = () => (
  <div>
    <Header
      heading={t`TRA GALLURA ED ANGLONA`}
      classNames="text-white"
      image={territorioImage}
    />
    <div className="container flex text-center">
      <p className="font-bold italic">
        <Trans>Al mattino il vento è ancora assopito.</Trans>
      </p>
      <p className="font-bold italic">
        <Trans>
          Monte Ruiu si specchia nel lago Coghinas e si moltiplica, rosso,
          maestoso.
        </Trans>
      </p>
      <p className="font-bold italic">
        <Trans>
          Anche il cielo si concede due volte, su e giù, riflesso nelle acque.
        </Trans>
      </p>
      <p className="mt-8">
        <Trans>
          Siamo nel Nord Sardegna, tra le regioni storiche della Gallura e
          dell’Anglona, tra i Comuni di Bortigiadas e di Perfugas. I nostri
          vigneti si trovano a “Lu Scupaggiu” e sono caratterizzati da terre
          calcaree e da un clima mite per la vicinanza del mare e del lago
          Coghinas.
        </Trans>
      </p>
      <p className="mt-8">
        <Trans>
          È il luogo dove le montagne della Gallura perdono quota lasciando
          spazio alle vallate collinari dell’Anglona. I venti provenienti dal
          vicino mare si incanalano tra le insenature dei monti, creando un
          clima unico per la coltivazione della vite.
        </Trans>
      </p>
      <p className="mt-8">
        <Trans>
          Con una superficie aziendale di circa 6 ettari possiamo seguire
          personalmente tutte le fasi della filiera produttiva. Le alte densità
          di impianto (circa 6.000 piante per ettaro), le basse rese per ettaro
          (50 quintali) e le tipologie di allevamento, aiutano il vigneto a
          produrre uve di grande qualità.
        </Trans>
      </p>
      <p className="mt-8">
        <Trans>
          Ad ogni sorso che berrete verremo ripagati ed appagati, gioiremo
          assieme, accarezzati dal Maestrale, tra la vista del lago e gli echi
          del mare.
        </Trans>
      </p>
    </div>
  </div>
);
export default Territorio;
