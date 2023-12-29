import React from "react";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./styles/menu.css";
import PramaDorada from "./components/PramaDorada";
import "./styles/container.css";
import Oberaia from "./components/Oberaia";
import Familia from "./components/Familia";
import Fria from "./components/Fria";

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

const LanguageWrapper = () => {
  const { lang } = useParams();

  if (!supportedLocales.includes(lang)) {
    return <Navigate to={`/${defaultLocale}`} replace />;
  }

  i18n.activate(lang);

  return (
    <I18nProvider i18n={i18n}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prama-dorada" element={<PramaDorada />} />
        <Route path="/oberaia" element={<Oberaia />} />
        <Route path="/familia" element={<Familia />} />
        <Route path="/fria" element={<Fria />} />
      </Routes>
      <Footer />
    </I18nProvider>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:lang/*" element={<LanguageWrapper />} />
        <Route
          path="*"
          element={<Navigate to={`/${defaultLocale}`} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
