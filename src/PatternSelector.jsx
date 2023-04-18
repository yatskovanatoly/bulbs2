export const patterns = {
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
  W: [1,0,0,0,1,
      1,0,0,0,1,
      1,0,0,0,1,
      1,0,1,0,1,
      1,1,0,1,1,
      1,0,0,0,1],
  N: [1,0,0,1,
      1,0,0,1,
      1,1,0,1,
      1,0,1,1,
      1,0,0,1,
      1,0,0,1],
  I: [1,1,1,1,
      0,1,1,0,
      0,1,1,0,
      0,1,1,0,
      0,1,1,0,
      1,1,1,1],
};

export const PatternSelector = ({ onPatternSelect }) => {
const handleInputChange = (event) => {
  const input = event.target.value.toUpperCase().split('');
  while(input.length < 4) input.push('')
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
    <input type="text" id="pattern-input" maxLength={4} onChange={handleInputChange} />
  </div>
);
};