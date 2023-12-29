import React from "react";
import "../styles/header.css"

const Header = ({heading, subHeading, image}) => (
  <div className="header" style={{ '--header-bg-image': `url(${image})` }}>
    <div className="header__content">
    <h1 className="text-4xl md:text-6xl text-center font-bold mt-36">{heading}</h1>
    <h2 className="text-2xl md:text-3xl text-center text-gray-400 mt-10 italic header__subheading">
      {subHeading}
    </h2>
    </div>
  </div>
);

export default Header;
