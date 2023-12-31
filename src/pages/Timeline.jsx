import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useJwt } from "react-jwt";
import Blogs from "./Blogs";

export const Timeline = () => {
  const [data, setData] = useState();
  // const count = useSelector((state) => state.counter.value);
  const token = useSelector((state) => state.auth.accessToken);
  // const author = data && data.author;

  // console.log(decodedToken);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const response = await axios.get("http://localhost:3001/api/user/me", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //   };
  //   fetchUser();
  // }, [token]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      const response = await axios.get(
        "https://mern-backend-hvpy.onrender.com/api/blogs"
      );
      setData(response.data);
    };
    fetchAllBlogs();
  }, [token]);

  // let someone;

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const response = await axios.get("user/me");
  //     console.log(response.data);
  //   };
  //   fetchUser();
  // }, [1]);
  // console.log(token);

  return (
    <div className="max-w-[1680px] mx-auto px-6 py-5">
      {data ? (
        <div>
          {data.map((item) => {
            return (
              // <div key={item._id}>
              //   <p>{item.author}</p>
              //   <h1 className="text-5xl text-white">{item.title}</h1>
              //   <p className="text-2xl text-white">{item.content}</p>
              // </div>
              <Blogs items={item} key={item._id} />
            );
          })}
        </div>
      ) : (
        <div>
          <h1 className="text-5xl text-white">Loading......</h1>{" "}
        </div>
      )}
    </div>
  );
};
