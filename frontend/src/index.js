import React from "react";
import ReactDOM from "react-dom/client"; // Use 'react-dom/client' for React 18
import App from "./App";
import { AuthProvider } from "./components/AuthContext";

// Create a root with the new API in React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
