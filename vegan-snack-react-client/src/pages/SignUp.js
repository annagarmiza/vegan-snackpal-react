import { Fragment, useState } from "react";
import styles from "./SignUp.module.css";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { countries } from "../assets/countries";
import { snackPreferences } from "../assets/snack-preferences";
import Grid from "@mui/material/Grid";

import AddressInfo from "../components/form/AddressInfo";
import PersonalInfo from "../components/form/PersonalInfo";
import PreferencesInfo from "../components/form/PreferencesInfo";

const SignUp = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "Hello There! Don't be a stanger 😉",
    "Your Address for the snackings 📮",
    "Customize your preferences 🦋",
  ];

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfo></PersonalInfo>;
      case 1:
        return <AddressInfo></AddressInfo>;
      case 2:
        return <PreferencesInfo></PreferencesInfo>;
      default:
        return "Unknown";
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Fragment>
      <h1>The SignUp page</h1>
      <form className={styles.form}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <div>
              <Stepper sx={{ padding: 2 }} activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};

                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <div>
                {activeStep === steps.length ? (
                  <div>
                    <Typography>
                      All steps completed - you&apos;re finished
                    </Typography>
                  </div>
                ) : (
                  <div>
                    <Typography>{getStepContent(activeStep)}</Typography>
                    <div>
                      <Button disabled={activeStep === 0} onClick={handleBack}>
                        Back
                      </Button>

                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};
export default SignUp;
