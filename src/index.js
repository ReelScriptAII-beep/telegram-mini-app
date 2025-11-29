import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Telegram WebApp init
if (window.Telegram?.WebApp) {
    window.Telegram.WebApp.ready();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
