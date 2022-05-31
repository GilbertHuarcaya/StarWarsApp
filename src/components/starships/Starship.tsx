import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStarships } from "../../store/actions";
import { Store } from "../../config/interfaces/store/types";
import { AppDispatch } from "../../main";

const Starships = () => {
  const dispatch: AppDispatch = useDispatch();
  const starships = useSelector((store: Store) => store.starships);
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getStarships());
  }, [dispatch]);

  const listLength = 10;

  return (
    <div className="starships">
      {starships?.results?.length > 0 && (
        <div>
          <h1>starships</h1>
          <ol start={(page * listLength) + 1}>
            {starships?.results?.map((planet) => (
              <li key={planet.name}>{planet.name}</li>
            ))}
          </ol>
        </div>
      )}
      {starships?.previous && (
        <button
          type="button"
          onClick={() => {
            dispatch(getStarships(starships?.previous as string));
            setPage(page - 1);
          }}
        >
          Previous
        </button>
      )}
      {starships?.next && (
        <button
          type="button"
          onClick={() => {
            dispatch(getStarships(starships?.next as string));
            setPage(page + 1);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Starships;
