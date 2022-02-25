import React from 'react';
import styled from 'styled-components';

// Import components
import IconButton from '@mui/material/IconButton';

// Import icons
import GradientDarkModeIcon from './GradiantDarkModeIcon';
import GradientLightModeIcon from './GradientLightModeIcon';

const Container = styled.div`
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px; 
    width: 60%;
    padding: 10px;
    box-shadow: ${({ theme }) => theme === 'light' ? `-18px -18px 36px rgba(255, 255, 255, 0.7), 18px 18px 36px rgba(189, 200, 223, 0.7)` : `-18px -18px 36px rgba(255, 255, 255, 0.25), 18px 18px 36px rgba(0, 0, 0, 0.25);`};
    border-radius: 24px;
`

const Title = styled.span`
    font-size: 2em;
`

const Navbar = ({ theme, toggleTheme }) => {
    return(
        <Container theme={theme}>
            <Title>Mates</Title>

            <IconButton
                onClick={toggleTheme}
                sx={{
                    bottom: 5
                }}
            >
                {theme ===  'light' ? (
                    <GradientLightModeIcon />
                ) : (
                    <GradientDarkModeIcon />
                )}
            </IconButton>
        </Container>
    );
};

export default Navbar;