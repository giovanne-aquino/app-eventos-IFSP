import axios from "axios";

const baseURL = "http://localhost:3000/events";

export function createEvent(
  name,
  description,
  organizerId,
  format,
  location,
  userDocument,
  banner,
  eventType,
  startDate,
  endDate,
  maxCapacity,
  complementaryHours,
  status
) {
  const response = axios.post(baseURL, {
    name,
    description,
    organizerId,
    format,
    location,
    userDocument,
    banner,
    eventType,
    startDate,
    endDate,
    maxCapacity,
    complementaryHours,
    status,
  });
  return response;
}

export function getAllEvents() {
  const response = axios.get(baseURL);
  return response;
}
