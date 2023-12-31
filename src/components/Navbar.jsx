import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logOut } from "../services/authSlice";
import { IoCreate } from "react-icons/io5";
import { FaUserAstronaut } from "react-icons/fa";
import { IoLogoDocker } from "react-icons/io5";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropDown, setDropDown] = useState(false);

  const handleLogOut = () => {
    dispatch(logOut());
    setDropDown(!dropDown);
    navigate("/login");
  };
  return (
    <div className=" max-w[1640px] bg-black text-white px-5 py-8 flex items-center justify-between">
      <div>
        <IoLogoDocker size={60} />
      </div>
      <div className="flex items-center gap-5">
        <Link to={"/timeline"}>
          <h1 className="text-2xl">Timeline</h1>
        </Link>
        <Link to={"/add"}>
          <IoCreate size={30} />
        </Link>
        <div className="relative duration-700">
          <FaUserAstronaut
            className="cursor-pointer"
            onClick={() => setDropDown(!dropDown)}
            size={30}
          />
          {dropDown && (
            <div
              className={` duration-700 bg-white  absolute top-16 left-[-80px] rounded-md border-b-8 border-red-300`}
            >
              <ul className="gap-5 text-center w-28">
                <Link to={"/profile"}>
                  <li
                    onClick={() => setDropDown(!dropDown)}
                    className="w-full py-4 text-xl text-black duration-300 cursor-pointer hover:bg-slate-400"
                  >
                    Profile
                  </li>
                </Link>

                <li
                  onClick={handleLogOut}
                  className="py-4 text-xl text-black duration-300 cursor-pointer hover:bg-slate-400 "
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* <Link to={"/private"}>Private</Link> */}

      {/* <button onClick={handleClick}>Logout</button> */}
    </div>
  );
};
