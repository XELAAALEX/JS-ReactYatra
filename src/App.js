import React, {useState} from 'react';
import { createPortal } from 'react-dom';
import Button from './Button'

const App = () => {
    const [showModal, toggleModal] = useState(false);

    return <>
      Hey i am inside root <button onClick={() => toggleModal((prev) => !prev)}>Toggle Modal</button>

      {showModal && createPortal(<div>This is modal content</div>, document.body)}
      {/* {showModal && <div>This is modal content</div>} */}
    </>
}

export default App