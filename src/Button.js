import React from 'react';


export const Button = (props) => {
let {onClick, text} = props;
const handleOnClick = () => {
    onClick?.();
}
    
    return <button onClick={handleOnClick}>{text}</button>;
};