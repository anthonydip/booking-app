import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Import context
import { ThemeContext } from './components/Contexts/ThemeContext';

// Import components
import Navbar from './components/Navbar/Navbar';
import StyledNumberInput from './components/Inputs/StyledNumberInput';
import { GlobalStyles } from './components/Theme/GlobalStyles';
import { lightTheme, darkTheme } from './components/Theme/Themes';

const Header = styled.h1`
  color: ${({ theme }) => theme === 'light' ? `#757E95` : `white`};
  font-size: 3em;
  text-align: center;
`

const BookingContainer = styled.div`
  background-color: ${({ theme }) => theme === 'light' ? `#E9EAF0` : `#24272C`};
  box-shadow: ${({ theme }) => theme === 'light' ? `inset -8px -8px 16px rgba(255, 255, 255, 0.7), inset 8px 8px 16px rgba(189, 200, 223, 0.7)` : `inset -8px -8px 16px rgba(255, 255, 255, 0.05), inset 8px 8px 16px rgba(0, 0, 0, 0.25)`};
  border-radius: 40px;
  border: none;
  transition: all 0.50s linear;
  display: flex;
  max-width: 700px; 
  height: 300px;
  margin-left: auto;
  margin-right: auto;
`



const App = () => {
  // NOTES:

  useEffect(() => {
    // Check for light/dark system settings or previous
  }, []);

  const [theme, setTheme] = useState('light');
  const [currentTheme, setCurrentTheme] = useState('light');

  // Light and dark theme state toggler
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    currentTheme === 'light' ? setCurrentTheme('dark') : setCurrentTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
        <GlobalStyles/>
        <div>
          <Navbar toggleTheme={toggleTheme} />
          <Header theme={theme}>Book with us!</Header>

          <p style={{ textAlign: 'center' }}> <span style={{ fontWeight: 'bold' }}>Monday - Friday:</span> $100 per hour</p>
          <p style={{ textAlign: 'center' }}><span style={{ fontWeight: 'bold' }}>Saturday - Sunday:</span> $150 per hour</p>

          <BookingContainer theme={theme}>
            {/* <SunkenHoursInput theme={theme} /> */}
            <StyledNumberInput />
          </BookingContainer>

        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
