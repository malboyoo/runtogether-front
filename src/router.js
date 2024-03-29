import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { getCurrentUser } from "./api/auth";
import { fetchEvent, fetchAllEvent } from "./api/event";

const ProtectedRoute = lazy(() => import("./components/ProtectedRoute/ProtectedRoute"));
const NotLoggedRoute = lazy(() => import("./components/NotLoggedRoute/NotLoggedRoute"));
const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Signin = lazy(() => import("./pages/Signin/Signin"));
const CreateEvent = lazy(() => import("./pages/CreateEvent/CreateEvent"));
const ModifyEvent = lazy(() => import("./pages/ModifyEvent/ModifyEvent"));
const UserSettings = lazy(() => import("./pages/UserSettings/UserSettings"));
const DeleteAccount = lazy(() => import("./pages/UserSettings/components/DeleteAccount"));
const ForgetPassword = lazy(() => import("./pages/Signin/ForgetPassword"));
const Error = lazy(() => import("./pages/Error/Error"));
const EventList = lazy(() => import("./pages/EventList/EventList"));
const CookieCharter = lazy(() => import("./pages/CookieCharter/CookieCharter"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Event = lazy(() => import("./pages/Event/Event"));

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
        path: "event",
        loader: fetchAllEvent,
        element: (
          <ProtectedRoute>
            <EventList />
          </ProtectedRoute>
        ),
        errorElement: <Error />,
      },
      {
        path: "cookie",
        element: <CookieCharter />,
        errorElement: <Error />,
      },
      {
        path: "contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "event/:id",
        loader: fetchEvent,
        element: (
          <ProtectedRoute>
            <Event />
          </ProtectedRoute>
        ),
        errorElement: <Error />,
      },
      {
        path: "create-event",
        element: (
          <ProtectedRoute>
            <CreateEvent />
          </ProtectedRoute>
        ),
      },
      {
        path: "modify-event/:id",
        loader: fetchEvent,
        element: (
          <ProtectedRoute>
            <ModifyEvent />
          </ProtectedRoute>
        ),
        errorElement: <Error />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
