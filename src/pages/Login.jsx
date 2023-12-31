import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setTokens, setIsLoggedIn } from "../services/authSlice";
// import { login } from "../services/authActions";
// import { useLoginMutation } from "../services/authApiSlice";

export const Login = () => {
  // const token = useSelector((state) => state.auth.token);
  // const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const accessToken = useSelector((state) => state.auth.accessToken);
  const [userData, setData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const { data } = await axios.post("user/login", userData, {
    //   withCredentials: true,
    // });
    // dispatch(setTokens(data));
    // axios.defaults.headers.common[
    //   "Authorization"
    // ] = `Bearer ${data?.accessToken}`;
    try {
      const response = await axios.post(
        "https://mern-backend-hvpy.onrender.com/api/user/login",
        userData
      );
      dispatch(setTokens(response.data));
      dispatch(setIsLoggedIn(true));
      navigate("/timeline");
    } catch (error) {
      alert("Error occured");
    }

    // try {
    //   await dispatch(login(userData));
    //   await dispatch(refreshUser());
    // } catch (error) {
    //   console.log("Login error: ", error);
    // }
    // const response = await axios.post(
    //   "http://localhost:3001/api/user/login",
    //   userData,
    //   { withCredentials: true }
    // );

    // axios.defaults.headers.common[
    //   "Authorization"
    // ] = `Bearer ${data["accessToken"]}`;
    // dispatch(setToken(response.data));
    // const response = await login(userData).unwrap();
    // console.log({ responseData: response });
    // dispatch(setToken({ ...response }));
    // dispatch(setToken(response.data));
  };

  const handleChange = (e) => {
    setData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(token);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email"
          className="p-5 w-[50%]"
          autoComplete="off"
          required
        />{" "}
        <br /> <br /> <br />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          className="p-5 w-[50%]"
          required
        />{" "}
        <br />
        <p className="mt-5 text-xl text-white">
          Don't have an account?{" "}
          <Link to={"/register"} className="text-red-700">
            Register
          </Link>
        </p>
        <button className="px-4 py-4 mt-5 text-xl text-white bg-green-800 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};
