import React, { useState } from "react";

function App() {
  const [topic, setTopic] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generateScript = async () => {
    if (!topic) return alert("Please enter a topic!");

    setLoading(true);

    try {
      const res = await fetch(
        "https://YOUR-BACKEND-URL/api/generate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: topic })
        }
      );

      const data = await res.json();
      setOutput(data.result);
    } catch (error) {
      setOutput("Error generating script.");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🎬 AI Reel Script Generator</h2>
      <input
        type="text"
        placeholder="Enter your topic (e.g. Motivation)..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      <button
        onClick={generateScript}
        style={{
          marginTop: "15px",
          width: "100%",
          padding: "12px",
          background: "#3390ec",
          color: "#fff",
          borderRadius: "8px",
          border: "none",
          fontSize: "16px"
        }}
      >
        {loading ? "Generating..." : "Generate Script"}
      </button>

      <div style={{ marginTop: "20px" }}>
        <h3>Result:</h3>
        <pre
          style={{
            background: "#f3f3f3",
            padding: "15px",
            minHeight: "150px",
            borderRadius: "8px"
          }}
        >
{output}
        </pre>
      </div>

      <div style={{ marginTop: "30px" }}>
        <div id="ad-container" style={{
          width: "100%",
          height: "250px",
          background: "#ddd",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          Monetag Ad Here
        </div>
      </div>
    </div>
  );
}

export default App;
