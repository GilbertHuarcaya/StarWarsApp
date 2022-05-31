/* eslint-disable default-param-last */

import {
  NEW_TITLE,
} from "../types";

const initialState = {
  currentTitle: null,
};

type ActionReducer = {
      type: "NEW_TITLE";
      payload: string;
    }

export default (state = initialState, action: ActionReducer) => {
  switch (action.type) {
    case NEW_TITLE:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};
