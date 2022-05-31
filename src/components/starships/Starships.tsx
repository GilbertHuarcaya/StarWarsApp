import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStarships } from "../../store/actions";
import { Store } from "../../config/interfaces/store/types";
import { AppDispatch } from "../../main";
import StarshipCard from "./StarshipCard";

const Starships = () => {
  const dispatch: AppDispatch = useDispatch();
  const starships = useSelector((store: Store) => store.starships);
  const [page, setPage] = useState(0);

  const listLength = 10;

  return (
    <div className="starships">
      {starships?.previous && (
        <button
          type="button"
          className="btn-prev"
          onClick={() => {
            dispatch(getStarships(starships?.previous as string));
            setPage(page - 1);
          }}
        >
          Previous
        </button>
      )}
      {starships?.results?.length > 0 && (
        <div className="starships__list">
          <h1>STARSHIPS</h1>
          <ol start={(page * listLength) + 1}>
            {starships?.results?.map((starship) => (
              <li key={starship.name}>
                <StarshipCard starship={starship} />
              </li>
            ))}
          </ol>
        </div>
      )}
      {starships?.next && (
        <button
          type="button"
          className="btn-nxt"
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
