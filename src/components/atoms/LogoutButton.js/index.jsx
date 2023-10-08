"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "@/redux/slices/auth-slice";
import { emptyCart } from "@/redux/slices/cart-slice";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logOut());
    dispatch(emptyCart());
    router.refresh();
  };
  return (
    <button
      onClick={logOutHandler}
      type="button"
      className="group relative text-black px-12 py-4 w-fit text-xs font-semibold hover:text-white border border-black rounded-md hover:border-0"
    >
      <div className="bg-white absolute inset-0 -z-10 rounded-md group-hover:scale-x-[1.03] group-hover:scale-y-105 group-hover:bg-black transition-transform duration-700"></div>
      Logout
    </button>
  );
};

export default LogoutButton;
