import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    background-color: ${({ theme }) => theme === 'light' ? `#E9EAF0` : `#24272C`};
    margin: 10px;
    height: 30px;
    width: 50px;
    text-align: center;
    box-shadow: ${({ theme }) => theme === 'light' ? `inset -8px -8px 16px rgba(255, 255, 255, 0.7), inset 8px 8px 16px rgba(189, 200, 223, 0.7)` : `inset -8px -8px 16px rgba(255, 255, 255, 0.05), inset 8px 8px 16px rgba(0, 0, 0, 0.25)`};
    border-radius: 40px;
    border: none;
    color: ${({ theme }) => theme === 'light' ? `#757E95` : `white`};
    font-weight: bold;
    transition: all 0.50s linear;
`

const StyledLabel = styled.label`
    font-weight: bold;
`

const SunkenHoursInput = ({ theme }) => {
    return(
        <div>
            <StyledLabel for='hours'>Hours for booking:</StyledLabel>
            <StyledInput
                id='hours'
                name='hours'
                type='number'
                placeholder='0'
                step={1}
                min={0}
                theme={theme}
            />
        </div>
    );
};

export default SunkenHoursInput;