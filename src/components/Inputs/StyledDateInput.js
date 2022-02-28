import { useContext } from 'react';
import { DatePicker } from '@mantine/dates';
import { ThemeContext } from '../Contexts/ThemeContext';

const StyledDateInput = ({ date, setDate }) => {
    const { currentTheme } = useContext(ThemeContext);

    return(
        <DatePicker
            styles={{
                root: {
                    width: 350,
                    maxWidth: 500
                },
                input: {
                    backgroundColor: currentTheme === 'light' ? '#E9EAF0' : '#24272C',
                    color: currentTheme === 'light' ? '#757E95' : '#7F8493',
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
            value={date}
            onChange={setDate}
            label='Date of Booking'
            placeholder='Choose date'
            required
        />
    )
};

export default StyledDateInput;