import React, { useState } from "react";
import Bulbs from "./Bulbs";
import PatternSelector from "./PatternSelector";

const App = () => {

  const [selectedPattern, setSelectedPattern] = useState(null);

  const handlePatternSelect = (pattern) => {
    setSelectedPattern(pattern);
  };

  return (
    <>
      <h1>Select a pattern</h1>
      <PatternSelector onPatternSelect={handlePatternSelect} />
      {selectedPattern ? <Bulbs pattern={selectedPattern} /> : null}
    </>
  );
};


export default App;
