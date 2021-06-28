import { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Stepper from './Stepper';
import CloseIcon from '@material-ui/icons/Close';
import EditRoundedIcon from '@material-ui/icons/EditRounded';

const useStyles = makeStyles((theme) => ({
    button: {
        marginBottom: theme.spacing(1),
        marginRight: theme.spacing(1),

    },
    fab: {
        backgroundColor: 'transparent',
        border: '1px solid #E0E0E0',
        boxShadow: 'none',
        color: '#E0E0E0',
        '&:hover': {
            backgroundColor: '#E0E0E0',
            color: '#252730'
        }
    },

}));

export default function FormDialog(props) {

    const { toggleSuccess } = props;
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        toggleSuccess()
        setActiveStep(0);
    };

    const [isOpen, setIsOpen] = useState(false);
    const handleClickOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <Fab variant="extended" size="large" onClick={handleClickOpen} className={classes.fab}>
                Load Data to the Map
            </Fab>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Load a DataFrame</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Choose a date range and a crime type. Data source is Baltimore Open Data.
                    </DialogContentText>
                    <Stepper
                        activeStep={activeStep}
                        handleNext={handleNext}
                        handleBack={handleBack}
                        handleReset={handleReset}
                        {...props}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        size="small"
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<EditRoundedIcon />}
                        onClick={handleReset}
                    >
                        Edit
                    </Button>
                    <Button
                        aria-label='Close'
                        onClick={handleClose}
                        size="small"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<CloseIcon />}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
