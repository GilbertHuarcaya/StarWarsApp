import React from "react";
import { useSelector } from "react-redux";
import { Store } from "../../config/interfaces/store/types";
import Search from "./Search";
import Title from "./Title";

const Navbar = () => {
  const currentTitle = useSelector((store: Store) => store.app.currentTitle);
  return (
    <header>
      <h1>Logo</h1>
      {currentTitle && <Title title={currentTitle} />}
      <Search />
    </header>
  );
};

export default Navbar;
