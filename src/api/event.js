const API_EVENT = "https://runtogether.fr:3000/api/event/";

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

export const fetchAllEvent = async () => {
  const response = await fetch(API_EVENT);
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

export const deleteEvent = async (eventId) => {
  const response = await fetch(API_EVENT + "delete/" + eventId, {
    method: "DELETE",
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

export const createEvent = async (event) => {
  const response = await fetch(API_EVENT + "create", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(event),
    credentials: "include",
  });

  const body = await response.json();

  if (response.ok) {
    return body;
  } else {
    if (body) {
      throw body.message;
    } else {
      throw new Error("une erreur est survenue (event.js - createEvent)");
    }
  }
};

export const modifyEvent = async (event) => {
  const response = await fetch(API_EVENT + "modify/" + event._id, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(event),
    credentials: "include",
  });

  const body = await response.json();

  if (response.ok) {
    return body;
  } else {
    if (body) {
      throw body.message;
    } else {
      throw new Error("une erreur est survenue (event.js - createEvent)");
    }
  }
};
export const sendMessage = async (message, eventId) => {
  const response = await fetch(API_EVENT + "message/" + eventId, {
    method: "POST",
    body: JSON.stringify(message),
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
      throw body.message;
    } else {
      throw new Error("une erreur est survenue (event.js - createEvent)");
    }
  }
};

export const deleteMessage = async (message, eventId) => {
  const response = await fetch(API_EVENT + "message/" + eventId, {
    method: "DELETE",
    body: JSON.stringify(message),
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
      throw body.message;
    } else {
      throw new Error("une erreur est survenue (event.js - createEvent)");
    }
  }
};

export const reportMessage = async (message, eventId) => {
  const response = await fetch(API_EVENT + "report/" + eventId, {
    method: "POST",
    body: JSON.stringify({ ...message, eventId }),
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
      throw body.message;
    } else {
      throw new Error("une erreur est survenue (event.js - createEvent)");
    }
  }
};
