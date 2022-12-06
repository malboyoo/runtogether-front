const API_EVENT = "http://localhost:3001/api/event/";

export const fetchEvent = async ({ params }) => {
  const response = await fetch(API_EVENT + params.id);
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

export const registerToEvent = async (eventId) => {
  const response = await fetch(API_EVENT + eventId, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });
  const body = await response.json();

  if (response.ok) {
    return body;
  } else {
    if (body) {
      throw body;
    } else {
      throw new Error("une erreur est survenue (event.js - registerToEvent)");
    }
  }
};

export const unregisterToEvent = async (eventId) => {
  const response = await fetch(API_EVENT + eventId, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });
  const body = await response.json();

  if (response.ok) {
    return body;
  } else {
    if (body) {
      throw body;
    } else {
      throw new Error("une erreur est survenue (event.js - unregisterToEvent)");
    }
  }
};
