import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [married, setMarried] = useState(false);

  function updateName() {
    setName("Adesh");
  }

  function incrementName() {
    setAge(age + 1);
  }

  function updateMarriedStatus(){
    setMarried(!married);
  }

  return (
    <div>
      <p>Name : {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age : {age}</p>
      <button onClick={incrementName}>Increment age</button>

      <p>isMarried : {married ? "Yes" : "No"}</p>
      <button onClick={updateMarriedStatus}>Toggle Status</button>
    </div>
  );
}

export default MyComponent;
