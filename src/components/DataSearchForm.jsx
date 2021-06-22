import { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import DateSelectors from './DateSelectors';
import CrimeSelect from './CrimeSelect';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing(0),
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
}));

export default function DataSearchForm({ handleCrimeDescriptionChange, ...props}) {
    const { crimeDescription } = props.state
    const classes = useStyles();
    
    return (
        <form className={classes.form} noValidate>
            <FormControl className={classes.formControl}>
                <DateSelectors
                    {...props}
                />
                <br />
                <CrimeSelect
                    crimeDescription={crimeDescription}
                    handleCrimeDescriptionChange={handleCrimeDescriptionChange}
                />
            </FormControl>
        </form>
    )
}