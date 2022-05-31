import React from "react";
import { Person } from "../../config/interfaces/people/types";

type Props = {
  person: Person;
};

const PersonCard = ({ person }: Props) => (
  <div className="card">
    <h3>
      {person.name}
    </h3>
    <p>{`Height: ${person.height}`}</p>
    <p>{`Mass: ${person.mass}`}</p>
    <p>{`Hair color: ${person.hair_color}`}</p>
    <p>{`Skin color: ${person.skin_color}`}</p>
    <p>{`Eye color: ${person.eye_color}`}</p>
    <p>{`Birth year: ${person.birth_year}`}</p>
    <p>{`Gender: ${person.gender}`}</p>
  </div>
);

export default PersonCard;
