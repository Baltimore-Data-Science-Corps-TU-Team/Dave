import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import {MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0.5),
            width: '23ch',
        },
    },
}));

export default function DateSelectors({ startDate, endDate, handleEndDateChange, handleStartDateChange }) {

    console.log("start date ->", handleStartDateChange)
    const classes = useStyles();

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid className={classes.root} container justify="space-around">
                <KeyboardDatePicker
                    size="small"
                    margin="normal"
                    id="start-date"
                    label="Start Date"
                    format="yyyy-MM-dd"
                    allowKeyboardControl={false}
                    maxDate={new Date()}
                    value={startDate}
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
                    format="yyyy-MM-dd"
                    value={endDate}
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
