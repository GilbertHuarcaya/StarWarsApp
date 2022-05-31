import React from "react";
import { useLocation } from "react-router-dom";
import Search from "./Search";
import StarWarsLogo from "../../images/Star_Wars_Logo.svg";

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="header">
      <img src={StarWarsLogo} alt="star-wars-logo" className="header__logo" />
      {location.pathname !== "/" && <Search />}
    </header>
  );
};

export default Navbar;
