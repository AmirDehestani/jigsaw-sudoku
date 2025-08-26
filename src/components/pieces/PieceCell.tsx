import Draggable from "../Draggable";

const PieceCell = ({value} : {value: number}) => {
    return (
        <Draggable>
            <div
                style={{
                    fontSize: "24px",
                    border: "1px solid #ccc",
                    height: "50px",
                    width: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                }}
                >
                    {value}
            </div>
        </Draggable>
    );
};

export default PieceCell;