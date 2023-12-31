import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Blogs from "./Blogs";

export const Profile = () => {
  const token = useSelector((state) => state.auth.accessToken);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchProfileBlogs = async () => {
      const response = await axios.get(
        "https://mern-backend-hvpy.onrender.com/api/userblogs",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setData(response.data);
    };
    fetchProfileBlogs();
  }, [token]);
  return (
    <div>
      {data &&
        data.map((item) => {
          return <Blogs items={item} key={item._id} />;
        })}
    </div>
  );
};
