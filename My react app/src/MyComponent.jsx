import React, { useState } from "react";
import { useEffect } from "react";

function MyComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p onChange={handleResize}>
        Window width : {width} px <br />
        Window height : {height} px
      </p>
    </>
  );
}

export default MyComponent;
