import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import Error from "./Error.js";
import "./styles/styles.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/404",
    element: <Error/>,
  },
  {
    path: "/:urlHex",
    element: <App />,
  },
  
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  ) as React.ReactNode
);
