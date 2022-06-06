import FormControlLabel from "@mui/material/FormControlLabel";
import { Fragment, useState } from "react";
import Switch from "@mui/material/Switch";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { snackPreferences } from "../../assets/snack-preferences";
import { countries } from "../../assets/countries";

const Input = styled("input")({
  display: "none",
});

const PreferencesInfo = () => {
  const [alignment, setAlignment] = useState("s");
  const [selectedImage, setSelectedImage] = useState(null);
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
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
        {/* <Grid item xs={12} md={8}>
          <FormControlLabel control={<Switch />} label="No Snack Preferences" />
        </Grid>
        <Grid item xs={12} md={8}>
          <FormControlLabel
            control={<Switch />}
            label="No Country Preferences"
          />
        </Grid> */}
        <Grid item xs={12} md={8}>
          <div id="toggle-group">
            Package Size(total snacks worth)
            <br />
            <ToggleButtonGroup
              color="secondary"
              value={alignment}
              exclusive
              onChange={handleChange}
            >
              <ToggleButton value="s">S 10$</ToggleButton>
              <ToggleButton value="m">M 20$</ToggleButton>
              <ToggleButton value="l">L 30$</ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="About me"
            multiline
            rows={4}
            placeholder="Give other people a glance to your inner world✨&#10;(E.g: 'I love lizards🦎 and gamblimg🎰')&#10;This will show on your profile as a short description"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <div id="selected-snacks">
            <Autocomplete
              multiple
              id="tags-filled"
              options={snackPreferences.map((snack) => snack)}
              // defaultValue={}
              filterSelectedOptions
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    color="primary"
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Add Snack Preferences"
                  // placeholder="Add Snack Preferences"
                />
              )}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div id="selected-countries">
            <Autocomplete
              multiple
              id="tags-filled"
              options={countries.map((country) => country.label)}
              // defaultValue={}
              filterSelectedOptions
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    color="secondary"
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Add Country Preferences"
                  // placeholder="Add Snack Preferences"
                />
              )}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div id="upload-photo">
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
              <Button variant="contained" component="span">
                Upload Profile Photo
              </Button>
            </label>
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};
export default PreferencesInfo;
