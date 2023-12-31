import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const /* The `Register` component is a functional component in React that returns a `<div>`
element with the text "Register". */
  Register = () => {
    const navigate = useNavigate();
    const [userData, setData] = useState({
      username: "",
      email: "",
      password: "",
    });
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          "https://blogbackend-jesj.onrender.com/api/user/register",
          userData
        );
        navigate("/login");
      } catch (error) {
        alert(error.message);
      }
    };
    const handleChange = (e) => {
      setData({
        ...userData,
        [e.target.name]: e.target.value,
      });
    };
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            name="username"
            placeholder="Username"
            className="p-5 w-[50%]"
            autoComplete="off"
            required
          />{" "}
          <br /> <br /> <br />
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
            Already have an account?{" "}
            <Link to={"/login"} className="text-red-700">
              Login
            </Link>
          </p>
          <button className="px-4 py-4 mt-5 text-xl text-white bg-green-800 rounded-md">
            Register
          </button>
        </form>
      </div>
    );
  };
