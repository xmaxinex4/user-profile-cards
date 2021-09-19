import React from "react";

import { Grid } from "@material-ui/core";

import { Address, Profile } from "../types";
import { RequiredFormField } from "./required-form-field";

export interface AddressFormFieldsProps {
  profile?: Profile,
  onChange: (fieldName: keyof Profile | keyof Address, value: string) => void;
  isFormValidating: boolean;
}

export function AddressFormFields(props: AddressFormFieldsProps): React.ReactElement {
  const { onChange, isFormValidating, profile } = props;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <RequiredFormField
          onChange={onChange}
          fieldName="street"
          label="Street Address"
          defaultValue={profile?.address?.street || ""}
          isFormValidating={isFormValidating}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <RequiredFormField
          onChange={onChange}
          fieldName="city"
          label="City"
          defaultValue={profile?.address?.city || ""}
          isFormValidating={isFormValidating}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <RequiredFormField
          onChange={onChange}
          fieldName="state"
          label="State"
          defaultValue={profile?.address?.state || ""}
          isFormValidating={isFormValidating}
          maxLength={15}
        />
      </Grid>
      <Grid item xs={12}>
        <RequiredFormField
          onChange={onChange}
          fieldName="zipCode"
          label="Zip Code"
          defaultValue={profile?.address?.zipCode || ""}
          isFormValidating={isFormValidating}
          maxLength={10} // 12345 or 12345-2347
        />
      </Grid>
    </Grid>
  );
}
