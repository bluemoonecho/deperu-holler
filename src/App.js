import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"
import "./styles/menu.css";
import PramaDorada from "./components/PramaDorada";
import "./styles/container.css"
import Oberaia from "./components/Oberaia";
import Familia from "./components/Familia";
import Fria from "./components/Fria";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/prama-dorada" exact element={<PramaDorada/>} />
            <Route path="/oberaia" exact element={<Oberaia/>} />
            <Route path="/familia" exact element={<Familia/>} />
            <Route path="/fria" exact element={<Fria/>} />
          </Routes>  
        <Footer/>
    </BrowserRouter>
  );
};
export default AppRouter;

