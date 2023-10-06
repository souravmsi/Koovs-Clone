import React from "react";
import Link from "next/link";
import { logOut } from "@/redux/slices/auth-slice";
import { useDispatch } from "react-redux";

const Profile = ({ name, email }) => {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logOut());
  };
  return (
    <div className="w-full flex flex-col items-center gap-y-4 p-12 px-4">
      <div className="h-44 w-44 rounded-full bg-[url('/profile.webp')] bg-cover" />
      <h3>{name}</h3>
      <h3>{email}</h3>
      <button
        onClick={logOutHandler}
        type="button"
        className="group relative text-black px-12 py-4 w-fit text-xs font-semibold hover:text-white border border-black rounded-md hover:border-0"
      >
        <div className="bg-white absolute inset-0 -z-10 rounded-md group-hover:scale-x-[1.03] group-hover:scale-y-105 group-hover:bg-black transition-transform duration-700"></div>
        Logout
      </button>
    </div>
  );
};

export default Profile;
