import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 'auto',
        },
    },
}));

export default function DateSelectors({ handleEndDateChange, handleStartDateChange, ...props }) {

    const { startDate, endDate } = props.state
    const classes = useStyles();

    return (
        <Grid container>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid className={classes.root} item xs={6}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        size="small"
                        margin="normal"
                        id="start-date"
                        label="Start Date"
                        format="yyyy-MM-dd"
                        maxDate={new Date()}
                        minDate={new Date('1970-01-01')}
                        minDateMessage="Date cannot be in the past"
                        value={startDate}
                        onChange={handleStartDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />

                </Grid>
                <Grid className={classes.root} item xs={6}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        size="small"
                        disableFuture
                        margin="normal"
                        id="end-date"
                        label="End Date"
                        format="yyyy-MM-dd"
                        value={endDate}
                        minDate={(startDate) ? new Date(startDate) : new Date('1970-01-01')}
                        onChange={handleEndDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </Grid>
    );
}
