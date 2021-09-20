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
  edit: (state: ProfilesState, action: {
    type: string,
    payload: Profile,
  }) => void;
}

export const profilesSlice = createSlice<ProfilesState, ProfileStateReducers>({
  name: 'profiles',
  initialState: {
    profiles: getMockProfiles(18),
  },
  reducers: {
    add: (state, action: {
      type: string,
      payload: Profile,
    }) => {
      state.profiles.push(action.payload);
    },
    edit: (state, action: {
      type: string,
      payload: Profile,
    }) => {
      const profileIndexLocation = state.profiles.findIndex(profile => profile.id === action.payload.id);
      state.profiles[profileIndexLocation] = action.payload;
    },
  }
});

export const { add, edit } = profilesSlice.actions;
export const selectProfiles = (state: { profiles: ProfilesState }) => state.profiles.profiles;

export default profilesSlice.reducer;