import React, { useState } from "react";
import { useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  function addCount() {
    setCount((c) => c + 1);
  }

  function changeColor() {
    setColor((c) => (c == "green" ? "Red" : "green"));
  }

  return (
    <>
      <h1 style={{ color: color }}>Color: {count}</h1>
      <button onClick={addCount}>Add</button>
      <button onClick={changeColor}>Change</button>
    </>
  );
}

export default MyComponent;
