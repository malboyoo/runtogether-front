const API_EVENT = "http://localhost:3001/api/event/";

export const fetchEvent = async (id) => {
  const response = await fetch(API_EVENT + id);
  const body = await response.json();

  if (response.ok) {
    return body;
  } else {
    if (body) {
      throw body;
    } else {
      throw new Error("une erreur est survenue (event.js - fetchEvent)");
    }
  }
};
