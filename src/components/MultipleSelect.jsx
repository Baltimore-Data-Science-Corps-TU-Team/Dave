import { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const crimes = [
    'Homicide',
    'Arson',
    'Auto theft',
    'Robbery',
    'Shoplifting'
];

function getStyles(crime, crimeType, theme) {
    return {
        fontWeight:
            crimeType.indexOf(crime) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function MultipleSelectChip() {
    const theme = useTheme();
    const [crimeType, setCrimeType] = useState([]);

    const handleChange = (event) => {
        setCrimeType(event.target.value);
    };

    console.log(crimeType)
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
                <InputLabel id="multiple-chip-label">Crime</InputLabel>
                <Select
                    labelId="multiple-chip-label"
                    id="multiple-chip"
                    multiple
                    value={crimeType}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} sx={{ m: '2px' }} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {crimes.map((crime) => (
                        <MenuItem
                            key={crime}
                            value={crime}
                            style={getStyles(crime, crimeType, theme)}
                        >
                            {crime}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}