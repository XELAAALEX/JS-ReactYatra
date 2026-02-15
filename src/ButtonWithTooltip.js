import React, { useState, useEffect, useRef } from "react";
import { Tooltip } from "./Tooltip";

export const ButtonWithTooltip = ({ tooltipContent, children }) => {
    console.log(tooltipContent, children, "boom");
    const [targetPosition,setTargetPosition] = useState(null);
    const buttonref = useRef(null);
    const handleMousePointer = (e) => {
        const rect = buttonref.current.getBoundingClientRect();
        setTargetPosition({
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom
        });
    }
    return(
        <>
        <button 
        ref = {buttonref}
        onPointerEnter={handleMousePointer}
        onPointerLeave={()=>setTargetPosition(null)}>{children}</button>
        {targetPosition &&<Tooltip targetPosition={targetPosition}>{tooltipContent}</Tooltip>}
        </>
    )
}