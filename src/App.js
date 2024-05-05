import React from "react";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./styles/menu.css";
import "./styles/logo.css";
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
import ChiSiamo from "./components/ChiSiamo";
import Filosofia from "./components/Filosofia";
import Territorio from "./components/Territorio";
import Vini from "./components/Vini";
import Logo from "./components/Logo";

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
      <Logo />
      <div className={`main-content ${isMenuOpen ? "shifted" : ""}`} onClick={closeMenu}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prama-dorada" element={<PramaDorada />} />
          <Route path="/oberaia" element={<Oberaia />} />
          <Route path="/familia" element={<Familia />} />
          <Route path="/fria" element={<Fria />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/filosofia-e-pratica" element={<Filosofia />} />
          <Route path="/il-territorio" element={<Territorio />} />
          <Route path="/i-nostri-vini" element={<Vini />} />
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
