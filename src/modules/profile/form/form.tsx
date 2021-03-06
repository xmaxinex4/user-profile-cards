import React, { FormEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { image } from "faker";

import { Button, Checkbox, FormControlLabel, Grid, makeStyles } from "@material-ui/core";

import { Address, Profile } from "../types";
import { add, edit } from "../slice";

import { RequiredFormField } from "./required-form-field";
import { AddressFormFields } from "./address-form-fields";

const useStyles = makeStyles({
  formControl: {
    width: "100%",
    margin: "auto",
    justifyContent: "center",
  }
});

export interface ProfileFormProps {
  profile?: Profile;
  onClose: () => void;
}

export function ProfileForm(props: ProfileFormProps): React.ReactElement {
  const { profile, onClose } = props;
  const { formControl } = useStyles();

  const dispatch = useDispatch();

  const [isValidating, setIsValidating] = useState(false);
  const [generateProfilePicture, setGenerateProfilePicture] = useState(false);

  const onGenerateProfilePictureChange = useCallback(
    () => setGenerateProfilePicture(!generateProfilePicture),
    [setGenerateProfilePicture, generateProfilePicture]
  );

  const [form, setForm] = useState<Profile>({
    ...profile || {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      address: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
      },
      phone: "",
      website: "",
      companyName: "",
      companyCatchPhrase: "",
      imageUrl: "",
    }
  });

  const onInputChange = useCallback((fieldName: keyof Profile | keyof Address, value: string) => {
    const isAddressField = ["street", "city", "state", "zipCode"].some(value => value === fieldName); // TODO: Improve to not use hard coded strings
    if (!isAddressField) {
      setForm({
        ...form,
        [fieldName]: value,
      });
    } else {
      setForm({
        ...form,
        address: {
          ...form.address,
          [fieldName]: value,
        }
      });
    }
  }, [form, setForm]);

  const onSave = useCallback((event: FormEvent) => {
    event.preventDefault();

    // handle validation    
    const requiredFields: (keyof Profile)[] = ["firstName", "lastName", "email", "address", "phone", "website", "companyName", "companyCatchPhrase"];

    setIsValidating(true);
    const isValidForm = requiredFields.every(requiredField => form[requiredField]);

    if (isValidForm) {
      if (form.id) {
        // if profile has an id, it already exists and should be edited
        dispatch(edit(
          {
            ...form,
            imageUrl: generateProfilePicture ? image.avatar() : form.imageUrl, // option for user to generate a new profile picture
          }
        ));
        onClose();
      } else {
        // if there is no id, we need to make a new profile
        dispatch(
          add({
            ...form,
            id: uuidv4(),
            imageUrl: generateProfilePicture ? image.avatar() : form.imageUrl,
          } as Profile)
        );

        onClose();
      }
    }
  }, [form, setIsValidating, generateProfilePicture, dispatch, onClose]);

  return (
    <form noValidate autoComplete="off" onSubmit={onSave}>
      <Grid container>
        <Grid container item spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <RequiredFormField
              autoFocus
              onChange={onInputChange}
              fieldName="firstName"
              label="First Name"
              defaultValue={profile?.firstName || ""}
              isFormValidating={isValidating}
              maxLength={20}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RequiredFormField
              onChange={onInputChange}
              fieldName="lastName"
              label="Last Name"
              defaultValue={profile?.lastName || ""}
              isFormValidating={isValidating}
              maxLength={20}
            />
          </Grid>
          <Grid item xs={12}>
            <RequiredFormField
              onChange={onInputChange}
              fieldName="phone"
              label="Phone"
              defaultValue={profile?.phone || ""}
              isFormValidating={isValidating}
              placeholder="(123) 123-1234"
              maxLength={20}
            />
          </Grid>
          <Grid item xs={12}>
            <RequiredFormField
              type="email"
              onChange={onInputChange}
              fieldName="email"
              label="Email"
              defaultValue={profile?.email || ""}
              isFormValidating={isValidating}
            />
          </Grid>
          <Grid item xs={12}>
            <AddressFormFields
              profile={profile}
              onChange={onInputChange}
              isFormValidating={isValidating}
            />
          </Grid>
          <Grid item xs={12}>
            <RequiredFormField
              type="url"
              onChange={onInputChange}
              fieldName="website"
              label="Website"
              defaultValue={profile?.website || ""}
              isFormValidating={isValidating}
              placeholder="https://yourWebsite.com"
            />
          </Grid>
          <Grid item xs={12}>
            <RequiredFormField
              onChange={onInputChange}
              fieldName="companyName"
              label="Company Name"
              defaultValue={profile?.companyName || ""}
              isFormValidating={isValidating}
            />
          </Grid>
          <Grid item xs={12}>
            <RequiredFormField
              onChange={onInputChange}
              fieldName="companyCatchPhrase"
              label="Company Slogan"
              defaultValue={profile?.companyCatchPhrase}
              isFormValidating={isValidating}
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
              label={`Generate ${profile?.id ? "New" : ""} Profile Picture?`}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button fullWidth variant="outlined" color="primary" onClick={onClose}>Cancel</Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button type="submit" fullWidth variant="contained" color="primary">Save</Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
