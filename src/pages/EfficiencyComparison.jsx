import { useState } from "react";
import { rapidApiHost, rapidApiKey } from "../utils/api";

class Car {
  make;
  model;
  year;
  cost;
  cityMPG;
  highwayMPG;
  combinedMPG;
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
  const getCar = async () => {
    const url =
      "https://car-api2.p.rapidapi.com/api/mileages?direction=asc&verbose=yes&sort=id&model=accord&trim=lx&year=2023&make=honda";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": rapidApiHost,
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      setCar1((prevCar1) => ({ ...prevCar1, make: result }));
    } catch (error) {
      console.error(error);
    }
  };
  const [car1, setCar1] = useState({
    make: "",
    model: "",
    year: null,
    cost: null,
    cityMPG: null,
    highwayMPG: null,
    combinedMPG: null,
  });

  // const car1 = new Car("Ford", "Escape", 2022, 24500, 29, 34, 31.5);
  const car2 = new Car("Toyota", "Camry", 2024, 23500, 34, 37, 35.5);
  const car3 = new Car("Honda", "Accord", 2023, 25500, 32, 38, 35);
  const car4 = new Car("BMW", "X7", 2020, 50500, 21, 27, 24);

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
          <h4>Make:{car1.make}</h4>
          <h4>Model:{car1.model}</h4>
          <h4>Year:{car1.year}</h4>
          <h4>Cost: ${car1.cost}</h4>
          <h4>City MPG:{car1.cityMPG}</h4>
          <h4>Highway MPG:{car1.highwayMPG}</h4>
          <h4>Combined MPG:{car1.combinedMPG}</h4>
          <button>Update Car 1</button>
        </div>
        <div style={{ flex: "20%", padding: "5px" }}>
          <h3> Car 2</h3>
          <h4>Make:{car2.make}</h4>
          <h4>Model:{car2.model}</h4>
          <h4>Year:{car2.year}</h4>
          <h4>Cost: ${car2.cost}</h4>
          <h4>City MPG:{car2.cityMPG}</h4>
          <h4>Highway MPG:{car2.highwayMPG}</h4>
          <h4>Combined MPG:{car2.combinedMPG}</h4>
        </div>
        <div style={{ flex: "20%", padding: "5px" }}>
          <h3> Car 3</h3>
          <h4>Make:{car3.make}</h4>
          <h4>Model:{car3.model}</h4>
          <h4>Year:{car3.year}</h4>
          <h4>Cost: ${car3.cost}</h4>
          <h4>City MPG:{car3.cityMPG}</h4>
          <h4>Highway MPG:{car3.highwayMPG}</h4>
          <h4>Combined MPG:{car3.combinedMPG}</h4>
        </div>
        <div style={{ flex: "20%", padding: "5px" }}>
          <h3> Car 4</h3>
          <h4>Make:{car4.make}</h4>
          <h4>Model:{car4.model}</h4>
          <h4>Year:{car4.year}</h4>
          <h4>Cost: ${car4.cost}</h4>
          <h4>City MPG:{car4.cityMPG}</h4>
          <h4>Highway MPG:{car4.highwayMPG}</h4>
          <h4>Combined MPG:{car4.combinedMPG}</h4>
        </div>
      </div>
    </>
  );
};
export default EfficiencyComparison;
