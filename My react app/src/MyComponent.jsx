import React, { useState } from "react";

function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };

    setCars((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    setCars((c) => c.filter((_, i) => i !== index));
  }

  function handleYear(e) {
    setCarYear(e.target.value);
  }

  function handleMake(e) {
    setCarMake(e.target.value);
  }

  function handleModel(e) {
    setCarModel(e.target.value);
  }

  return (
    <>
      <div>
        <h2>List of Car Objects</h2>
        <ul>
          {cars.map((car, index) => (
            <li key={index} onClick={() => handleRemoveCar(index)}>
              {car.year} {car.make} {car.model}
            </li>
          ))}
        </ul>
        <input type="number" value={carYear} onChange={handleYear} />
        <br />
        <input
          type="text"
          value={carMake}
          placeholder="Enter the Make of the Car"
          onChange={handleMake}
        />
        <br />
        <input
          type="text"
          value={carModel}
          placeholder="Enter the Model of the Car"
          onChange={handleModel}
        />
        <br />
        <button onClick={handleAddCar}>Add Car</button>
      </div>
    </>
  );
}

export default MyComponent;
