import React from "react";
import { Planet } from "../../config/interfaces/planets/types";

type Props = {
  planet: Planet;
};

const PlanetCard = ({ planet }: Props) => (
  <div className="card">
    <h3>
      {planet.name}
    </h3>
    <p>{`Climate: ${planet.climate}`}</p>
    <p>{`Terrain: ${planet.terrain}`}</p>
    <p>{`Population: ${planet.population}`}</p>
  </div>
);

export default PlanetCard;
