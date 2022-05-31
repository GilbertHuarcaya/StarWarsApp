import axios from "axios";

const URL_BASE = `${import.meta.env.VITE_API_URL_BASE as string}starships`;

export const fetchStarships = () => axios.get(URL_BASE);
export const fetchNextStarships = (nextPage: string) => axios.get(nextPage);

export default {
  fetchStarships,
  fetchNextStarships,
};
