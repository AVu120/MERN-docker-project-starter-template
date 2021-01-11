import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState("");

  useEffect(() => {
    fetch("/testAPI")
      .then((res) => res.text())
      .then((res) => setState(res));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <p>Hello world</p>
      <p>{state}</p>
    </div>
  );
}

export default App;
