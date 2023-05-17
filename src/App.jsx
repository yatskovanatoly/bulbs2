import React, { useState } from "react";
import {PatternSelector, patterns} from "./PatternSelector";
import Screen from './Screen'


const App = () => {

  const [selectedPattern, setSelectedPattern] = useState([]);

  const handlePatternSelect = (patternToHandle) => {
    setSelectedPattern(patternToHandle);
  };

  console.log(selectedPattern)
  return (
    <>
        <Screen activeDiv={patterns} />

        <PatternSelector onPatternSelect={handlePatternSelect} />
    </>
  );
};


export default App;