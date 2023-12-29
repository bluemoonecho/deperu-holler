import React from "react";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./styles/menu.css";
import PramaDorada from "./components/PramaDorada";
import "./styles/container.css";
import Oberaia from "./components/Oberaia";
import Familia from "./components/Familia";
import Fria from "./components/Fria";
import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { messages as enMessages } from "./locales/en/messages";
import { messages as itMessages } from "./locales/it/messages";
import { messages as srdMessages } from "./locales/srd/messages";

const supportedLocales = ["en", "it", "srd"];
const defaultLocale = "it";

i18n.load("en", enMessages);
i18n.load("it", itMessages);
i18n.load("srd", srdMessages);

const AppWrapper = ({ isMenuOpen, setIsMenuOpen }) => {
  const { lang } = useParams();

  if (!supportedLocales.includes(lang)) {
    return <Navigate to={`/${defaultLocale}`} replace />;
  }

  i18n.activate(lang);

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }

  return (
    <I18nProvider i18n={i18n}>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className={`main-content ${isMenuOpen ? "shifted" : ""}`} onClick={closeMenu}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prama-dorada" element={<PramaDorada />} />
          <Route path="/oberaia" element={<Oberaia />} />
          <Route path="/familia" element={<Familia />} />
          <Route path="/fria" element={<Fria />} />
        </Routes>
        <Footer />
      </div>
    </I18nProvider>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/:lang/*"
          element={
            <AppWrapper
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          }
        />
        <Route
          path="*"
          element={<Navigate to={`/${defaultLocale}`} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
