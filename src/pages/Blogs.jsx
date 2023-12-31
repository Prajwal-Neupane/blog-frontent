import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaComment } from "react-icons/fa";
import { useSelector } from "react-redux";
import Comments from "../components/Comments";
import { useJwt } from "react-jwt";

const Blogs = ({ items }) => {
  const token = useSelector((state) => state.auth.accessToken);
  const [love, setLove] = useState(false);
  const [comment, setComment] = useState(false);
  const [user, setUser] = useState();
  const [data, setData] = useState(items);
  const [commentText, setCommentText] = useState("");
  const { decodedToken } = useJwt(token);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await axios.get(
          `https://blogbackend-jesj.onrender.com/api/user/getuser/${items.author}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching author:", error);
      }
    };

    fetchAuthor();
  }, [items.author]);

  const handleChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `https://blogbackend-jesj.onrender.com/api/comment/${data._id}`,
        {
          commentText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setData((prevData) => ({
        ...prevData,
        comments: [...prevData.comments, response.data.comments],
      }));

      setCommentText("");
      window.location.reload(true);
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const handleLike = async () => {
    try {
      setLove(!love);

      const response = await axios.put(
        `https://blogbackend-jesj.onrender.com/api/like/${items._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setData((prevItems) => ({
        ...prevItems,
        likes: love
          ? prevItems.likes.filter((like) => like.user !== decodedToken.id)
          : [...prevItems.likes, { user: decodedToken.id }],
      }));
    } catch (error) {
      console.error("Error updating like:", error);
      setLove(!love);
    }
  };
  let isUserLiked;

  // Check if the user has already liked the post
  if (decodedToken) {
    isUserLiked = data.likes.map((like) => like.user).includes(decodedToken.id);
  }

  return (
    <div className="flex flex-col py-5">
      <p className="text-xl text-red-600 hover:cursor-pointer hover:underline hover:text-red-400">
        {user && user.username}
      </p>
      <h1 className="text-5xl text-white">{data.title}</h1>
      <p className="text-2xl text-white">{data.content}</p>
      <div>
        <div className="flex gap-4">
          <div className="flex gap-2">
            {isUserLiked ? (
              <FaHeart
                onClick={handleLike}
                size={25}
                color="red"
                className="cursor-pointer"
              />
            ) : (
              <FaHeart
                onClick={handleLike}
                size={25}
                color="white"
                className="cursor-pointer"
              />
            )}

            <h1 className="text-xl text-white">{data.likes.length}</h1>
          </div>
          <div className="flex gap-2">
            <FaComment
              onClick={() => setComment(!comment)}
              size={25}
              color="white"
              className="cursor-pointer"
            />
            <h1 className="text-xl text-white">{data.comments.length}</h1>
          </div>
        </div>
      </div>
      <div>
        <div className={`${comment ? "flex-row" : "hidden"}`}>
          <Comments comments={data.comments} id={items._id} />
          <input
            type="text"
            onChange={handleChange}
            name="commentText"
            className="px-4 py-3 text-white bg-transparent border-2 border-white outline-none placeholder:text-white mt-7"
            placeholder="Add a comment"
          />
          <br />
          <button
            className="px-2 py-2 mt-2 text-white bg-green-600 rounded-md"
            onClick={handleSubmit}
          >
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
