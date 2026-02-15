import React, {useMemo} from 'react';
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
// Here we can also use memoization to avoid generating the table again and again when the component re-renders. We can use useMemo hook for that. It will only re-generate the table when the num prop changes, otherwise it will return the cached value.

// We can also have momo from react to memoize the component itself, so that it only re-renders when the props change, otherwise it will return the cached component. This can be useful if the component is expensive to render and we want to avoid unnecessary re-renders.

// then why we are here using useMemo instead of memo? because we want to memoize the result of the generateTable function, which is an array of JSX elements, and we want to avoid re-generating the table when the num prop does not change. If we use memo, it will only memoize the component itself, but it will still call the generateTable function every time the component re-renders, which can be expensive if the function is slow. By using useMemo, we can ensure that the generateTable function is only called when the num prop changes, and we can return the cached value when it does not change, which can improve the performance of our component.

const PrintTable =(props) => {
    const {num} = props
    const table = useMemo(() => generateTable(num), [num])
    console.log(table)
    return <>
        {table}
    </>
}

export default PrintTable;