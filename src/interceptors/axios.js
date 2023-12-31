// import axios from "axios";
// import { useSelector } from "react-redux";
// // import { store } from "../services/store";
// // import { logOut, setTokens } from "../services/authSlice";

// // const instance = axios.create({
// //   baseURL: "http://localhost:3001/api/",
// //   withCredentials: true,
// // });

// // axios.defaults.baseURL = "http://localhost:3001/api/";

// // axios.interceptors.response.use(
// //   (resp) => resp,
// //   async (error) => {
// //     if (error.response?.status === 401) {
// //       const response = await axios.post(
// //         "user/refresh",
// //         {},
// //         { withCredentials: true }
// //       );
// //       if (response.status === 200) {
// //         axios.defaults.headers.common[
// //           "Authorization"
// //         ] = `Bearer ${response.data?.accessToken}`;

// //         return axios(error.config);
// //       }
// //     }
// //     return error;
// //   }
// // );

// const token = useSelector((state) => state.auth.accessToken);

// const api = axios.create({
//   baseURL: "http://127.0.0.1:3333",
// });

// axios.defaults.headers = {
//   Authorization: "Bearer " + token,
// };

// export default api;

// // instance.interceptors.request.use(
// //   (config) => {
// //     const { accessToken } = store.getState().auth;
// //     if (accessToken) {
// //       config.headers.Authorization = `Bearer ${accessToken}`;
// //     }
// //     return config;
// //   },
// //   (error) => {
// //     return Promise.reject(error);
// //   }
// // );

// // instance.interceptors.response.use(
// //   (response) => response,
// //   async (error) => {
// //     const originalRequest = error.config;
// //     console.log({ errorfrominterceptors: error });
// //     if (error.response.status === 401) {
// //       originalRequest._retry = true;

// //       try {
// //         const response = await instance.get("/user/refresh");
// //         store.dispatch(setTokens(response.data));
// //         return instance(originalRequest);
// //       } catch (refreshError) {
// //         console.error("Error refreshing token: ", refreshError);
// //         store.dispatch(logOut());
// //       }
// //     }
// //     return Promise.reject(error);
// //   }
// // );

// // export default instance;
