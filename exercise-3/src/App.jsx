import React, { useState } from "react";

function App() {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [sumAB, setSumAB] = useState("");

  const handleInputA = (event) => {
    const inputNumberA = event.target.value;
    setInputA(inputNumberA);
  };

  const handleInputB = (event) => {
    const inputNumberB = event.target.value;
    setInputB(inputNumberB);
  };

  const handleAAndB = () => {
    if (inputA === "" || inputB === "") {
      setSumAB("A and B shall be numbers");
    } else {
      const sum = Number(inputA) + Number(inputB);
      setSumAB(sum);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAAndB();
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={handleInputA} value={inputA} onChange={handleInputA} />

      <label>B =</label>
      <input onKeyUp={handleInputB} value={inputB} onChange={handleInputB} />

      <label>A + B =</label>
      <input disabled value={sumAB} />
      <button onClick={handleSubmit}>Compute</button>
    </main>
  );
}

export default App;
