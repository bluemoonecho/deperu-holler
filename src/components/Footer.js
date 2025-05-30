import React from "react";
import "../styles/footer.css";
import { Link, useParams } from "react-router-dom";

const Footer = () => {
      const { lang } = useParams();
  return (
    <div className="footer">
      <p>Deperu Holler Copyright © 2025 — P.IVA 02183250907</p>
       <Link to={`/${lang}/privacy-policy`}>Privacy</Link> |
      <Link to={`/${lang}/cookie-policy`}>Cookie</Link>
    </div>
  );
};

export default Footer;
