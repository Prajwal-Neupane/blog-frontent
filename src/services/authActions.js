// import { createAsyncThunk } from "@reduxjs/toolkit";
// import api from "../interceptors/axios";
// import { setTokens, setUser, logOut } from "./authSlice";
// import axios from "axios";

// export const login = createAsyncThunk(
//   "auth/login",
//   async (credentials, { dispatch }) => {
//     try {
//       const response = await api.post("/user/login", credentials);
//       console.log({ loginUserResponse: response.data?.accessToken });
//       dispatch(setTokens(response.data));
//       // Dispatch other actions if needed, e.g., dispatch(setUser(response.data.user));
//       return response.data;
//     } catch (error) {
//       // Handle errors if necessary
//       console.error("Login error:", error);
//       throw error; // Rethrow the error to mark the async thunk as rejected
//     }
//   }
// );

// export const refreshUser = createAsyncThunk(
//   "auth/refreshUser",
//   async (_, { dispatch }) => {
//     try {
//       const response = await api.get("/user/refresh", {
//         withCredentials: true,
//       });
//       console.log({ refreshUserResponse: response.data?.accessToken });
//       dispatch(setTokens(response.data));

//       // Dispatch other actions if needed, e.g., dispatch(setUser(response.data.user));
//       return response.data;
//     } catch (error) {
//       // Handle errors if necessary
//       console.error("Refresh user error:", error);
//       dispatch(logOut()); // Log out the user if the refresh token fails
//       throw error; // Rethrow the error to mark the async thunk as rejected
//     }
//   }
// );
