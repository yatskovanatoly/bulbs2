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

const PatternSelector = ({ onPatternSelect }) => {
  const handleInputChange = (event) => {
    const input = event.target.value.toUpperCase().split('');
    let allPatterns = []
    for (let i = 0; i < input.length; i++){
      if (input[i] in patterns) {
        allPatterns.push(patterns[input[i]]);
      } else {
        allPatterns.push(patterns['']);
      }
    }
    onPatternSelect(allPatterns)
  };

  return (
    <div className="input">
      <input type="text" id="pattern-input" onChange={handleInputChange} />
    </div>
  );
};

export default PatternSelector;
