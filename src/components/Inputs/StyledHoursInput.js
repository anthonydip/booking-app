import { useContext } from 'react';
import { NumberInput } from '@mantine/core';
import { ThemeContext } from '../Contexts/ThemeContext';

const StyledHoursInput = ({ hours, setHours, error, setError }) => {
    const { currentTheme } = useContext(ThemeContext);

    // On change handler
    const onChange = (val) => {
        setHours(val);
        setError(false);
    }

    return(
        <NumberInput
            styles={{
                input: {
                    backgroundColor: currentTheme === 'light' ? '#f4f5f8' : '#121416',
                    color: currentTheme === 'light' ? '#757E95' : '#d6dade',
                    transition: 'all 0.50s linear'
                },
                label: {
                    color: currentTheme === 'light' ? '#757E95' : 'white',
                    transition: 'all 0.50s linear'
                },
                controlUp: {
                    // Dark theme style
                    '::after': {
                        borderWidth: currentTheme === 'dark' && '0 5px 5px 5px',
                        borderColor: currentTheme === 'dark' && 'transparent transparent #e6e9eb transparent'
                    }
                },
                controlDown: {
                    // Dark theme style
                    '::after': {
                        borderWidth: currentTheme === 'dark' && '5px 5px 0 5px',
                        borderColor: currentTheme === 'dark' && '#e6e9eb transparent transparent transparent'
                    }
                }
            }}
            sx={{
              marginTop: 10,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            value={hours}
            error={error}
            onChange={(val) => onChange(val)}
            placeholder='Hours'
            label='Hours for booking'
            min={0}
            max={720}
            required
          />
    );
};

export default StyledHoursInput;