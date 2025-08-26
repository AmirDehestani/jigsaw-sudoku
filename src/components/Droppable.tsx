import { useDroppable } from "@dnd-kit/core";
import React, {useId} from "react";

const Droppable = ({ children } : { children: React.ReactNode }) => {
    const id = useId();
    const { isOver, setNodeRef } = useDroppable({id});

    return (
        <div ref={setNodeRef} style={{ position: 'relative' }}>
            {children}
            {isOver && (
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 123, 255, 0.3)',
                pointerEvents: 'none'
            }} />
            )}
        </div>
    );
};

export default Droppable;
