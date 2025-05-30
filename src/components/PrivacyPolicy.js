import React from "react";
import Header from "./Header";
import { Trans, t } from "@lingui/macro";
import filosofiaImage from "../assets/images/deperu_holler_il_nostro_lavoro-1024x683.jpg";
const PrivacyPolicy = () => (
  <div>
    <Header
      heading={t`Informativa sulla Privacy`}
      classNames="text-white"
      image={filosofiaImage}
    />
    <div className="container flex text-left">
      <p>
        <Trans>
          Questo sito web è gestito da Deperu Holler. Non raccogliamo dati
          personali, non utilizziamo cookie e non effettuiamo alcun tipo di
          tracciamento.
        </Trans>
      </p>
      <p className="mt-8">
        <Trans>
          L’hosting è fornito da Keliweb. I log del server possono raccogliere
          l’indirizzo IP e alcune informazioni tecniche del browser
          esclusivamente per fini di sicurezza e monitoraggio delle prestazioni.
        </Trans>
      </p>
      <p className="mt-8">
        <Trans>
          Per qualsiasi richiesta o per esercitare i tuoi diritti ai sensi del
          GDPR, contattaci via email: 
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:info@deperuholler.com"
              className="font-bold text-l underline"
            >
              {"  "}info@deperuholler.com
            </a>
        </Trans>
      </p>
    </div>
  </div>
);
export default PrivacyPolicy;
