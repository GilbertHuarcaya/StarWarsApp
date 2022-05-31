/* eslint-disable default-param-last */

import {
  NEW_QUERY, TOGGLE_DISPLAY,
} from "../types";

const initialState = {
  query: "",
  toggleDisplay: "dashboard",
};

type ActionReducer = {
      type: "NEW_QUERY" | "TOGGLE_DISPLAY";
      payload: string;
    }

export default (state = initialState, action: ActionReducer) => {
  switch (action.type) {
    case NEW_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case TOGGLE_DISPLAY:
      return {
        ...state,
        toggleTasksDisplay: action.payload,
      };
    default:
      return state;
  }
};
