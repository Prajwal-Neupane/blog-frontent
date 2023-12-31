import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
// import userReducer from "./userSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  // user: userReducer,
});

export default rootReducer;
