import axios from "axios";

const URL_BASE = `${import.meta.env.VITE_API_URL_BASE as string}planets`;

export const fetchPlanets = () => axios.get(URL_BASE);
export const fetchNextPlanets = (nextPage: string) => axios.get(nextPage);

export default {
  fetchPlanets,
  fetchNextPlanets,
};
