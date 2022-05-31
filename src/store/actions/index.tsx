/* eslint-disable no-console */
import { Dispatch } from "redux";
import {
  FETCH_ALL_PLANETS,
  FETCH_ALL_PEOPLE,
  FETCH_ALL_STARSHIPS,
  NEW_TITLE,
} from "../types";

import {
  starshipsServices,
  planetsServices,
  peopleServices,
} from "../../services";

import { FetchStarships, FetchPlanets, FetchPeople } from "../../config/interfaces/store/types";

export const getStarships = (nextPage?: string) => async (dispatch: Dispatch) => {
  try {
    if (nextPage) {
      const { data }: FetchStarships = await starshipsServices.fetchNextStarships(nextPage);

      dispatch({ type: FETCH_ALL_STARSHIPS, payload: data });
    } else {
      const { data }: FetchStarships = await starshipsServices.fetchStarships();

      dispatch({ type: FETCH_ALL_STARSHIPS, payload: data });
    }
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const getPlanets = (nextPage?: string) => async (dispatch: Dispatch) => {
  try {
    if (nextPage) {
      const { data }: FetchPlanets = await planetsServices.fetchNextPlanets(nextPage);

      dispatch({ type: FETCH_ALL_PLANETS, payload: data });
    } else {
      const { data }: FetchPlanets = await planetsServices.fetchPlanets();

      dispatch({ type: FETCH_ALL_PLANETS, payload: data });
    }
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const getPeople = (nextPage?: string) => async (dispatch: Dispatch) => {
  try {
    if (nextPage) {
      const { data }: FetchPeople = await peopleServices.fetchNextPeople(nextPage);

      dispatch({ type: FETCH_ALL_PEOPLE, payload: data });
    } else {
      const { data }: FetchPeople = await peopleServices.fetchPeople();

      dispatch({ type: FETCH_ALL_PEOPLE, payload: data });
    }
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const setCurrentTitle = (title: string | null) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: NEW_TITLE, payload: title });
  } catch (error) {
    console.log((error as Error).message);
  }
};
