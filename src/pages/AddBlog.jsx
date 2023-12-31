import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const token = useSelector((state) => state.auth.accessToken);
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    content: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://blogbackend-jesj.onrender.com/api/addblog",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/timeline");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="p-5 w-[50%]"
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Title"
        />{" "}
        <br />
        <textarea
          rows={20}
          className="mt-5 p-5 w-[50%]"
          type="text"
          onChange={handleChange}
          name="content"
          placeholder="Content"
        />{" "}
        <br />
        <button className="px-4 py-4 mt-5 text-xl text-white bg-green-800 rounded-md">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
