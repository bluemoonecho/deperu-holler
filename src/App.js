import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import PramaDorada from "./components/PramaDorada";
import Oberaia from "./components/Oberaia";
import Familia from "./components/Familia";
import Fria from "./components/Fria";
import MariaTzufia from "./components/MariaTzufia";
import TempoRei from "./components/TempoRei";
import Beijo from "./components/Beijo";
import ChiSiamo from "./components/ChiSiamo";
import Filosofia from "./components/Filosofia";
import Territorio from "./components/Territorio";
import Contacts from "./components/Contacts";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookiePolicy from "./components/CookiePolicy";
import Vini from "./components/Vini";
import Logo from "./components/Logo";
import ScrollToTop from "./components/ScrollToTop"; // <-- Import here
import CookieBanner from "./components/CookieBanner";

import "./styles/menu.css";
import "./styles/logo.css";
import "./styles/container.css";

import { messages as enMessages } from "./locales/en/messages";
import { messages as itMessages } from "./locales/it/messages";
import { messages as srdMessages } from "./locales/srd/messages";

const supportedLocales = ["en", "it", "srd"];
const defaultLocale = "it";

// Load messages for each locale
i18n.load("en", enMessages);
i18n.load("it", itMessages);
i18n.load("srd", srdMessages);

const AppWrapper = ({ isMenuOpen, setIsMenuOpen }) => {
  const { lang } = useParams();

  // If the URL does not contain a supported locale, try using the one stored in localStorage.
  if (!supportedLocales.includes(lang)) {
    const savedLang = localStorage.getItem("selectedLang") || defaultLocale;
    return <Navigate to={`/${savedLang}`} replace />;
  }

  // Activate the language and persist it
  i18n.activate(lang);
  localStorage.setItem("selectedLang", lang);

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <I18nProvider i18n={i18n}>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Logo />
      <div
        className={`main-content ${isMenuOpen ? "shifted" : ""}`}
        onClick={closeMenu}
      >
        <Routes>
          {/* All paths here are relative to the /:lang prefix */}
          <Route path="/" element={<Home />} />
          <Route path="prama-dorada" element={<PramaDorada />} />
          <Route path="oberaia" element={<Oberaia />} />
          <Route path="familia" element={<Familia />} />
          <Route path="fria" element={<Fria />} />
          <Route path="maria-tzufia" element={<MariaTzufia />} />
          <Route path="beijo" element={<Beijo />} />
          <Route path="tempo-rei" element={<TempoRei />} />
          <Route path="chi-siamo" element={<ChiSiamo />} />
          <Route path="filosofia-e-pratica" element={<Filosofia />} />
          <Route path="il-territorio" element={<Territorio />} />
          <Route path="i-nostri-vini" element={<Vini />} />
          <Route path="contatti" element={<Contacts />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </div>
      <Footer />
    </I18nProvider>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* Cookie Consent Banner */}
      <CookieBanner />
      <ScrollToTop />
      <Routes>
        <Route
          path="/:lang/*"
          element={
            <AppWrapper isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          }
        />
        {/* If the URL does not match, redirect to the saved language or default */}
        <Route
          path="*"
          element={
            <Navigate
              to={`/${localStorage.getItem("selectedLang") || defaultLocale}`}
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
