import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    // Telegram WebApp initialization
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand(); // Open in full screen inside Telegram
      console.log("Telegram WebApp ready");

      // Example: set MainButton text
      tg.MainButton.setText("Click Me!");
      tg.MainButton.show();
      tg.MainButton.onClick(() => {
        tg.sendData("Button Clicked!"); // Sends data to bot
        alert("Button clicked inside Telegram Mini App!");
      });
    }
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Telegram Mini App Working 🎉</h1>

      <p>Welcome to your Telegram Mini App!</p>

      {/* Example UI component */}
      <button
        onClick={() => alert("Local Button Clicked!")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Local Button
      </button>
    </div>
  );
}

export default App;
