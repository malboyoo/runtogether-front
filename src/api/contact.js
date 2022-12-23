const API_CONTACT = "http://runtogether.fr:3000/api/contact";

export const sendMessageContact = async (content) => {
  const response = await fetch(API_CONTACT, {
    method: "POST",
    body: JSON.stringify(content),
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
