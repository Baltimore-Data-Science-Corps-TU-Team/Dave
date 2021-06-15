import 'date-fns';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { format, isValid } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0.5),
            width: '23ch',
        },
    },
}));

export default function MaterialUIPickers() {
    // The first commit of Material-UI
    const classes = useStyles();

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };
    const handleEndDateChange = (date) => {
        setEndDate(date);
    };
    console.log([startDate, endDate])
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid className={classes.root} container justify="space-around">
                <KeyboardDatePicker
                    size="small"
                    margin="normal"
                    id="start-date"
                    label="Start Date"
                    format="MM/dd/yyyy"
                    allowKeyboardControl={false}
                    maxDate={new Date()}
                    value={(startDate) ? startDate : null}
                    onChange={handleStartDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <KeyboardDatePicker
                    size="small"
                    disableFuture
                    margin="normal"
                    id="end-date"
                    label="End Date"
                    format="MM/dd/yyyy"
                    value={(endDate) ? endDate : null}
                    minDate={(startDate) ? new Date(startDate) : null}
                    onChange={handleEndDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
}
