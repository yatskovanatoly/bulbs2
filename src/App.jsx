import React, { useState } from "react";
import Bulbs from "./Bulbs";
import PatternSelector from "./PatternSelector";

const App = () => {

  const [selectedPattern, setSelectedPattern] = useState('');

  const handlePatternSelect = (patternToHandle) => {
    setSelectedPattern(patternToHandle);
  };

  const tablo = () => {
    return selectedPattern.map(el => <Bulbs pattern={el}  />)
  }

  console.log(selectedPattern)
  return (
    <>
      <div className='screen-container'>
        {selectedPattern ? selectedPattern.map(el => <Bulbs pattern={el} />) : null}
      </div>
        <PatternSelector onPatternSelect={handlePatternSelect} />
    </>
  );
};


export default App;