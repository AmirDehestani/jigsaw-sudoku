import { createSlice } from "@reduxjs/toolkit";
import type { CellValue } from "../types";

export interface GridState {
    [key: string]: CellValue;
}

const initialState: GridState = Object.fromEntries(
    Array.from({ length: 81 }, (_, i) => {
        const row = Math.floor(i / 9);
        const col = (i % 9);
        return [`${row}-${col}`, null];
    })
);

const gridSlice = createSlice({
    name: "grid",
    initialState: {
        values: initialState,
    },
    reducers: {
        setCellValue: (state, action) => {
            const { row, col, value } = action.payload;
            state.values[`${row}-${col}`] = value;
        },
        resetGrid: (state) => {
            state.values = Object.fromEntries(
                Array.from({ length: 81 }, (_, i) => {
                    const row = Math.floor(i / 9);
                    const col = (i % 9);
                    return [`${row}-${col}`, null];
                })
            );
        },
    },
});

export const { setCellValue, resetGrid } = gridSlice.actions;

export default gridSlice.reducer;
