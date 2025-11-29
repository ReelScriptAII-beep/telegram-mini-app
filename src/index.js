import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Telegram WebApp initialization
if (window.Telegram?.WebApp) {
  window.Telegram.WebApp.ready();
  console.log("Telegram WebApp initialized in index.js");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
