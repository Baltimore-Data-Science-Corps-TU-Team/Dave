import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
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
    },
    resetContainer: {
        padding: theme.spacing(),
    },
}));


export default function FormStepper({ activeStep, handleNext, handleBack, handleReset, toggleLoading, toggleSuccess, handleSubmit, ...props }) {

    const { loading, success } = props.state;
    const classes = useStyles();
    const steps = getSteps();

    const customOnClick = (event) => {
        if (activeStep === 0) {
            toggleSuccess('false')
            handleNext()
        } else {
            handleNext()
            toggleSuccess('loading')
            //toggleLoading()
            handleSubmit(event);
        }
    }

    const successMessage = (success) => {
        switch (success) {
            case 'true':
                return (
                    <div>
                        <Typography>Data loaded succesfully!</Typography>
                    </div>
                )
            case 'false':
                return (
                    <div>
                        <Typography>Data not loaded!</Typography>
                    </div>
                )
            case 'loading':
                return (
                    <div>
                        <Typography>Loading...</Typography>
                    </div>
                )
            case undefined:
                return null
            default:
                return
        }
    }
    const getSuccessIcon = (success) => {
        switch (success) {
            case 'true':
                return <CheckCircleRoundedIcon color="primary" />
            case 'false':
                return <ErrorRoundedIcon color="error" />
            case 'loading':
                return <CircularProgress size={25} />
            case undefined:
                return null
            default:
                return
        }
    }

    const finalStep = (
        (activeStep === steps.length)
            ? (
                <Step key="Completed">
                    <StepLabel icon={getSuccessIcon(success)}>Completed</StepLabel>
                    <StepContent>
                        <div className={classes.actionsContainer}>
                            <Grid>
                                <Grid direction="row" item xs={8}>
                                    {successMessage(success)}
                                </Grid>
                                <Grid item xs={2}>
                                    <IconButton onClick={handleReset} aria-label="Edit form">
                                        <EditRoundedIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </div>
                    </StepContent>
                </Step>
            )
            : null
    )

    console.log("activeStep", activeStep)

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
                {finalStep}
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