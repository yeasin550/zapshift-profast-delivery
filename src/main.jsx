import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Routes/Routes";
import { RouterProvider } from "react-router";
import AuthProviders from "./Contexts/AuthProviders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


// Create a client
const queryClient = new QueryClient()

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <QueryClientProvider client={queryClient}>
    <AuthProviders>
      <RouterProvider router={router} />,
    </AuthProviders>
  </QueryClientProvider>,
);
