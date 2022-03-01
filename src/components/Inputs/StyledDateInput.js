import { useContext } from 'react';
import { DatePicker } from '@mantine/dates';
import { ThemeContext } from '../Contexts/ThemeContext';
import dayjs from 'dayjs';

const StyledDateInput = ({ date, setDate, error, setError }) => {
    const { currentTheme } = useContext(ThemeContext);

    // On change handler
    const onChange = (val) => {
        setDate(val);
        setError(false);
    }

    return(
        <DatePicker
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
            allowLevelChange={false}
            minDate={dayjs(new Date()).startOf('day').toDate()}
            maxDate={dayjs(new Date()).endOf('year').toDate()}
            error={error}
            value={date}
            onChange={(val) => onChange(val)}
            label='Date of Booking'
            placeholder='Choose date'
            required
        />
    )
};

export default StyledDateInput;