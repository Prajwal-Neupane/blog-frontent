import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import { apiSlice } from "./apiSlice";
// import counterReducer from "./counterSlice";
// import authReducer from "./authSlice";
// import userReducer from "./userSlice";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // reducer: {
  // counter: counterReducer,
  // [apiSlice.reducerPath]: apiSlice.reducer,
  // auth: authReducer,
  // user: userReducer,
  // },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(apiSlice.middleware),
  // devTools: true,
});

export const persistor = persistStore(store);
