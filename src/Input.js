import React from "react";


export const Input = (props) =>{
    let {onChange, value} = props;
    console.log("Input props:", props);
    const [val, setVal] = React.useState(value);
    const handleInputChange = (e) => {
        setVal(e.target.value);
        onChange?.(e.target.value);
    };

    return(
        <>
        <input value={val} onChange={(e) => handleInputChange(e)} />
        </>
    )
}