/* eslint-disable react/prop-types */
// MileageForm.js
import React from "react";
import "./CarForm.css";

const MileageForm = ({
  mileage,
  gasPrice,
  handleChangeMileage,
  handleChangeGasPrice,
}) => {
  return (
    <div>
      <form style={{ marginTop: "30px" }}>
        <div className="detailInput">
          <label htmlFor="mileage">Enter Mileage:</label>
          <input
            type="number"
            id="mileage"
            name="mileage"
            value={mileage}
            onChange={handleChangeMileage}
            required
          />
        </div>
        <div className="detailInput">
          <label htmlFor="avgGasPrice">Enter Gas Price:</label>
          <input
            type="number"
            id="gasPrice"
            name="gasPrice"
            value={gasPrice}
            onChange={handleChangeGasPrice}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default MileageForm;
