
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand(); // Telegram ke andar full screen open
      console.log("Telegram WebApp ready");
    }
  }, []);

  return (
    <div>
      <h1>Telegram Mini App Working 🎉</h1>
    </div>
  );
}

export default App;
