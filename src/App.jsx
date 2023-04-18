import React, { useState } from "react";
import Bulbs from "./Bulbs";
import {PatternSelector, patterns} from "./PatternSelector";


const App = () => {

  const [selectedPattern, setSelectedPattern] = useState([patterns[''],patterns[''],patterns[''],patterns['']]);

  const handlePatternSelect = (patternToHandle) => {
    setSelectedPattern(patternToHandle);
  };

  console.log(selectedPattern)
  return (
    <>
      <div className='screen-container'>
        {selectedPattern.map(el => <Bulbs pattern={el} />)}
      </div>
        <PatternSelector onPatternSelect={handlePatternSelect} />
    </>
  );
};


export default App;