import React, { FormEvent, useCallback, useState } from "react";

import { Button, Checkbox, FormControlLabel, Grid, makeStyles, TextField } from "@material-ui/core";

import { Profile } from "../types";

const useStyles = makeStyles({
  input: {
    width: "100%",
  },
  formControl: {
    width: "100%",
    margin: "auto",
    justifyContent: "center",
  }
});

export interface ProfileFormProps {
    profile?: Profile;
    onCancel: () => void;
}

export function ProfileForm(props: ProfileFormProps): React.ReactElement {
  const { profile, onCancel } = props;
  const { input, formControl } = useStyles();

  const [generateProfilePicture, setGenerateProfilePicture] = useState(!!profile?.imageUrl);

  const onGenerateProfilePictureChange = useCallback(
    () => setGenerateProfilePicture(!generateProfilePicture),
    [setGenerateProfilePicture, generateProfilePicture]
  );

  const onSave = useCallback((event: FormEvent) => {
    event.preventDefault();
    console.log("event: ", event);
  }, []); // dispatch save new profile or edit profile if profile is present then close modal

  const [values, setValues] = React.useState({
    name: '',
    email: '',
    months: ''
  });

  // const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
  //   e.preventDefault();
  //   setInputState(e.target.value);

  //   if (onInputChange) {
  //     onInputChange(e);
  //   }
  // };

  return (
    <form noValidate autoComplete="off" onSubmit={onSave}>
      <Grid container>
        <Grid container item spacing={3} justifyContent="center">
            <Grid item xs={12} md={6}>
              <TextField
                  required
                  className={input}
                  error={false}
                  label="First Name"
                  variant="outlined"
                  defaultValue={profile?.firstName || ""}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                  required
                  className={input}
                  error={false}
                  label="Last Name"
                  variant="outlined"
                  defaultValue={profile?.lastName || ""}
              />
          </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                  required
                  className={input}
                  error={false}
                  label="Email"
                  variant="outlined"
                  defaultValue={profile?.email || ""}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                  required
                  className={input}
                  error={false}
                  label="Address"
                  variant="outlined"
                  defaultValue={profile?.address || ""}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                  required
                  className={input}
                  error={false}
                  label="Phone"
                  variant="outlined"
                  defaultValue={profile?.phone || ""}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                  required
                  className={input}
                  error={false}
                  label="Website"
                  variant="outlined"
                  defaultValue={profile?.website || ""}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                  required
                  className={input}
                  error={false}
                  label="Company Name"
                  variant="outlined"
                  defaultValue={profile?.companyName || ""}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                  required
                  fullWidth
                  error={false}
                  label="Company Motto"
                  variant="outlined"
                  defaultValue={profile?.companyCatchPhrase || ""}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                className={formControl}
                control={
                  <Checkbox
                    checked={generateProfilePicture}
                    onChange={onGenerateProfilePictureChange}
                    name="generateProfilePicture"
                    color="primary"
                  />
                }
                label="Generate Profile Picture?"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Button fullWidth variant="outlined" color="primary" onClick={onCancel}>Cancel</Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button type="submit" fullWidth variant="contained" color="primary">Save</Button>
            </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
