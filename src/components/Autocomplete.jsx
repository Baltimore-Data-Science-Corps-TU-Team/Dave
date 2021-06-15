/* eslint-disable no-use-before-define */
import { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
    },
}));
const crimes = [
    'Homicide',
    'Arson',
    'Auto theft',
    'Robbery',
    'Shoplifting'
];

export default function CrimeSelect() {
    const [crimeDescription, setCrimeDescription] = useState([]);

    const handleCrimeDescriptionChange = (event, newValue) => {
        setCrimeDescription(newValue);
    };

    const classes = useStyles();
    console.log(crimeDescription)
    return (
        <div className={classes.root}>
            <Autocomplete
                multiple
                disableCloseOnSelect
                filterSelectedOptions
                size="small"
                id="tags-outlined"
                options={crimes}
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