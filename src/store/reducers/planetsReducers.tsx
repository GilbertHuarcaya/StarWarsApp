/* eslint-disable default-param-last */
import {
  FETCH_ALL_PLANETS,
} from "../types.d";

type ActionReducer = {
  type: "FETCH_ALL_PLANETS"
  payload: {
    id: string;
  };
}

export default (planets = {}, action: ActionReducer) => {
  switch (action.type) {
    case FETCH_ALL_PLANETS:
      return action.payload;
    default:
      return planets;
  }
};
