import { createSlice } from "@reduxjs/toolkit";

import { Profile } from "../types";

export const profileFormSlice = createSlice({
  name: 'profileForm',
  initialState: {
    form: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
        website: "",
        imageUrl: "",
        companyName: "",
        companyCatchPhrase: "",
    }
  },
  reducers: {
    editField: (state, action: {
      type: string, 
      payload: {
        field: keyof(Profile),
        value: string,
      }
    }) => {
      state.form[action.payload.field] = action.payload.value;
    },
  }
});

export const { editField } = profileFormSlice.actions;

export default profileFormSlice.reducer;