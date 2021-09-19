import React, { useCallback, useState } from "react";

import { TextField } from "@material-ui/core";

import { Profile } from "../types";

export interface RequiredFormFieldProps {
    defaultValue?: string;
    label: string;
    onChange: (fieldName: keyof Profile, value: string) => void;
    fieldName: keyof Profile;
    isFormValidating: boolean;
}

export function RequiredFormField(props: RequiredFormFieldProps): React.ReactElement {
  const { defaultValue, label, onChange, fieldName, isFormValidating } = props;

  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      event.preventDefault();
      if (event.target.value) {
        setIsInputEmpty(false);
      } else {
        setIsInputEmpty(true);
      }
      
      onChange(fieldName, event.target.value);
    }, [setIsInputEmpty, fieldName, onChange]
  );

  return (
    <TextField
      required
      fullWidth
      error={isFormValidating && isInputEmpty}
      helperText={isFormValidating && isInputEmpty ? `${label} is required` : ""}
      onChange={onInputChange}
      label={label}
      variant="outlined"
      defaultValue={defaultValue || ""}
    />
  );
}
