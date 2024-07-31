import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductList } from "./components/ProductList.jsx";
import { ManufacturerList } from "./components/ManufacturerList.jsx";
// index.css for importing tailwind

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ManufacturerList />,
      },
      {
        path: ":manufacturerId",
        element: <ProductList />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
