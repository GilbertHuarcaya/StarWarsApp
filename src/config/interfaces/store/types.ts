import { Starship } from "../starships/types";
import { Planet } from "../planets/types";
import { Person } from "../people/types";

interface AppStore {
  currentTitle: string;
  loading: boolean;
}

export interface FetchPeople {
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<Person>;
  };
}

export interface FetchPlanets {
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<Planet>;
  };
}

export interface FetchStarships {
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<Starship>;
  };
}

export type Store = {
  planets: FetchPlanets["data"];
  people: FetchPeople["data"];
  starships: FetchStarships["data"];
  app: AppStore;
};
