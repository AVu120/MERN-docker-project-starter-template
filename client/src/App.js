import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({ apiResponse: "", dbResponse: "" });

  useEffect(() => {
    fetch("/testAPI")
      .then((res) => res.text())
      .then((res) => setState((state) => ({ ...state, apiResponse: res })));
  }, []);

  useEffect(() => {
    fetch("/testDB")
      .then((res) => res.text())
      .then((res) => setState((state) => ({ ...state, dbResponse: res })));
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
      <p>{state.apiResponse}</p>
      <p>{state.dbResponse}</p>
    </div>
  );
}

export default App;
