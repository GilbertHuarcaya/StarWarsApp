import axios from "axios";

const URL_BASE = `${import.meta.env.VITE_API_URL_BASE as string}people`;

export const fetchPeople = () => axios.get(URL_BASE);
export const fetchNextPeople = (nextPage: string) => axios.get(nextPage);

export default {
  fetchPeople,
  fetchNextPeople,
};
