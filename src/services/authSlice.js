import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
// import { persistor } from "./store";

const initialState = {
  accessToken: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      // state.refreshToken = action.payload.refreshToken;
    },
    // setUser: (state, action) => {
    //   state.user = action.payload;
    // },
    logOut: (state) => {
      // persistor.purge();
      state.accessToken = null;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setTokens, logOut, setIsLoggedIn } = authSlice.actions;
export default authSlice.reducer;
