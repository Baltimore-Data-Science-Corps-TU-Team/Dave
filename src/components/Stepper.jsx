import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import clsx from 'clsx';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import DataSearchForm from './DataSearchForm';
import { MapConfigGrid } from './RadioMapConfig';
import { ButtonGroup } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

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

export default function FormStepper({ activeStep, handleNext, handleBack, handleReset, ...props }) {

    const { loading, success } = props.state
    const classes = useStyles();

    const steps = ['Filter your data search', 'Choose a map configuration']

    const customOnClick = (event) => {
        if (activeStep === 0) {
            handleNext()
        } else {
            handleNext()
        }
    }

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