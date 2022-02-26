import React, { useContext } from 'react';
import styled from 'styled-components';

// Import components
import IconButton from '@mui/material/IconButton';
import { ThemeContext } from '../Contexts/ThemeContext';

// Import icons
import GradientDarkModeIcon from '../Icons/GradiantDarkModeIcon';
import GradientLightModeIcon from '../Icons/GradientLightModeIcon';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px; 
    width: 60%;
    padding: 10px;
    box-shadow: ${({ theme }) => theme === 'light' ? `-18px -18px 36px rgba(255, 255, 255, 0.7), 18px 18px 36px rgba(189, 200, 223, 0.7)` : `-18px -18px 36px rgba(255, 255, 255, 0.05), 18px 18px 36px rgba(0, 0, 0, 0.25)`};
    border-radius: 24px;
`

const Title = styled.span`
    color: ${({ theme }) => theme === 'light' ? `#757E95` : `white`};
    font-size: 2em;
    margin-left: 10px;
`

const Navbar = ({ toggleTheme }) => {
    const { currentTheme } = useContext(ThemeContext)

    return(
        <Container theme={currentTheme}>
            <Title theme={currentTheme}>Mates</Title>

            <IconButton
                onClick={toggleTheme}
                sx={{ marginLeft: 'auto', marginRight: '10px' }}
            >
                {currentTheme ===  'light' ? (
                    <GradientDarkModeIcon />
                ) : (
                    <GradientLightModeIcon />
                )}
            </IconButton>
        </Container>
    );
};

export default Navbar;