import { configureStore } from "@reduxjs/toolkit";

import profileFormReducer from "./modules/profile/form/slice";
import profilesReducer from "./modules/profile/slice";

export default  configureStore({
    reducer: {
        profiles: profilesReducer,
        profileForm: profileFormReducer,
    }
});