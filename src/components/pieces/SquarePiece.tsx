

const SquarePiece = ({values} : {values: number[]}) => {
    const [val1, val2, val3, val4] = values;
    return (
        <div>
            <div>{val1}</div>
            <div>{val2}</div>
            <div>{val3}</div>
            <div>{val4}</div>
        </div>
    );

}