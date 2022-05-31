import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeople } from "../../store/actions";
import { Store } from "../../config/interfaces/store/types";
import { AppDispatch } from "../../main";

const People = () => {
  const dispatch: AppDispatch = useDispatch();
  const people = useSelector((store: Store) => store.people);
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  const listLength = 10;

  return (
    <div className="people">
      {people?.results?.length > 0 && (
        <div>
          <h1>people</h1>
          <ol start={(page * listLength) + 1}>
            {people?.results?.map((person) => (
              <li key={person.name}>{person.name}</li>
            ))}
          </ol>
        </div>
      )}
      {people?.previous && (
        <button
          type="button"
          onClick={() => {
            dispatch(getPeople(people?.previous as string));
            setPage(page - 1);
          }}
        >
          Previous
        </button>
      )}
      {people?.next && (
        <button
          type="button"
          onClick={() => {
            dispatch(getPeople(people?.next as string));
            setPage(page + 1);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default People;
