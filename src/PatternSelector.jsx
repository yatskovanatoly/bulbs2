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
        0,1,0,1,
        0,0,1,0,
        0,1,0,0,
        1,0,0,0],
};

const PatternSelector = ({ onPatternSelect }) => {
  const [selectedPattern, setSelectedPattern] = useState(null);

  const handleInputChange = (event) => {
    const input = event.target.value.toUpperCase();
    if (input in patterns) {
      setSelectedPattern(input);
      onPatternSelect(patterns[input]);
    } else {
      setSelectedPattern(patterns[0]);
      onPatternSelect(patterns[0]);
    }
  };

  return (
    <div>
      <label htmlFor="pattern-input">Enter a letter to select a pattern:</label>
      <input type="text" id="pattern-input" onChange={handleInputChange} />
    </div>
  );
};

export default PatternSelector;
