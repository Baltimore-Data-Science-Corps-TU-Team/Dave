import 'date-fns';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { format, isValid } from 'date-fns';
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

export default function DateSelectors(
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange
    ) {

    const classes = useStyles();

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
                    value={(endDate) ? endDate : new Date()}
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
