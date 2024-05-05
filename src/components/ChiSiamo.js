import React from "react";
import Header from "./Header";
import { Trans, t } from "@lingui/macro";
import chiSiamo from "../assets/images/deperu_holler_chi_siamo-1024x768.jpg";
const ChiSiamo = () => (
  <div>
    <Header
      classNames="text-white mt-56"
      heading={t`SIAMO FIGLI DEL VENTO`}
      image={chiSiamo}
    />
    <div className="container flex text-center">
      <h2 className="font-bold text-2xl">
        <Trans>SIAMO FIGLI DELLA NOSTRA CULTURA, DEI NOSTRI VALORI.</Trans>
      </h2>
      <h2 className="font-bold text-2xl">
        <Trans>SIAMO FIGLI DEL VENTO.</Trans>
      </h2>
      <div className="mt-5">
        <h3 className="font-bold font-muli">
          <Trans>CARLO DEPERU</Trans>
        </h3>
        <p>
          <Trans>
            Sono Carlo Deperu, sardo, viticoltore ed enologo. Mi sono laureato
            all’Università degli studi di Milano nella Facoltà di Scienze e
            Tecnologie Agrarie nel corso di Viticoltura ed Enologia. Nella vita
            e con le vite (scusate il gioco di parole) non si smette mai di
            imparare, dopo aver fatto diverse esperienze ed approfondito le
            conoscenze accademiche in tante aziende qualcosa mi mancava: tornare
            a casa e “fare il mio”. Nel 2007 ho impiantato i primi quattro
            ettari di vigna e quello che prima era un sogno oggi è diventato
            tanto lavoro e tanta gioia. Curo in prima persona la vigna e il
            lavoro di cantina, nel tempo libero mi dedico alla musica, l’altra
            mia grande passione.
          </Trans>
        </p>
      </div>
      <div className="mt-8">
        <h3 className="font-bold font-muli">
          <Trans>TATIANA HOLLER</Trans>
        </h3>
        <p>
          <Trans>
            Sono Tatiana Holler, brasiliana di origine tedesca, viaggiatrice,
            laureata in Marketing e Comunicazione all’Università ESPM di San
            Paolo-Brasile. Ho conosciuto Carlo a Milano, dove lavoravo nel
            settore pubblicitario. Mi sono lasciata contagiare dal suo amore per
            la Sardegna, per il cibo e per il vino. Insieme abbiamo deciso di
            mettere radici in questa terra unica. Gestisco la parte
            amministrativa e il marketing aziendale.
          </Trans>
        </p>
        <p className="mt-10">
          <Trans>
            In un mondo globalizzato in cui la vita è frenetica, abbiamo
            ritagliato un piccolo angolo di paradiso e qui cerchiamo di fare al
            meglio ciò che amiamo.
          </Trans>
        </p>
      </div>
    </div>
  </div>
);

export default ChiSiamo;
