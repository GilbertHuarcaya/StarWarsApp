import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../main";
import {
  getPeople, getPlanets, getStarships, setCurrentTitle,
} from "../../store/actions";

const Search = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [search, setSearch] = useState<string | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);

    if (search === "people") {
      dispatch(setCurrentTitle(search));
      dispatch(getPeople());
      navigate(`/${search}`);
    } else if (search === "planets") {
      dispatch(setCurrentTitle(search));
      dispatch(getPlanets());
      navigate(`/${search}`);
    } else if (search === "starships") {
      dispatch(setCurrentTitle(search));
      dispatch(getStarships());
      navigate(`/${search}`);
    } else {
      dispatch(setCurrentTitle(null));
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={(e) => setSearch(e.target.value)}>
        <option selected disabled>
          Choose one
        </option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
