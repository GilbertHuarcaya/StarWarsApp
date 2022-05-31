/* eslint-disable default-param-last */

import {
  NEW_TITLE, LOADING,
} from "../types";

const initialState = {
  currentTitle: null,
  loading: false,
};

type ActionReducer = {
      type: "NEW_TITLE";
      payload: string;
    }
    | {
      type: "LOADING";
      payload: boolean;
    };

export default (state = initialState, action: ActionReducer) => {
  switch (action.type) {
    case NEW_TITLE:
      return {
        ...state,
        currentTitle: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
