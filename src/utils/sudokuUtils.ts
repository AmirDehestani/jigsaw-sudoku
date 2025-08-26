import type { CellValue, GridValue } from "../types";

function createEmptyGrid(): GridValue {
    // Initialize a 9x9 grid filled with null values
    return Array.from({ length: 9 }, () => Array(9).fill(null)) as GridValue;
}

function isValid(grid: CellValue[][], row: number, col: number, num: number): boolean {
    // Check row
    for (let x = 0; x < 9; x++) {
        if (grid[row][x] === num) return false;
    }
    // Check column
    for (let x = 0; x < 9; x++) {
        if (grid[x][col] === num) return false;
    }
    // Check 3x3 subgrid
    const startRow = row - (row % 3), startCol = col - (col % 3);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[i + startRow][j + startCol] === num) return false;
        }
    }
    return true;
}

function solveGrid(grid: GridValue): boolean {
    // Recursive backtracking to fill in the grid with valid numbers
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col] === null) {
                const nums = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
                for (const num of nums) {
                    if (isValid(grid, row, col, num)) {
                        grid[row][col] = num;
                        if (solveGrid(grid)) return true;
                        grid[row][col] = null;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateSudokuGrid() {
    const grid = createEmptyGrid();
    solveGrid(grid);
    return grid;
}

export {
    isValid,
    generateSudokuGrid
};