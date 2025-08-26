import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import React, {useId} from 'react';

const Draggable = ({children} : {children: React.ReactNode}) => {
    const id = useId();
    const {attributes, listeners, setNodeRef, transform} = useDraggable({id});
    const style = {
        transform: CSS.Translate.toString(transform),
        width: "fit-content",
        height: "fit-content"
    };
    
    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {children}
        </div>
    );
};

export default Draggable;