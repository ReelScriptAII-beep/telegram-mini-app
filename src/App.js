import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand();
      console.log("Telegram WebApp is ready");
    } else {
      console.log("Not running inside Telegram WebApp");
    }
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "#0088cc" }}>Telegram Mini App 🎉</h1>
      <p style={{ fontSize: "18px", color: "#555" }}>
        Welcome to your Telegram Mini App!
      </p>

      <div style={{ marginTop: "30px" }}>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#0088cc",
            color: "#fff",
            marginRight: "10px",
          }}
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#dc3545",
            color: "#fff",
          }}
          onClick={() => setCount(count - 1)}
        >
          -1
        </button>
      </div>

      <p style={{ fontSize: "20px", marginTop: "20px" }}>
        Counter: <strong>{count}</strong>
      </p>

      <div style={{ marginTop: "40px" }}>
        <button
          style={{
            padding: "12px 25px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "5px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
          }}
          onClick={() => alert("Hello from Telegram Mini App!")}
        >
          Say Hello
        </button>
      </div>
    </div>
  );
}

export default App;
