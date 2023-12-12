import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <div> Here cometh login </div>
  },
  {
    path: "/signup",
    element: <div> Here cometh signup </div>
  }
])

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
