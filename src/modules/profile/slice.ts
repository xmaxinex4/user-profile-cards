import { createSlice } from "@reduxjs/toolkit";
import { getMockProfiles } from "../../mock/profile";
import { Profile } from "./types";

export type ProfilesState = {
  values: Profile[],
}

export type ProfileStateReducers = {
  add: (state: ProfilesState, action: {
    type: string,
    payload: {
      profile: Profile,
    }
  }) => void;
}

export const profilesSlice = createSlice<ProfilesState, ProfileStateReducers>({
  name: 'profiles',
  initialState: {
    values: getMockProfiles(4),
  },
  reducers: {
    add: (state, action: {
      type: string, 
      payload: {
        profile: Profile,
      }
    }) => {
      state.values.push(action.payload.profile);
    },
  }
});

export const { add } = profilesSlice.actions;
export const selectProfiles = (state: { profiles: ProfilesState }) => state.profiles.values;

export default profilesSlice.reducer;