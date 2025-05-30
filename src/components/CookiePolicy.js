import React from "react";
import Header from "./Header";
import { Trans, t } from "@lingui/macro";
import filosofiaImage from "../assets/images/deperu_holler_il_nostro_lavoro-1024x683.jpg";
const CookiePolicy = () => (
  <div>
    <Header
      heading={t`Informativa sui Cookie`}
      classNames="text-white"
      image={filosofiaImage}
    />
    <div className="container flex text-left">
      <p>
        <Trans>
          Questo sito <strong>non utilizza cookie di profilazione</strong>, né
          altri strumenti di tracciamento.
        </Trans>
      </p>
      <p className="mt-8">
        <Trans>
          Solo i log tecnici raccolti dal provider di hosting (Keliweb) possono
          essere registrati per motivi di sicurezza e manutenzione del sistema.
        </Trans>
      </p>
      <p className="mt-8">
        <Trans>
          In base alle Linee Guida del Garante della Privacy italiano, questo
          sito è esente dall’obbligo di banner per i cookie.
        </Trans>
      </p>
    </div>
  </div>
);
export default CookiePolicy;
