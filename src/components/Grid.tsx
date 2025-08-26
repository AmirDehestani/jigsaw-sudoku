import Box from "./Box";

const Grid = () => {
    const numberOfRows = 3;
    const numberOfCols = 3;

    return (
        <div style={{ display: "flex", flexDirection: "column", border: "2px solid #000" }}>
            {Array.from({ length: numberOfRows }, (_, rowIndex) => (
                <div key={rowIndex} style={{ display: "flex" }}>
                    {Array.from({ length: numberOfCols }, (_, colIndex) => (
                        <Box key={colIndex} row={rowIndex} col={colIndex} />
                    ))}
                </div>
            ))}
        </div>
    )

}

export default Grid;