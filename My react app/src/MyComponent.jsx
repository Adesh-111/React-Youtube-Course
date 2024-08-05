import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState();
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState();

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleQuantity(e) {
    setQuantity(e.target.value);
  }

  function handlePayment(e) {
    setPayment(e.target.value);
  }

  function handleShipping(e) {
    setShipping(e.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleChange} />
      <p>Name: {name}</p>
      <input value={quantity} type="number" onChange={handleQuantity} />
      <p>Quantity : {quantity}</p>
      <select onChange={handlePayment}>
        <option value="">Select</option>
        <option value="Visa">Visa</option>
        <option value="Master-card">Master Card</option>
      </select>
      <p>{payment}</p>
      <label htmlFor="">
        <input
          type="radio"
          value="Pickup"
          checked={shipping === "Pickup"}
          onChange={handleShipping}
        />
        Pickup
      </label>{" "}
      <br />
      <label htmlFor="">
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShipping}
        />
        Delivery
      </label>
      <p>{shipping}</p>
    </div>
  );
}

export default MyComponent;
