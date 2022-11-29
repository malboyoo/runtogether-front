import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { getCurrentUser } from "./api/auth";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Signin = lazy(() => import("./pages/Signin/Signin"));
const UserSettings = lazy(() => import("./pages/UserSettings/UserSettings"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute/ProtectedRoute"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: getCurrentUser,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "settings",
        element: (
          <ProtectedRoute>
            <UserSettings />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
