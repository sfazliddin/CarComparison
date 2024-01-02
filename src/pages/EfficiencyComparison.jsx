import { useState } from "react";

class Car {
  constructor(make, model, year, cost, cityMPG, highwayMPG, combinedMPG) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.cost = cost;
    this.cityMPG = cityMPG;
    this.highwayMPG = highwayMPG;
    this.combinedMPG = combinedMPG;
  }
}

const EfficiencyComparison = () => {
  const [carInfo, setCarInfo] = useState({
    make: "",
    model: "",
    year: "",
    cost: "",
    cityMPG: "",
    highwayMPG: "",
    combinedMPG: "",
  });

  const handleChange = (e) => {
    setCarInfo({ ...carInfo, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    const { make, model, year, cost, cityMPG, highwayMPG, combinedMPG } =
      carInfo;
    const car = new Car(
      make,
      model,
      year,
      cost,
      cityMPG,
      highwayMPG,
      combinedMPG
    );

    // Example: Log the car information
    console.log("Car Information:", car);

    // Add your logic here to further use or display the car information
  };
  console.log;
  return (
    <>
      <h1 style={{ alignSelf: "center" }}>Efficiency Comparison</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        <div style={{ flex: "20%", padding: "5px" }}>
          <h3> Car 1</h3>
          <form>
            <label htmlFor="make">Make:</label>
            <input
              type="text"
              id="make"
              name="make"
              value={carInfo.make}
              onChange={handleChange}
              required
            />

            <label htmlFor="model">Model:</label>
            <input
              type="text"
              id="model"
              name="model"
              value={carInfo.model}
              onChange={handleChange}
              required
            />

            <label htmlFor="year">Year:</label>
            <input
              type="number"
              id="year"
              name="year"
              value={carInfo.year}
              onChange={handleChange}
              required
            />

            <label htmlFor="cost">Cost:</label>
            <input
              type="number"
              id="cost"
              name="cost"
              value={carInfo.cost}
              onChange={handleChange}
              required
            />

            <label htmlFor="cityMPG">City MPG:</label>
            <input
              type="number"
              id="cityMPG"
              name="cityMPG"
              value={carInfo.cityMPG}
              onChange={handleChange}
              required
            />

            <label htmlFor="highwayMPG">Highway MPG:</label>
            <input
              type="number"
              id="highwayMPG"
              name="highwayMPG"
              value={carInfo.highwayMPG}
              onChange={handleChange}
              required
            />

            <label htmlFor="combinedMPG">Combined MPG:</label>
            <input
              type="number"
              id="combinedMPG"
              name="combinedMPG"
              value={carInfo.combinedMPG}
              onChange={handleChange}
              required
            />

            <button type="button" onClick={submitForm}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EfficiencyComparison;
