import { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import clsx from 'clsx';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import DataSearchForm from './DataSearchForm';
import { MapConfigGrid, RadioMapConfig } from './RadioMapConfig';
import Grid from '@material-ui/core/Grid';
import { IconButton, ButtonGroup } from '@material-ui/core';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import { CircularProgress } from '@material-ui/core';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
        display: 'in-line',
    },
    resetContainer: {
        padding: theme.spacing(),
    },
}));

const buttonStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[800],
        '&:hover': {
            backgroundColor: green[900],
        },
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(1),
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));


export default function FormStepper({ activeStep, handleNext, handleBack, handleReset, ...props }) {

    // const [loading, setLoading] = useState(false);
    // const [success, setSuccess] = useState(false);
    const { loading, success } = props.state
    //const { success } = props.state;
    const classes = useStyles();
    const buttonClasses = buttonStyles();

    const buttonClassname = clsx({
        [buttonClasses.buttonSuccess]: success,
    });

    const steps = getSteps();

    const customOnClick = (event) => {
        if (activeStep === 0) {
            handleNext()
        } else {
            handleNext()
        }
    }

    // const getSuccessIcon = (success) => {
    //     switch (success) {
    //         case 'true':
    //             return <CheckCircleRoundedIcon color="primary" />
    //         case 'false':
    //             return <ErrorRoundedIcon color="error" />
    //         case 'loading':
    //             return <CircularProgress size={25} />
    //         case undefined:
    //             return null
    //         default:
    //             return
    //     }
    // }


    // const searchButton = (
    //     (activeStep === 0)
    //         ? (
    //             <div className={buttonClasses.root}>
    //                 <div className={buttonClasses.wrapper}>
    //                     <Button
    //                         variant="contained"
    //                         color="primary"
    //                         className={buttonClassname}
    //                         disabled={loading}
    //                         onClick={onSearchCLick}
    //                         size="small"
    //                     >
    //                         {success ? <DoneRoundedIcon /> : <SearchRoundedIcon />}
    //                     </Button>
    //                     {loading && <CircularProgress size={24} className={buttonClasses.buttonProgress} />}
    //                 </div>
    //             </div>
    //         )
    //         : null
    // )

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <div>{getStepContent(index, props)}</div>
                            <div className={classes.actionsContainer}>
                                <ButtonGroup className={classes.button} disableElevation size="small" variant="contained" color="primary">
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        onClick={customOnClick}
                                    >
                                        {activeStep === 0 ? 'Next' : 'Finish'}
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}

function getSteps() {
    return ['Filter your data search', 'Choose a map configuration'];
}

function getStepContent(step, { handleRadioChange, ...props }) {
    const { radioValue } = props.state

    switch (step) {
        case 0:
            return <DataSearchForm {...props} />
        case 1:
            return <MapConfigGrid radioValue={radioValue} handleRadioChange={handleRadioChange} />
        default:
            return 'Unknown step';
    }
}


// const successMessage = (success) => {
//     switch (success) {
//             case 'true':
//             return (
//                     <div>
//                     <Typography>Data loaded succesfully!</Typography>
//                 </div>
//             )
//         case 'false':
//             return (
//                 <div>
//                     <Typography>Data not loaded!</Typography>
//                 </div>
//             )
//         case 'loading':
//             return (
//                     <div>
//                         <Typography>Loading...</Typography>
//                     </div>
//                 )
//             case undefined:
//                 return null
//         default:
//             return
//     }
// }

// const finalStep = (
//     (activeStep === steps.length)
//         ? (
//             <Step key="Completed">
//                 <StepLabel icon={getSuccessIcon(success)}>Completed</StepLabel>
//                 <StepContent>
//                     <div className={classes.actionsContainer}>
//                         {successMessage(success)}
//                     </div>
//                 </StepContent>
//             </Step>
//         )
//         : null
// )