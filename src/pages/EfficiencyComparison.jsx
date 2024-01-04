import { useState } from "react";

import CarForm from "../components/CarForm";
import MileageForm from "../components/MileageForm";

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
  const [mileage, setMileage] = useState(0);
  const [gasPrice, setGasPrice] = useState(0);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setCarInfo({ ...carInfo, [e.target.name]: e.target.value });
  };
  const handleChangeMileage = (e) => {
    setMileage(e.target.value);
  };
  const handleChangeGasPrice = (e) => {
    setGasPrice(e.target.value);
  };

  const addCar = () => {
    const { make, model, year, cost, cityMPG, highwayMPG, combinedMPG } =
      carInfo;
    const capitalizedMake = make.charAt(0).toUpperCase() + make.slice(1);
    const capitalizedModel = model.charAt(0).toUpperCase() + model.slice(1);

    if (editIndex !== null) {
      // Update existing car if in edit mode
      const updatedCarList = [...carList];
      updatedCarList[editIndex] = new Car(
        capitalizedMake,
        capitalizedModel,
        year,
        cost,
        parseInt(cityMPG),
        parseInt(highwayMPG),
        combinedMPG
      );
      setCarList(updatedCarList);
      setEditIndex(null); // Exit edit mode
    } else {
      // Add new car
      const car = new Car(
        capitalizedMake,
        capitalizedModel,
        year,
        cost,
        parseInt(cityMPG),
        parseInt(highwayMPG)
      );
      setCarList([...carList, car]);
    }
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
  //removes a car
  const removeCar = (index) => {
    const updatedCarList = carList.filter((_, i) => i !== index);
    setCarList(updatedCarList);
    setEditIndex(null);
  };
  const removeAllCars = () => {
    setCarList([]);
    setEditIndex(null); // Exit edit mode when removing all cars
  };
  const editCar = (index) => {
    const carToEdit = carList[index];
    setCarInfo({
      make: carToEdit.make,
      model: carToEdit.model,
      year: carToEdit.year.toString(),
      cost: carToEdit.cost.toString(),
      cityMPG: carToEdit.cityMPG.toString(),
      highwayMPG: carToEdit.highwayMPG.toString(),
    });
    setEditIndex(index);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Car Information Form</h1>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ width: "15%", padding: "20px" }}>
            <CarForm
              carInfo={carInfo}
              handleChange={handleChange}
              addCar={addCar}
              editIndex={editIndex}
              removeAllCars={removeAllCars}
            />

            <MileageForm />
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
                <p>
                  <strong>Gas Cost:</strong>${" "}
                  {((gasPrice * mileage) / parseFloat(car.combinedMPG)).toFixed(
                    2
                  )}
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EfficiencyComparison;
