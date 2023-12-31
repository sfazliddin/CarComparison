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
  const car1 = new Car("Ford", "Escape", 2022, 20500, 29, 37, 33);
  const car2 = new Car("Toyota", "Camry", 2022, 20500, 29, 37, 33);
  const car3 = new Car("Honda", "Accord", 2022, 20500, 29, 37, 33);
  const car4 = new Car("BMW", "X7", 2022, 20500, 29, 37, 33);
  return (
    <>
      <h1>Efficiency Comparison</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        <div style={{ flex: "20%", padding: "5px" }}>
          <h3> </h3> Car 1
        </div>
        <div style={{ flex: "20%", padding: "5px" }}>
          <h3> </h3> Car 2
        </div>
        <div style={{ flex: "20%", padding: "5px" }}>
          <h3> </h3> Car 3
        </div>
        <div style={{ flex: "20%", padding: "5px" }}>
          <h3> </h3> Car 4
        </div>
      </div>
    </>
  );
};
export default EfficiencyComparison;
