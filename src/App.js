import React, {useState} from 'react';
import Heading from './Heading';
import Navbar from './Navbar';
import {ThemeContext} from './context'

const App = () => {
    const [theme, setTheme] = useState('dark');

    return <ThemeContext.Provider value={[theme, setTheme]}>
          <Navbar/>
          <Heading/>
    </ThemeContext.Provider>
}

export default App