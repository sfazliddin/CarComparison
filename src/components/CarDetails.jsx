/* eslint-disable react/prop-types */
// CarDetails.js
import React from "react";

const CarDetails = ({ car, index, editCar, removeCar, gasPrice, mileage }) => {
  return (
    <div key={index} style={{ width: "25%", padding: "10px" }}>
      <h3>Car {index + 1}</h3>
      <p>
        <strong>Make:</strong> {car.make}
      </p>
      <p>
        <strong>Model:</strong> {car.model}
      </p>
      <p>
        <strong>Year:</strong> {car.year}
      </p>
      <p>
        <strong>Cost:</strong> ${car.cost}
      </p>
      <p>
        <strong>City MPG:</strong> {car.cityMPG}
      </p>
      <p>
        <strong>Highway MPG:</strong> {car.highwayMPG}
      </p>
      <p>
        <strong>Combined MPG:</strong> {car.combinedMPG}
      </p>
      <p>
        <strong>Gas Cost:</strong>${" "}
        {((gasPrice * mileage) / parseFloat(car.combinedMPG)).toFixed(2)}
      </p>
      <p>
        <strong>Cost after {mileage} miles:</strong>$
        {(
          (gasPrice * mileage) / parseFloat(car.combinedMPG) +
          parseInt(car.cost)
        ).toFixed(2)}
      </p>
      <button onClick={() => editCar(index)}>Edit Car</button>
      <button onClick={() => removeCar(index)}>Remove Car</button>
    </div>
  );
};

export default CarDetails;
