import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const handleText = (event) => {
    const inputText = event.target.value;
    setText(inputText.toUpperCase());
  };

  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text!</label>
      <input
        value={text}
        
      />

      <p>
        <label>Here is the text in upper case:</label>
        <input value={text} disabled  onChange={handleText}  /> 
      </p>
    </main>
  );
}

export default App;
