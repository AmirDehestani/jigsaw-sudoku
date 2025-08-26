import './App.css'
import { generateSudokuGrid } from './utils/sudokuUtils.ts';
import Grid from './components/Grid.tsx';
import { useDispatch } from 'react-redux';
import { setCellValue } from './store/gridSlice.ts';


function App() {
  const sudokuGrid = generateSudokuGrid();
  const dispatch = useDispatch();

  sudokuGrid.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      dispatch(setCellValue({ row: rowIndex, col: colIndex, value }));
    });
  });

  return (
    <Grid />
  );
}

export default App;
