import { createSlice } from "@reduxjs/toolkit";
import { getMockProfiles } from "../../mock/profile";
import { Profile } from "./types";

export type ProfilesState = {
  profiles: Profile[],
}

export type ProfileStateReducers = {
  add: (state: ProfilesState, action: {
    type: string,
    payload: Profile,
  }) => void;
}

export const profilesSlice = createSlice<ProfilesState, ProfileStateReducers>({
  name: 'profiles',
  initialState: {
    profiles: getMockProfiles(4),
  },
  reducers: {
    add: (state, action: {
      type: string, 
      payload: Profile,
    }) => {
      state.profiles.push(action.payload);
    },
  }
});

export const { add } = profilesSlice.actions;
export const selectProfiles = (state: { profiles: ProfilesState }) => state.profiles.profiles;

export default profilesSlice.reducer;