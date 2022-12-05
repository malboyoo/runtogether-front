import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { getCurrentUser } from "./api/auth";
import Event from "./pages/Event/Event";

const ProtectedRoute = lazy(() => import("./components/ProtectedRoute/ProtectedRoute"));
const NotLoggedRoute = lazy(() => import("./components/NotLoggedRoute/NotLoggedRoute"));
const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Signin = lazy(() => import("./pages/Signin/Signin"));
const UserSettings = lazy(() => import("./pages/UserSettings/UserSettings"));
const DeleteAccount = lazy(() => import("./pages/UserSettings/components/DeleteAccount"));
const ForgetPassword = lazy(() => import("./pages/Signin/ForgetPassword"));

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
        element: (
          <NotLoggedRoute>
            <Signup />
          </NotLoggedRoute>
        ),
      },
      {
        path: "signin",
        element: (
          <NotLoggedRoute>
            <Signin />
          </NotLoggedRoute>
        ),
      },
      {
        path: "settings",
        element: (
          <ProtectedRoute>
            <UserSettings />
          </ProtectedRoute>
        ),
      },
      {
        path: "delete",
        element: (
          <ProtectedRoute>
            <DeleteAccount />
          </ProtectedRoute>
        ),
      },
      {
        path: "forget-password",
        element: (
          <NotLoggedRoute>
            <ForgetPassword />
          </NotLoggedRoute>
        ),
      },
      {
        path: "event/:id",
        element: (
          <ProtectedRoute>
            <Event />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
