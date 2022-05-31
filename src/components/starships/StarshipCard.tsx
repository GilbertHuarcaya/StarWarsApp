import React from "react";
import { Starship } from "../../config/interfaces/starships/types";

type Props = {
  starship: Starship;
};

const StarshipCard = ({ starship }: Props) => (
  <div className="card">
    <h3>
      {starship.name}
    </h3>
    <p>{`Model: ${starship.model}`}</p>
    <p>{`Cost in credits: ${starship.cost_in_credits}`}</p>
    <p>{`Crew: ${starship.crew}`}</p>
    <p>{`Passengers: ${starship.passengers}`}</p>
    <p>{`Hyperdrive rating: ${starship.hyperdrive_rating}`}</p>
    <p>{`MGLT: ${starship.MGLT}`}</p>
    <p>{`Starship class: ${starship.starship_class}`}</p>
  </div>
);

export default StarshipCard;
