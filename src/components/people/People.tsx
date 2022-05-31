import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeople } from "../../store/actions";
import { Store } from "../../config/interfaces/store/types";
import { AppDispatch } from "../../main";
import PersonCard from "./PersonCard";

const People = () => {
  const dispatch: AppDispatch = useDispatch();
  const people = useSelector((store: Store) => store.people);
  const [page, setPage] = useState(0);

  const listLength = 10;

  return (
    <div className="people">
      {people?.previous && (
        <button
          type="button"
          className="btn-prev"
          onClick={() => {
            dispatch(getPeople(people?.previous as string));
            setPage(page - 1);
          }}
        >
          Previous
        </button>
      )}
      {people?.results?.length > 0 && (
        <div className="people__list">
          <h1>PEOPLE</h1>
          <ol start={(page * listLength) + 1}>
            {people?.results?.map((person) => (
              <li key={person.name}>
                <PersonCard person={person} />
              </li>
            ))}
          </ol>
        </div>
      )}
      {people?.next && (
        <button
          type="button"
          className="btn-nxt"
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
