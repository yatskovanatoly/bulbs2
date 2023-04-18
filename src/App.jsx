import React, { useState } from "react";
import Bulbs from "./Bulbs";
import PatternSelector from "./PatternSelector";

const App = () => {

  const [selectedPattern, setSelectedPattern] = useState([]);

  const handlePatternSelect = (pattern) => {
    setSelectedPattern(pattern);
  };

  return (
    <>
      <div className='screen-container'>
        {selectedPattern ? <Bulbs pattern={selectedPattern} /> : <Bulbs pattern={[]} />}      
      </div>
        <PatternSelector onPatternSelect={handlePatternSelect} />
    </>
  );
};


export default App;