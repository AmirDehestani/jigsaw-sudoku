import Cell from "./Cell";

const Box = ({col, row} : {col: number, row: number}) => {
  const numberOfRows = 3;
  const numberOfCols = 3;

  const isDarker = () => {
    return (row + col) % 2 !== 1;
  };

  return (
    <div style={{ border: "2px solid #000" }}>
      {Array.from({ length: numberOfRows }, (_, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex" }}>
              {Array.from({ length: numberOfCols }, (_, colIndex) => (
                  <Cell key={colIndex} col={col*3 + colIndex} row={row*3 + rowIndex} darker={isDarker()} />
              ))}
          </div>
      ))}
    </div>
  );
};

export default Box;
