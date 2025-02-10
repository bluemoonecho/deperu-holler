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
        <Trans>
          Al mattino, il vento è ancora assopito. Monte Ruiu si specchia nel
          lago Coghinas, moltiplicandosi in un rosso maestoso. Anche il cielo si
          concede due volte, su e giù, riflesso nelle acque.
        </Trans>
      </p>
      <p className="mt-8">
        <Trans>
          Siamo nel Nord Sardegna, tra le storiche regioni della Gallura e
          dell’Anglona, nei Comuni di Bortigiadas e Perfugas. I nostri vigneti
          si trovano a “Lu Scupaggiu” e sono caratterizzati da terre calcaree e
          da un clima mite, grazie alla vicinanza del mare e del lago Coghinas.
        </Trans>
      </p>
      <p className="mt-8">
        <Trans>
          È il luogo dove le montagne della Gallura perdono quota, lasciando
          spazio alle vallate collinari dell’Anglona. I venti provenienti dal
          vicino mare si incanalano tra le insenature dei monti, creando un
          clima unico per la coltivazione della vite. Con il nostro vino,
          cerchiamo di raccontare questa terra, dove i suoi figli portano un
          carattere duro, fiero e generoso. Qui, soffiano lingue sarde diverse,
          tra prati pascolati da mucche e pecore, boschi di sughero, reperti
          archeologici e fiumi di acqua calda.
        </Trans>
      </p>
      <p className="mt-8">
        <Trans>
          Ad ogni sorso che berrete, ci sentiremo ripagati e appagati; gioiremo
          assieme, accarezzati dal Maestrale, tra la vista del lago e gli echi
          del mare.
        </Trans>
      </p>
    </div>
  </div>
);
export default Territorio;
