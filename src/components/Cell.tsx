import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useState } from "react";

const Cell = ({col, row, darker = false} : {col: number, row: number, darker?: boolean}) => {
  const [hovered, setHovered] = useState(false);
  const value = useSelector((state: RootState) => state.grid.values[`${row}-${col}`]);

  const getBackgroundColor = () => {
    if (hovered) {
      return "#ddd";
    }
    return darker ? "#eee" : "#fff";
  };

  return (
    <div 
      style={{
        fontSize: "24px",
        border: "1px solid #ccc",
        height: "50px",
        width: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: getBackgroundColor(),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {value}
    </div>
  );
};

export default Cell;
