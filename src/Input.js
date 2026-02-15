// import React from "react";


// export const Input = (props) =>{
//     let {onChange, value} = props;
//     console.log("Input props:", props);
//     const [val, setVal] = React.useState(value);
//     const handleInputChange = (e) => {
//         setVal(e.target.value);
//         onChange?.(e.target.value);
//     };

//     return(
//         <>
//         <input value={val} onChange={(e) => handleInputChange(e)} />
//         </>
//     )
// }

import React, {forwardRef } from 'react';
//  Here we are using forwardRef to forward the ref from parent component to the input element in this component. This allows the parent component to directly access the DOM node of the input element, which can be useful for tasks like focusing the input or reading its value without needing to pass down additional props or state.
//  we can use different variablbles to send the ref to the child component without using the forwardRef, but it is a common pattern to use forwardRef when we want to allow the parent component to access the DOM node of a child component, and it is a more concise and cleaner way to achieve this compared to using additional props or state to pass down the ref.
//  Here the Parent is App component and the child is Input component, we are forwarding the ref from App to Input so that we can access the input element in App and call focus on it when the button is clicked.
const Input = forwardRef((props, ref) => {
    console.log("input box props are: ", props)
    return <input ref={ref} type="text"/>
})

export default Input