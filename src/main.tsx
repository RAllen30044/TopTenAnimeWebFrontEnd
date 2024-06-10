import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./responsive.css";
import ErrorPage from "./errorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./authentication/authProvider.tsx";
import { Toaster } from "react-hot-toast";
import { ComponentProvider } from "./ComponentProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <ComponentProvider>
        <Toaster />
        <RouterProvider router={router} />
      </ComponentProvider>
    </AuthProvider>
  </React.StrictMode>
);
