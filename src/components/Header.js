import React from "react";
import clsx from "clsx";

import "../styles/header.css";
const Header = ({ heading, subHeading, image, classNames, winePage }) => {
  return (
    <div
      className={clsx("header", winePage && "header__wine-page")}
      style={{ "--header-bg-image": `url(${image})` }}
    >
      <div className="header__content">
        <h1
          className={clsx(
            "text-center font-bold mt-36 text-4xl md:text-6xl",
            classNames
          )}
        >
          {heading}
        </h1>
        <h2 className="text-2xl md:text-3xl text-center text-gray-400 mt-10 italic header__subheading">
          {subHeading}
        </h2>
      </div>
    </div>
  );
};

export default Header;
