import React, { useState } from "react";
import { useEffect, useRef } from "react";

function MyComponent() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("Rendered");
  });

  function handleClick1() {
    inputRef1.current.value = "Adesh";
    inputRef1.current.style.backgroundColor = "Red";
    inputRef2.current.value = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.value = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    inputRef1.current.value = "";
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.value = "Adesh";
    inputRef2.current.style.backgroundColor = "Red";
    inputRef3.current.value = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    inputRef1.current.value = "";
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.value = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.value = "Adesh";
    inputRef3.current.style.backgroundColor = "Red";
  }

  return (
    <div>
      <button onClick={handleClick1}>Click Me 1</button>
      <br />
      <input ref={inputRef1} />
      <br />
      <button onClick={handleClick2}>Click Me 2</button>
      <br />
      <input ref={inputRef2} />
      <br />
      <button onClick={handleClick3}>Click Me 3</button>
      <br />
      <input ref={inputRef3} />
    </div>
  );
}
export default MyComponent;
