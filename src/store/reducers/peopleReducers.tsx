/* eslint-disable default-param-last */
import {
  FETCH_ALL_PEOPLE,
} from "../types.d";

type ActionReducer = {
  type: "FETCH_ALL_PEOPLE"
  payload: {
    id: string;
  };
};

export default (people = {}, action: ActionReducer) => {
  switch (action.type) {
    case FETCH_ALL_PEOPLE:
      return action.payload;
    default:
      return people;
  }
};
