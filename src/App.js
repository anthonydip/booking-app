import React, { useState, forwardRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import dayjs from 'dayjs';

// Import components
import Navbar from './components/Navbar/Navbar';
import StyledHoursInput from './components/Inputs/StyledHoursInput';
import StyledDateInput from './components/Inputs/StyledDateInput';
import StyledTimeInput from './components/Inputs/StyledTimeInput';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { GlobalStyles } from './components/Theme/GlobalStyles';
import { lightTheme, darkTheme } from './components/Theme/Themes';
import { ThemeContext } from './components/Contexts/ThemeContext';

// Styling for "Book with us!" header
const Header = styled.h1`
  color: ${({ theme }) => theme === 'light' ? `#757E95` : `white`};
  font-size: 3em;
  text-align: center;
`

// Container to hold fields for user inputs
const BookingContainer = styled.div`
  background-color: ${({ theme }) => theme === 'light' ? `#E9EAF0` : `#24272C`};
  box-shadow: ${({ theme }) => theme === 'light' ? `inset -8px -8px 16px rgba(255, 255, 255, 0.7), inset 8px 8px 16px rgba(189, 200, 223, 0.7)` : `inset -8px -8px 16px rgba(255, 255, 255, 0.05), inset 8px 8px 16px rgba(0, 0, 0, 0.25)`};
  border-radius: 40px;
  border: none;
  transition: all 0.50s linear;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 700px; 
  height: ${({ calculated }) => calculated ? `450px` : `300px`};
  margin-left: auto;
  margin-right: auto;
`

// Container to hold "Clear" and "Check Price" buttons
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  max-width: 700px; 
  height: 45px;
  gap: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`

// Container to hold the calculated price and display
const PriceContainer = styled.div`
  // background-color: blue;
  text-align: center;
  margin-top: 10px;
  height: 100%;
  ${({ visible }) => visible ? 
    `
      visibility: visible;
      transition: opacity 2s ease;
    `
    :
    `
      visibility: hidden;
      transition: opacity 2s ease;
      opacity: 0;
    `
  }

`

// Styling for "Clear" and "Check Price" buttons
const StyledButton = styled.button`
  background: ${({ theme }) => theme === 'light' ? `linear-gradient(153.43deg, #D9DAE3 17.71%, #F4F5F8 83.33%)` : `linear-gradient(320.11deg, #2F3339 14.78%, #15181C 95.73%)`};
  box-shadow: ${({ theme }) => theme === 'light' ? `-10px -10px 20px rgba(255, 255, 255, 0.7), 10px 10px 20px rgba(189, 200, 223, 0.7)` : `-6px -6px 12px rgba(255, 255, 255, 0.10), 6px 6px 12px rgba(0, 0, 0, 0.10)`};
  border-radius: 43px;
  border: none;
  width: 100%;
  max-width: 100px;
  color: ${({ theme }) => theme === 'light' ? `#757E95` : `#d6dade`};
  font-weight: bold;
  font-family: 'Varela Round', sans-serif;
  transition: all 0.25s linear;
  
  // Button press styles
  &:active {
    transform: scale(0.98);
    box-shadow: ${({ theme }) => theme === 'light' ? `-10px -10px 20px rgba(255, 255, 255, 0.7), 10px 10px 20px rgba(189, 200, 223, 0.7)` : `-6px -6px 12px rgba(255, 255, 255, 0.05), 6px 6px 12px rgba(0, 0, 0, 0.05)`};
  }
`

// MUI Alert for use with Snackbar
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const App = () => {
  // Default to light theme on page-load
  const [theme, setTheme] = useState('light');
  const [currentTheme, setCurrentTheme] = useState('light');

  // Snackbar open states
  const [openError, setOpenError] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  // Input and error states
  const [hours, setHours] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [hoursError, setHoursError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);

  // Calculation/price states and variables
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [calculated, setCalculated] = useState(false);
  const [price, setPrice] = useState(0);


  // Light and dark theme state toggler
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    currentTheme === 'light' ? setCurrentTheme('dark') : setCurrentTheme('light');
  }

  // Close handler for information snackbar
  const handleInfoClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenInfo(false);
  };

  // Close handler for error snackbar
  const handleErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };

  // Function to clear user inputs and application states
  const clear = () => {
    // Clear input states
    setHours();
    setDate(null);
    setTime();

    // Reset other application states
    setHoursError(false);
    setDateError(false);
    setTimeError(false);
    setOpenError(false);
    setCalculated(false);

    // Open information snackbar
    setOpenInfo(true);
  }

  // Function to calculate the price of the booking
  const checkPrice = () => {
    // Define valid boolean and reset error states
    var valid = true;
    setHoursError(false);
    setDateError(false);
    setTimeError(false);
    setOpenError(false);
    setOpenInfo(false);

    // Check for missing booking hours
    if(!hours){
      setHoursError(true);
      valid = false;
    }

    // Check for missing booking date
    if(!date){
      setDateError(true);
      valid = false;
    }

    // Check for missing booking time
    if(!time){
      setTimeError(true);
      valid = false;
    }

    // Calculate booking prices
    if(valid){
      var totalPrice = 0;

      // Loop through from time of booking to hours booked
      for(let i = 0; i < hours; i++){
        let tempDT = dayjs(date).add(dayjs(time).hour(), 'hour').add(i, 'hour');

        // If weekend, add weekend pricing
        if(dayjs(tempDT).day() === 0 || dayjs(tempDT).day() === 6){
          console.log("+ $150");
          totalPrice += 150;
        }
        // If weekday, add weekday pricing
        else{
          console.log("+ $100");
          totalPrice += 100;
        }
      }

      // Set states for rendering
      setStartDate(dayjs(date).add(dayjs(time).hour(), 'hour').format('MMMM D, YYYY h:mm A'));
      setEndDate(dayjs(date).add(dayjs(time).hour(), 'hour').add(hours, 'hour').format('MMMM D, YYYY h:mm A'));
      setPrice(totalPrice);
      setCalculated(true);
    }
    // Missing values, error
    else{
      setOpenInfo(false);
      setOpenError(true);
    }
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
          <p style={{ textAlign: 'center' }}>Maximum booking of two weeks (336 hours)</p>

          <BookingContainer theme={theme} calculated={calculated}>
            <StyledHoursInput hours={hours} setHours={setHours} error={hoursError} setError={setHoursError} />
            <StyledDateInput date={date} setDate={setDate} error={dateError} setError={setDateError}/>
            <StyledTimeInput time={time} setTime={setTime} error={timeError} setError={setTimeError}/>

            <PriceContainer visible={calculated}>
              <hr style={{ width: '75%' }}/>
              <p style={{ fontSize: 18, fontWeight: 'bold' }}>Booking Pricing</p>
              <p style={{fontWeight: 'bold'}}>{startDate.toString()} - {endDate.toString()}</p>
              <p style={{fontWeight: 'bold'}}>Total Price: ${price}</p>
            </PriceContainer>

          </BookingContainer>
          
          <ButtonsContainer>
            <StyledButton theme={theme} onClick={clear} >Clear</StyledButton>
            <StyledButton theme={theme} onClick={checkPrice} >Check Price</StyledButton>
          </ButtonsContainer>

          {/* Info snackbar on clear */}
          <Snackbar open={openInfo} autoHideDuration={3000} onClose={handleInfoClose}>
            <Alert onClose={handleInfoClose} severity="info" sx={{ width: '100%' }}>
              Cleared current booking!
            </Alert>
          </Snackbar>

          {/* Error snackbar on check price error */}
          <Snackbar open={openError} autoHideDuration={3000} onClose={handleErrorClose}>
            <Alert onClose={handleErrorClose} severity="error" sx={{ width: '100%' }}>
              All required inputs must be filled!
            </Alert>
          </Snackbar>

        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
