import React, { useState, useEffect, useRef } from "react";

// export const Counter = () => {
//   const [count, setCount] = useState(0);
//   const [running, setRunning] = useState(false);

//   useEffect(() => {
//     if (!running) return; // stop scheduling timeout

//     const timeout = setTimeout(() => {
//       setCount(prev => prev + 1);
//     }, 1000);

//     return () => clearTimeout(timeout);
//   }, [count, running]);

//   return (
//     <>
//       <h1>{count}</h1>

//       <button onClick={() => setRunning(true)}>Start</button>
//       <button onClick={() => setRunning(false)}>Stop</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </>
//   );
// };



export const Counter = () => {
  const intervalRef = useRef(null);
  const [count, setCount] = useState(0);

  const startCounter = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 100);
  };

  const stopCounter = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)"
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "16px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          minWidth: "260px"
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            margin: "0 0 20px",
            color: "#333"
          }}
        >
          {count}
        </h1>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <button
            onClick={startCounter}
            style={{
              padding: "10px 18px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              background: "#4CAF50",
              color: "#fff"
            }}
          >
            Start
          </button>

          <button
            onClick={stopCounter}
            style={{
              padding: "10px 18px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              background: "#f44336",
              color: "#fff"
            }}
          >
            Stop
          </button>

          <button
            onClick={() => setCount(0)}
            style={{
              padding: "10px 18px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              background: "#2196F3",
              color: "#fff"
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

