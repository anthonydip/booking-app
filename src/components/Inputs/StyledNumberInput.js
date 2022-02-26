import { useContext } from 'react';
import { NumberInput } from '@mantine/core';
import { ThemeContext } from '../Contexts/ThemeContext';

const StyledNumberInput = () => {
    const { currentTheme } = useContext(ThemeContext)

    return(
        <NumberInput
            styles={{
                input: {
                    backgroundColor: currentTheme === 'light' ? '#E9EAF0' : '#24272C',
                    color: currentTheme === 'light' ? '#757E95' : '#7F8493',
                    // border: 'none'
                },
                label: {
                    color: currentTheme === 'light' ? '#757E95' : 'white'
                }
            }}
            sx={{
              marginTop: 10,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            placeholder='Hours'
            label='Hours for booking'
            min={0}
            max={720}
            required
          />
    );
};

export default StyledNumberInput;