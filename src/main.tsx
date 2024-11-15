import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import AppRouter from "./AppRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);
