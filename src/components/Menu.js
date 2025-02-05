import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/menu.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Trans } from "@lingui/macro";
import LanguageSwitcher from "./LanguageSwitcher"

function Menu({ isMenuOpen, setIsMenuOpen }) {
  const { lang } = useParams();
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  useEffect(() => {
    let timer;
    if (isMenuOpen) {
      setShowCloseIcon(true);
    } else {
      timer = setTimeout(() => {
        setShowCloseIcon(false);
      }, 300);
    }
    return () => clearTimeout(timer);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  const closeMenu = () => {
    setIsMenuOpen(false)
  };

  return (
    <div className={`menu ${isMenuOpen ? "show" : ""}`}>
      <div>
        {showCloseIcon ? (
          <div className="flex justify-between align-center px-5 mt-6">
            <h4 className="font-bold mt-4">MENU</h4>
            <button className="menu__close-button" onClick={closeMenu}>
              <FaTimes />
            </button>
          </div>
        ) : (
          <button className="menu__open-button" onClick={toggleMenu}>
            <FaBars />
          </button>
        )}
      </div>
      <ul className="pl-5">
        <li>
          <Link to="/" onClick={closeMenu}>
            <Trans>Home</Trans>
          </Link>
        </li>
        <li>
          <Link to={`/${lang}/chi-siamo`} onClick={closeMenu}>
            <Trans>Chi siamo</Trans>
          </Link>
        </li>
        <li>
          <Link to={`/${lang}/filosofia-e-pratica`} onClick={closeMenu}>
            <Trans>Filosofia e pratica</Trans>
          </Link>
        </li>
        <li>
          <Link to={`/${lang}/il-territorio`} onClick={closeMenu}>
            <Trans>Il teritorio</Trans>
          </Link>
        </li>
        <li>
          <Link to={`/${lang}/i-nostri-vini`} onClick={closeMenu}>
            <Trans>I nostri vini</Trans>
          </Link>
        </li>
        <li className="ml-4">
          <Link to={`/${lang}/fria`} onClick={closeMenu}>
            <Trans>Fria</Trans>
          </Link>
        </li>
        <li className="ml-4">
          <Link to={`/${lang}/familia`} onClick={closeMenu}>
            <Trans>Familia</Trans>
          </Link>
        </li>
        <li className="ml-4">
          <Link to={`/${lang}/oberaia`} onClick={closeMenu}>
            <Trans>Oberaìa</Trans>
          </Link>
        </li>
        <li className="ml-4">
          <Link to={`/${lang}/prama-dorada`} onClick={closeMenu}>
            <Trans>Prama Dorada</Trans>
          </Link>
        </li>
        <li className="ml-4">
          <Link to={`/${lang}/maria-tzufia`} onClick={closeMenu}>
            <Trans>Maria Tzufia</Trans>
          </Link>
        </li>
        <li>
          <Link to={`/${lang}/gallery`} onClick={closeMenu}>
            <Trans>Gallery</Trans>
          </Link>
        </li>
        <li>
          <Link to={`/${lang}/contatti`} onClick={closeMenu}>
            <Trans>Contatti</Trans>
          </Link>
        </li>
      </ul>
      <LanguageSwitcher />
    </div>
  );
}

export default Menu;
