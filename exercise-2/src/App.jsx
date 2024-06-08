import React, { useState } from "react";

function App() {
  // Use state to keep track of the text entered by the user
  const [text, setText] = useState("");

  // Handle the text change event
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
        onChange={handleText} 
      />

      <p>
        <label>Here is the text in upper case:</label>
        <input value={text} disabled /> 
      </p>
    </main>
  );
}

export default App;
