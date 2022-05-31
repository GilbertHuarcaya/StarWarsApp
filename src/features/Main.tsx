import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Search from "../components/layout/Search";
import People from "../components/people/People";
import Planets from "../components/planets/Planets";
import Starships from "../components/starships/Starship";
import NotFound from "./NotFound";

const Main = () => (
  <>
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/people" element={<People />} />
      <Route path="/starships" element={<Starships />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Outlet />
  </>
);

export default Main;
