/* eslint-disable react/prop-types */
// CarForm.js
import "./CarForm.css";
const CarForm = ({
  carInfo,
  handleChange,
  addCar,
  editIndex,
  removeAllCars,
}) => {
  return (
    <div style={{ padding: "20px" }}>
      <form>
        <div className="detailInput">
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
        <div className="detailInput">
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
        <div className="detailInput">
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
        <div className="detailInput">
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
        <div className="detailInput">
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
        <div className="detailInput">
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
        <button type="button" onClick={addCar}>
          {editIndex !== null ? "Update Car" : "Add Car"}
        </button>
        <button type="button" onClick={removeAllCars}>
          Remove All Cars
        </button>
      </form>
      {/* ... (Additional form code) ... */}
    </div>
  );
};

export default CarForm;
