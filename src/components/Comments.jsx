import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Comments = ({ comments, id }) => {
  const token = useSelector((state) => state.auth.accessToken);
  const [data, setData] = useState(comments);

  return (
    <div
      className={`px-8 py-4 mt-3 ${
        comments.length >= 1 ? "bg-red-500" : ""
      }  rounded-lg w-[40%]`}
    >
      {data.map((comment) => {
        return (
          <div key={comment._id}>
            <h1 className="text-white">{comment.comment}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
