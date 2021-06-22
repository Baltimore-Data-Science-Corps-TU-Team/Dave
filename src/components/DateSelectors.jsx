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

export default function DateSelectors({ handleEndDateChange, handleStartDateChange, ...props }) {

    const { startDate, endDate } = props.state
    console.log("start date ->", startDate)
    console.log("end date ->", endDate)
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
                    minDateMessage="Date cannot be in the past"
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
