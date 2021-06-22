/* eslint-disable no-use-before-define */
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { CRIME_OPTIONS } from '../constants';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
    },
}));

export default function CrimeSelect({ crimeDescription, handleCrimeDescriptionChange }) {

    const classes = useStyles();
    console.log("crime description ->", crimeDescription)

    return (
        <div className={classes.root}>
            <Autocomplete
                multiple
                disableCloseOnSelect
                filterSelectedOptions
                size="small"
                id="tags-outlined"
                options={CRIME_OPTIONS}
                getOptionLabel={(option) => option}
                value={crimeDescription}
                onChange={handleCrimeDescriptionChange}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        label="Select Crimes Options"
                        placeholder="Offenses"
                    />
                )}
            />
        </div>
    );
}