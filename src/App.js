import React, {useState, lazy, Suspense ,useMemo, useCallback, useEffect, useRef} from 'react';
import Button from './Button'
const Text = lazy(() => delayForDemo(import('./Text.js')));

function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }
const App = () => {
    const [showText, toggleText] = useState(false)

    return <>
        <button onClick={() => {toggleText((prev) => !prev)}}>Toggle Text</button>
        
        {showText && <Suspense fallback={<div>I am loading</div>}>
            <Text>Hello guys!</Text>
        </Suspense>}
    </>
}

export default App