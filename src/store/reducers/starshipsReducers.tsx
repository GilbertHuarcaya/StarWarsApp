/* eslint-disable default-param-last */
import {
  FETCH_ALL_STARSHIPS,
} from "../types";

type ActionReducer = {
  type: "FETCH_ALL_STARSHIPS"
  payload: {
    id: string;
  };
};

export default (starships = {}, action: ActionReducer) => {
  switch (action.type) {
    case FETCH_ALL_STARSHIPS:
      return action.payload;
    default:
      return starships;
  }
};
