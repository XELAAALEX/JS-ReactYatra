import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { createPortal } from "react-dom";


export const Tooltip = ({ targetPosition, children }) => {
    const { left, top, right, bottom } = targetPosition;
    const tooltipRef = useRef(null);
    const [tooltipHeight, setTooltipHeight] = useState(0);

    useLayoutEffect(() => {
        const {height} = tooltipRef.current.getBoundingClientRect();
        setTooltipHeight(height);
    })
    let x = 0;
    let y = 0;

    if(targetPosition !== null){
        x = left
        y = top-tooltipHeight
        if(y < 0){
            y = bottom
        }
    }
    return createPortal(
        <div  
        ref = {tooltipRef}
        style={{
        position: 'absolute',
        pointerEvents: 'none',
        left: 0,
        top: 0,
        transform: `translate3d(${x}px, ${y}px, 0)`
      }}>
        {children}
        </div>, document.body
    )
}