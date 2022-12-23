const API_AUTH = "http://runtogether.fr:3000/api/auth";

export async function signin(credentials) {
  const response = await fetch(API_AUTH, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(credentials),
    credentials: "include",
  });
  const body = await response.json();

  if (response.ok) {
    return body;
  } else {
    if (body) {
      throw body;
    } else {
      throw new Error("une erreur est survenue (auth.js)");
    }
  }
}

export async function getCurrentUser() {
  const response = await fetch(API_AUTH + "/current", { credentials: "include" });
  return await response.json();
}

export async function signout() {
  await fetch(API_AUTH, {
    method: "DELETE",
    credentials: "include",
  });
}
