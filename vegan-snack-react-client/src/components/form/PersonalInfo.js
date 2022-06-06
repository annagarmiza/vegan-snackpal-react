import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useInput from "../../hooks/use-input";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { validName, validPassword, validEmail } from "../../assets/regex";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const PersonalInfo = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  const handleClickShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const handleMouseDownPasswordConfirm = (event) => {
    event.preventDefault();
    setShowPasswordConfirm(!showPasswordConfirm);
  };
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    errorMessage: nameErrorMessage,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    //reset: resetNameInput,
  } = useInput((value) => {
    if (value.trim() === "") {
      return { error: false, errorMessage: "Please enter your name" };
    }
    if (!validName.test(value)) {
      return {
        error: false,
        errorMessage:
          "Name should be more than 1 character, English letters only",
      };
    } else {
      return { error: true, errorMessage: "" };
    }
  });

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    errorMessage: lastNameErrorMessage,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    //reset: resetNameInput,
  } = useInput((value) => {
    if (value.trim() === "") {
      return { error: false, errorMessage: "Please enter your last name" };
    }
    if (!validName.test(value)) {
      return {
        error: false,
        errorMessage:
          "Last Name should be more than 1 character, English letters only",
      };
    } else {
      return { error: true, errorMessage: "" };
    }
  });

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    errorMessage: emailErrorMessage,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    //reset: resetNameInput,
  } = useInput((value) => {
    if (value.trim() === "") {
      return { error: false, errorMessage: "Please enter your email" };
    }
    if (!validEmail.test(value)) {
      return {
        error: false,
        errorMessage: "Invalid email, please fix",
      };
    } else {
      return { error: true, errorMessage: "" };
    }
  });

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    errorMessage: passwordErrorMessage,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    //reset: resetNameInput,
  } = useInput((value) => {
    if (value.trim() === "") {
      return {
        error: false,
        errorMessage: "Please enter super secret password",
      };
    }
    if (!validPassword.test(value)) {
      return {
        error: false,
        errorMessage:
          "Password must be 8 charcters long and include at least one:🔸uppercase, 🔸lowercase, 🔸number and a 🔸 special character",
      };
    } else {
      return { error: true, errorMessage: "" };
    }
  });

  const {
    value: enteredPasswordConfirm,
    isValid: enteredPasswordConfirmIsValid,
    errorMessage: passwordConfirmErrorMessage,
    hasError: passwordConfirmInputHasError,
    valueChangeHandler: passwordConfirmChangedHandler,
    inputBlurHandler: passwordConfirmBlurHandler,
    //reset: resetNameInput,
  } = useInput((value) => {
    if (value.trim() === "") {
      return {
        error: false,
        errorMessage: "Please confirm your password",
      };
    }
    if (value !== enteredPassword) {
      return {
        error: false,
        errorMessage: "Passwords do not match",
      };
    } else {
      return { error: true, errorMessage: "" };
    }
  });

  return (
    <Box
      sx={{
        //   flexGrow: 1,
        backgroundColor: "#fafafa",
        padding: 2,
        //   width: "90vh",
      }}
    >
      <Grid container justifyContent="center" rowSpacing={2}>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            id="first-name"
            label="First Name"
            variant="outlined"
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
            error={nameInputHasError}
            helperText={nameInputHasError ? nameErrorMessage : ""}
            inputProps={{ maxLength: 50 }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            id="last-name"
            label="Last Name"
            variant="outlined"
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
            error={lastNameInputHasError}
            helperText={lastNameInputHasError ? lastNameErrorMessage : ""}
            inputProps={{ maxLength: 50 }}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
            error={emailInputHasError}
            helperText={emailInputHasError ? emailErrorMessage : ""}
            inputProps={{ maxLength: 62 }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            id="outlined-password-input"
            label="Password"
            type={showPassword ? "text" : "password"}
            onChange={passwordChangedHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
            error={passwordInputHasError}
            helperText={passwordInputHasError ? passwordErrorMessage : ""}
            inputProps={{
              maxLength: 8,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    id="password"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            id="outlined-password-input-confirm"
            label="Password Confirm"
            type={showPasswordConfirm ? "text" : "password"}
            onChange={passwordConfirmChangedHandler}
            onBlur={passwordConfirmBlurHandler}
            value={enteredPasswordConfirm}
            error={passwordConfirmInputHasError}
            helperText={
              passwordConfirmInputHasError ? passwordConfirmErrorMessage : ""
            }
            inputProps={{ maxLength: 8 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPasswordConfirm}
                    onMouseDown={handleMouseDownPasswordConfirm}
                    edge="end"
                  >
                    {showPasswordConfirm ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default PersonalInfo;
