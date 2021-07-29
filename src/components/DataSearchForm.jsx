import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import DateSelectors from './DateSelectors';
import CrimeSelect from './CrimeSelect';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import clsx from 'clsx';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import { CircularProgress } from '@material-ui/core';

const buttonStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
        margin: theme.spacing(1)
    },
    wrapper: {
        position: 'relative',
        width: 'auto',
        margin:'auto',
        marginTop: theme.spacing(1)
    },
    buttonSuccess: {
        backgroundColor: green[800],
        '&:hover': {
            backgroundColor: green[900]
        }
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12
    }
}));

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content'
    },
    formControl: {
        marginTop: theme.spacing(0),
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing(1)
    }
}));

export default function DataSearchForm({ toggleSuccess, toggleLoading, handleSubmit, handleCrimeDescriptionChange, ...props }) {

    const { crimeDescription, loading, success } = props.state
    const classes = useStyles();
    const buttonClasses = buttonStyles();

    const onSearchCLick = (event) => {
        toggleSuccess()
        toggleLoading()
        handleSubmit(event);
    }
    const buttonClassname = clsx({
        [buttonClasses.buttonSuccess]: success,
    });

    return (
        <form className={classes.form} noValidate>
            <Grid container spacing={1}>
                <FormControl className={classes.formControl}>
                    <DateSelectors
                        {...props}
                    />
                    <Grid container>
                        <Grid item xs={10}>
                            <CrimeSelect
                                crimeDescription={crimeDescription}
                                handleCrimeDescriptionChange={handleCrimeDescriptionChange}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <div className={buttonClasses.root}>
                                <div className={buttonClasses.wrapper}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={buttonClassname}
                                        disabled={loading}
                                        onClick={onSearchCLick}
                                        size="small"
                                    >
                                        {success ? <DoneRoundedIcon /> : <SearchRoundedIcon />}
                                    </Button>
                                    {loading && <CircularProgress size={24} className={buttonClasses.buttonProgress} />}
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </FormControl>
            </Grid>
        </form>
    )
}