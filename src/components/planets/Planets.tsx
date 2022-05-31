import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanets } from "../../store/actions";
import { Store } from "../../config/interfaces/store/types";
import { AppDispatch } from "../../main";
import PlanetCard from "./PlanetCard";

const Planets = () => {
  const dispatch: AppDispatch = useDispatch();
  const planets = useSelector((store: Store) => store.planets);
  const [page, setPage] = useState(0);

  const listLength = 10;

  return (
    <div className="planets">
      {planets?.previous && (
        <button
          type="button"
          className="btn-prev"
          onClick={() => {
            dispatch(getPlanets(planets?.previous as string));
            setPage(page - 1);
          }}
        >
          Previous
        </button>
      )}
      {planets?.results?.length > 0 && (
        <div className="planets__list">
          <h1>PLANETS</h1>
          <ol start={(page * listLength) + 1}>
            {planets?.results?.map((planet) => (
              <li key={planet.name}>
                <PlanetCard planet={planet} />
              </li>
            ))}
          </ol>
        </div>
      )}
      {planets?.next && (
        <button
          type="button"
          className="btn-nxt"
          onClick={() => {
            dispatch(getPlanets(planets?.next as string));
            setPage(page + 1);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Planets;
