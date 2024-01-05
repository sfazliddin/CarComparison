import { useState } from "react";

import CarForm from "../components/CarForm";
import MileageForm from "../components/MileageForm";
import CarDetails from "../components/CarDetails";

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

            <MileageForm
              handleChangeGasPrice={handleChangeGasPrice}
              handleChangeMileage={handleChangeMileage}
            />
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
              <CarDetails
                key={index}
                car={car}
                index={index}
                editCar={editCar}
                removeCar={removeCar}
                gasPrice={gasPrice}
                mileage={mileage}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EfficiencyComparison;
