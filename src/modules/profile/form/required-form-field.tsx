import React, { useCallback, useMemo, useState } from "react";

import { StandardTextFieldProps, TextField } from "@material-ui/core";

import { Profile, Address } from "../types";

export interface RequiredFormFieldProps extends Omit<StandardTextFieldProps, "onChange"> {
  defaultValue?: string;
  label: string;
  onChange: (fieldName: keyof Profile | keyof Address, value: string) => void;
  fieldName: keyof Profile | keyof Address;
  isFormValidating: boolean;
  maxLength?: number,
}

export function RequiredFormField(props: RequiredFormFieldProps): React.ReactElement {
  const { defaultValue, label, onChange, fieldName, isFormValidating, maxLength, ...textFieldProps } = props;

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

  const inputPropMaxLength = useMemo(() => ({
    maxLength: maxLength || 50,
  }), [maxLength]);

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
      inputProps={inputPropMaxLength}
      {...textFieldProps}
    />
  );
}
