function Matrix({ activeDiv, pattern }) {
  const matrix = Array.from({ length: 20 }, () => Array.from({ length: 6 })); //creates an array with 20 rows and 6 columns
  
  return (
    <div className="matrix">
      {matrix.map((col, colIndex) => (
        <div key={colIndex} className={`column c${colIndex}`}>
          {col.map((row, rowIndex) => {
            const isActive = `r${rowIndex}c${colIndex}` === activeDiv || pattern;
            return (
              <div key={`${colIndex}-${rowIndex}`} className={`row ${isActive ? "active" : ""}`} id={`r${rowIndex}c${colIndex}`} />
            );
          })}
        </div>
      ))}
    </div>
  );
}


export default Matrix;