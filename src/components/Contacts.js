import React from "react";
import Header from "./Header";
import "../styles/contacts.css";
import { t } from "@lingui/macro";

const Contacts = () => (
  <div className="contacts">
    <Header classNames="mt-56" heading={t`CONTATTI`} />
    <div className="container flex text-center !-mt-10">
      <div>
        <p className="font-bold">AZIENDA VITIVINICOLA</p>
        <p className="font-bold mb-8">DEPERU HOLLER</p>

        <p>Via Mazzini 80</p>
        <p>07034 Perfugas - SS</p>
        <p>SARDEGNA – ITALIA</p>
        <p className="mb-8">P.IVA 02183250907</p>

        <p>E-Mail: </p>
        <a
          href="mailto:info@deperuholler.com"
          className="font-bold text-l underline"
        >
          info@deperuholler.com
        </a>

        <p className="mt-8">CARLO DEPERU</p>
        <p>cel. +39 339 609 783</p>

        <p className="mt-8">TATIANA HOLLER</p>
        <p>cel. +39 333 295 7208</p>
      </div>
    </div>
  </div>
);

export default Contacts;
