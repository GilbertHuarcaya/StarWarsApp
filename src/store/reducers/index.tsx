import { combineReducers } from "redux";

import people from "./peopleReducers";
import planets from "./planetsReducers";
import starships from "./starshipsReducers";
import app from "./appReducers";

export const reducers = combineReducers({
  people, starships, planets, app,
});
