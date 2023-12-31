import { useState } from "react";

import EfficiencyComparison from "./pages/EfficiencyComparison";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <EfficiencyComparison />
    </>
  );
}

export default App;
