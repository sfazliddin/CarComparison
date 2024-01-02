import { useState } from "react";

class Car {
  constructor(make, model, year, cost, cityMPG, highwayMPG) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.cost = cost;
    this.cityMPG = cityMPG;
    this.highwayMPG = highwayMPG;
    this.combinedMPG = (cityMPG + highwayMPG) / 2;
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
  });

  const [carList, setCarList] = useState([]);

  const handleChange = (e) => {
    setCarInfo({ ...carInfo, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    const { make, model, year, cost, cityMPG, highwayMPG, combinedMPG } =
      carInfo;
    const capitalizedMake = make.charAt(0).toUpperCase() + make.slice(1);
    const capitalizedModel = model.charAt(0).toUpperCase() + model.slice(1);
    const car = new Car(
      capitalizedMake,
      capitalizedModel,
      year,
      cost,
      parseInt(highwayMPG),
      parseInt(cityMPG),
      combinedMPG
    );

    setCarList([...carList, car]);
    setCarInfo({
      make: "",
      model: "",
      year: "",
      cost: "",
      cityMPG: "",
      highwayMPG: "",
      combinedMPG: "",
    });
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Car Information Form</h1>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ width: "15%", padding: "20px" }}>
            <form>
              <div
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="make">Make:</label>
                <input
                  type="text"
                  id="make"
                  name="make"
                  value={carInfo.make}
                  onChange={handleChange}
                  required
                />
              </div>
              <div
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="model">Model:</label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={carInfo.model}
                  onChange={handleChange}
                  required
                />
              </div>
              <div
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="year">Year:</label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  value={carInfo.year}
                  onChange={handleChange}
                  required
                />
              </div>
              <div
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="cost">Cost:</label>
                <input
                  type="number"
                  id="cost"
                  name="cost"
                  value={carInfo.cost}
                  onChange={handleChange}
                  required
                />
              </div>
              <div
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="cityMPG">City MPG:</label>
                <input
                  type="number"
                  id="cityMPG"
                  name="cityMPG"
                  value={carInfo.cityMPG}
                  onChange={handleChange}
                  required
                />
              </div>
              <div
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="highwayMPG">Highway MPG:</label>
                <input
                  type="number"
                  id="highwayMPG"
                  name="highwayMPG"
                  value={carInfo.highwayMPG}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="button" onClick={submitForm}>
                Submit
              </button>
            </form>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "85%",
            }}
          >
            {carList.map((car, index) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EfficiencyComparison;
