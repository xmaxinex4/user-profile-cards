import { configureStore } from "@reduxjs/toolkit";

import profilesReducer from "./modules/profile/slice";

export default configureStore({
  reducer: {
    profiles: profilesReducer,
  }
});