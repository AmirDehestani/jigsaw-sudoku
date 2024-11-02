import './components/Cell.component.js';
import './components/Box.component.js';
import './components/Grid.component.js';
import sudokuUtils from './utils/sudokuUtils.js';


document.addEventListener('DOMContentLoaded', () => {
    const grid = sudokuUtils.generateSudokuGrid();
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            document.getElementById(`${r}-${c}`).innerHTML = grid[r][c];
        }
    }
});
