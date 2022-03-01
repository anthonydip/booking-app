import { useContext } from 'react';
import { TimeInput } from "@mantine/dates";
import { ThemeContext } from '../Contexts/ThemeContext';

const StyledTimeInput = ({ time, setTime, error }) => {
    const { currentTheme } = useContext(ThemeContext);

    return(
        <TimeInput 
            styles={{
                root: {
                    width: '100%',
                    maxWidth: 350
                },
                input: {
                    backgroundColor: currentTheme === 'light' ? '#f4f5f8' : '#121416',
                    color: currentTheme === 'light' ? '#757E95' : '#d6dade',
                    transition: 'all 0.50s linear'
                    // border: 'none'
                },
                label: {
                    color: currentTheme === 'light' ? '#757E95' : 'white',
                    transition: 'all 0.50s linear'
                },
            }}
            sx={{
                marginTop: 10,
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
            value={time}
            error={error}
            onChange={setTime}
            label='Time of Booking'
            format='12'
            required
            clearable
        />
    );
};

export default StyledTimeInput;