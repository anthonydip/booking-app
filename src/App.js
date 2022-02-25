import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Import components
import Navbar from './components/Navbar';
import { GlobalStyles } from './components/GlobalStyles';
import { lightTheme, darkTheme } from './components/Themes';

const App = () => {
  const [theme, setTheme] = useState('light');

  // Light and dark theme state toggler
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme: darkTheme}>
      <GlobalStyles/>
      <div>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
