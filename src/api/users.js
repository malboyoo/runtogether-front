const API_USERS = "http://localhost:3001/api/users";

export async function createUser(newUser) {
  const response = await fetch(API_USERS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  const body = await response.json();
  if (response.ok) {
    return body;
  } else {
    if (body) {
      throw body;
    } else {
      throw new Error("Error api createUser");
    }
  }
}

export async function editUser(user) {
  const response = await fetch(API_USERS, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
    credentials: "include",
  });
  const body = await response.json();
  if (response.ok) {
    return body;
  } else {
    if (body) {
      throw body;
    } else {
      throw new Error("Error api editUser");
    }
  }
}

export async function editProfilePicture(formData) {
  const response = await fetch(API_USERS + "/file", {
    method: "POST",
    body: formData,
    credentials: "include",
  });
  const body = await response.json();
  if (response.ok) {
    return body;
  } else {
    if (body) {
      throw body;
    } else {
      throw new Error("Error api editProfilePicture");
    }
  }
}

export async function deleteUser() {
  const response = await fetch(API_USERS + "/delete", {
    method: "DELETE",
    credentials: "include",
  });
  if (response.ok) {
    return "Votre compte à bien été supprimé ✅";
  }
}

export async function resetPassword(email) {
  const response = await fetch(API_USERS + "/forget-password", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "content-type": "application/json",
    },
  });
  if (response.ok) {
    return "Un email avec votre mot de passe temporaire vous à été envoyé";
  }
}
