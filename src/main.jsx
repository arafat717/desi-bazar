import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="mx-w-[2000px] mx-auto">
      <HelmetProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
          <Toaster />
        </AuthProvider>
      </HelmetProvider>
    </div>
  </React.StrictMode>
);
