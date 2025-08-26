import './App.css'
import { createEmptyGrid } from './utils/sudokuUtils.ts';
import Grid from './components/Grid.tsx';
import { useDispatch } from 'react-redux';
import { setCellValue } from './store/gridSlice.ts';
import PieceCell from './components/pieces/PieceCell.tsx';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { useEffect, useState } from 'react';


function App() {
  const dispatch = useDispatch();
  const [placements, setPlacements] = useState<{ [cellId: string]: string | null }>({});

  useEffect(() => {
    const sudokuGrid = createEmptyGrid();

    sudokuGrid.forEach((row, rowIndex) => {
      row.forEach((value, colIndex) => {
        dispatch(setCellValue({ row: rowIndex, col: colIndex, value }));
      });
    });
  }, [dispatch]);

  // const handleDragEnd = (event: any) => {
  //   const { active, over } = event;

  //   if (over && active) {
  //     const droppableId = over.id;
  //     const draggableId = active.id;

  //     setPlacements((prev) => {
  //       // If already occupied, don't allow drop
  //       if (prev[droppableId]) return prev;

  //       return {
  //         ...prev,
  //         [droppableId]: draggableId
  //       };
  //     });
  //   }
  //   console.log(placements);
  // };

  return (
      <DndContext
        onDragEnd={handleDragEnd}
        collisionDetection={closestCenter}
      >
        <Grid />
        <PieceCell value={2} />
      </DndContext>

  );
}

export default App;
