import React, {useMemo, memo} from 'react';
const generateTable = (number) => {
    const arr = []
    let startTime = performance.now();
    while (performance.now() - startTime < 800) {
      // Do nothing for 500 ms to emulate extremely slow code
    }
    for (let i = 1; i <= 10; i++) {
        arr.push(<div>{number * i}</div>)
    }
    return arr
}
// Here we are using memo to prevent unnecessary re-rendering of PrintTable component when the props have not changed. The generateTable function is called every time the component renders, which can be expensive if the number prop changes frequently. By using memo, we can ensure that the component only re-renders when the props actually change, improving performance.

const PrintTable = memo((props) => {
    const {num, obj, val, arr} = props
    // const table = useMemo(() => generateTable(num), [num])
    const table = generateTable(num)
    console.log(table)
    return <>
        {table}
        {obj?.channel}
        <br/>
        {val}
        <br/>
        {arr?.map((item) => <span>{item}</span>)}
    </>
})

export default PrintTable;