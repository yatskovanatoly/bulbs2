import React, { useState } from "react";

const patterns = {
    '':[0,0,0,0,
        0,0,0,0,
        0,0,0,0,
        0,0,0,0,
        0,0,0,0,
        0,0,0,0],
    S: [0,1,1,0,
        1,0,0,1,
        0,1,0,0,
        0,0,1,0,
        1,0,0,1,
        0,1,1,0],
    L: [1,0,0,0,
        1,0,0,0,
        1,0,0,0,
        1,0,0,0,
        1,0,0,0,
        1,1,1,1],
    A: [0,1,1,1,
        1,0,0,1,
        1,0,0,1,
        1,1,1,1,
        1,0,0,1,
        1,0,0,1],
    Y: [1,0,0,1,
        1,0,0,1,
        1,0,0,1,
        0,1,1,0,
        0,1,1,0,
        0,1,1,0],
};

const PatternSelector = ({ onPatternSelect = 'S'}) => {
  const [selectedPattern, setSelectedPattern] = useState(patterns[0]);

  const handleInputChange = (event) => {
    const input = event.target.value.toUpperCase();
    if (input in patterns) {
      setSelectedPattern(input);
      onPatternSelect(patterns[input]);
    } else {
      setSelectedPattern(patterns[0]);
      onPatternSelect(patterns[0]);
    }
    return input
  };

  return (
    <div className="input">
      <input value={handleInputChange} type="text" id="pattern-input" onChange={handleInputChange} />
    </div>
  );
};

export default PatternSelector;
