import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanets } from "../../store/actions";
import { Store } from "../../config/interfaces/store/types";
import { AppDispatch } from "../../main";

const Planets = () => {
  const dispatch: AppDispatch = useDispatch();
  const planets = useSelector((store: Store) => store.planets);
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getPlanets());
  }, [dispatch]);

  const listLength = 10;

  return (
    <div className="Planets">
      {planets?.results?.length > 0 && (
        <div>
          <h1>Planets</h1>
          <ol start={(page * listLength) + 1}>
            {planets?.results?.map((planet) => (
              <li key={planet.name}>{planet.name}</li>
            ))}
          </ol>
        </div>
      )}
      {planets?.previous && (
        <button
          type="button"
          onClick={() => {
            dispatch(getPlanets(planets?.previous as string));
            setPage(page - 1);
          }}
        >
          Previous
        </button>
      )}
      {planets?.next && (
        <button
          type="button"
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
