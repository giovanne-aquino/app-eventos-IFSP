import axios from "axios";

const baseURL = "http://localhost:3000/events";

export function getAllEvents() {
  const response = axios.get(baseURL);
  return response;
}
