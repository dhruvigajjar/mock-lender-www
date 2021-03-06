import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, Grid } from '@material-ui/core';
import RegistrationDetailsForm from './RegistrationDetailsForm';
import OTPVerificationForm from './OTPVerificationForm';
import PostRegisterView from './PostRegisterView';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Registration Details', 'OTP Verification', 'API KEY'];
}
let store = {};
function setStore (st) {
  store = {...st};
}

function getStepContent(nextCallback) {
  return function (stepIndex) {
    switch (stepIndex) {
      case 0:
        return <RegistrationDetailsForm nextCallback={nextCallback} store={store} setStore={setStore} />;
      case 1:
        return <OTPVerificationForm nextCallback={nextCallback} store={store} setStore={setStore} />;
      case 2:
        return <PostRegisterView nextCallback={nextCallback} store={store} setStore={setStore} />;
      default:
        return 'Unknown stepIndex';
    }
  }
}

export default function LenderRegistrationForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(handleNext)(activeStep)}</Typography>
              {/* <Grid
                container
                direction="row-reverse"
              >
                <Box p={4}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
              </Button>
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box>
              </Grid> */}
            </div>
          )}
      </div>
    </div>
  );
}