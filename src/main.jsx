import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import router from "./Routes/Routes";
import { RouterProvider } from "react-router";
import AuthProviders from "./Contexts/AuthProviders";



const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <AuthProviders>
    <RouterProvider router={router} />,
  </AuthProviders>
);





