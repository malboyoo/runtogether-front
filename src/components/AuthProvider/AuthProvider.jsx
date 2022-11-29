import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { signin, signout } from "../../api/auth";

function AuthProvider({ children }) {
  const initialUser = useLoaderData();
  const [user, setUser] = useState(initialUser);

  async function login(credentials) {
    const newUser = await signin(credentials);
    setUser(newUser);
  }

  async function logout() {
    await signout();
    setUser(null);
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
