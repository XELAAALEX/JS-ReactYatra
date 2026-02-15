// import React from "react";
// import {Button} from "./Button";
// import {Input} from "./Input";
// import {Counter} from "./counter";
// import { ButtonWithTooltip } from "./ButtonWithTooltip";

// const App = () => {
//     // const [count, setCount] = React.useState(0);
//     // const decrementFunction = () => {
//     //     if(count > 0)
//     //     setCount(count - 1)
//     // };
//     // const incrementFunction = (value) => {
//     //     setCount(count + 1)
//     // }
//     return (
//     <>
//     {/* <Button text="[ Decrement ]" onClick={decrementFunction} />
//     <h1>{count}</h1>
//     <Button text="[ Increment ]" onClick={incrementFunction} /> */}
//     {/* <Counter/> */}
//     <ButtonWithTooltip
//         tooltipContent={
//           <div>
//             This tooltip does not fit above the button.
//             <br />
//             This is why it's displayed below instead!
//           </div>
//         }
//       >
//         Hover over me (tooltip above)
//       </ButtonWithTooltip>
//       <div style={{ height: 50 }} />
//       <ButtonWithTooltip
//         tooltipContent={
//           <div>This tooltip fits above the button</div>
//         }
//       >
//         Hover over me (tooltip below)
//       </ButtonWithTooltip>
//       <div style={{ height: 50 }} />
//       <ButtonWithTooltip
//         tooltipContent={
//           <div>This tooltip fits above the button</div>
//         }
//       >
//         Hover over me (tooltip below)
//       </ButtonWithTooltip>
//     </>
//     )
// }

// export default App;

import React, {useState, useCallback, useEffect, useRef} from 'react';
import Timer from './Timer.js';
import Input from './Input.js';
const App = () => {
    let myLocal = 0
    console.log("myLocal", myLocal)
    const ref = useRef(0)
    console.log("ref.current", ref.current)
    const [myCount, setCount] = useState(0)

    const inputRef = useRef(null)

    return <>
      <button onClick={() => {myLocal+= 1}}>Change local variable</button>
      <button onClick={() => {ref.current += 1}}>Change ref</button>
      <button onClick={() => {setCount((prevCount) => prevCount + 1)}}>Change state</button>


                  <div>
                        <span>Local var: {myLocal}</span><br/>
                        <span>ref: {ref.current}</span><br/>
                        <span>state variable: {myCount}</span><br/>
                  </div>
                  {/*
                        We can see that changing the local variable does not trigger a re-render, so the updated value is not reflected in the UI
                        Changing the ref also does not trigger a re-render, so the updated value is not reflected in the UI
                        Changing the state variable triggers a re-render, so the updated value is reflected in the UI
                  */}

                  <h4>Timer example</h4>
                  <Timer>This is my timer</Timer>
                  {/*
                        We can see that the timer is running and updating the counter every second, but when we click the stop button, the timer stops and the counter does not update anymore
                        This is an example of how we can use useRef to store a mutable value that does not trigger a re-render when it changes, and we can use it to store the interval ID and clear it when needed
                        This is also an example of how we can use useEffect to set up a side effect (the timer) and clean it up when the component unmounts or when the dependencies change
                        In this case, we only want to set up the timer once when the component mounts, so we pass an empty array as the dependency list, and we return a cleanup function that clears the interval when the component unmounts
                        This way, we can ensure that we do not have any memory leaks or unwanted side effects when the component is removed from the DOM
                  */}
       
                  <h4>DOM example</h4>
                  {/*
                        Here we are using the Input component and forwarding the ref to it, so that we can access the input element in the App component and call focus on it when the button is clicked
                  */}
                  <Input ref={inputRef} />
                  <button onClick={() => {
                        console.log(inputRef.current.getBoundingClientRect())
                        if (inputRef.current) inputRef.current.focus()
                  }}>Focus the inputbox</button>
                  {/*
                        Here we are using ref to directly access the DOM element and call focus on it
                        This is an example of how we can use ref to access the DOM element and perform some action on it, without using state or props to trigger a re-render
                        This is useful when we want to interact with the DOM directly, such as focusing an input, measuring an element's size or position, or integrating with third-party libraries that require a DOM node
                  */}
    </>
}

export default App