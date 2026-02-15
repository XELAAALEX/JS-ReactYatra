import React from "react";
import {Button} from "./Button";
import {Input} from "./Input";
import {Counter} from "./counter";
import { ButtonWithTooltip } from "./ButtonWithTooltip";

const App = () => {
    // const [count, setCount] = React.useState(0);
    // const decrementFunction = () => {
    //     if(count > 0)
    //     setCount(count - 1)
    // };
    // const incrementFunction = (value) => {
    //     setCount(count + 1)
    // }
    return (<>
    {/* <Button text="[ Decrement ]" onClick={decrementFunction} />
    <h1>{count}</h1>
    <Button text="[ Increment ]" onClick={incrementFunction} /> */}
    {/* <Counter/> */}
    <ButtonWithTooltip
        tooltipContent={
          <div>
            This tooltip does not fit above the button.
            <br />
            This is why it's displayed below instead!
          </div>
        }
      >
        Hover over me (tooltip above)
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip
        tooltipContent={
          <div>This tooltip fits above the button</div>
        }
      >
        Hover over me (tooltip below)
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip
        tooltipContent={
          <div>This tooltip fits above the button</div>
        }
      >
        Hover over me (tooltip below)
      </ButtonWithTooltip>
    </>)
}

export default App;