"use client";
import React, { useRef } from "react";
import Input from "@/components/atoms/Input";
import Link from "next/link";

const LoginComponent = ({ onLogin }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const loginHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    onLogin(email, password);
  };
  return (
    <div className="py-20">
      <h1 className="self-start text-3xl font-medium w-fit mx-auto">Log In</h1>
      <div className="w-fit mx-auto flex items-center gap-x-2 mt-8 mb-20">
        <Link href={"/"} className="text-sm hover:text-gray-400">
          Home
        </Link>
        <p>{">"}</p>
        <p className="text-sm">Account</p>
      </div>
      <form className="px-4" onSubmit={loginHandler}>
        <div className="flex flex-col gap-y-4 items-center mx-auto w-[100%] max-w-[28rem]">
          <h2 className="self-start text-xl font-medium">Log In</h2>
          <Input ref={emailRef} type="email" placeholder="Email" />
          <Input ref={passwordRef} type="password" placeholder="Password" />
          <button
            type="submit"
            className="group relative text-white px-4 py-4 w-full text-xs font-semibold"
          >
            <div className="bg-black absolute inset-0 -z-10 rounded-md group-hover:scale-x-[1.03] group-hover:scale-y-105 transition-all duration-700"></div>
            Log In
          </button>

          <Link href="/account/register" className="w-full">
            <button
              type="button"
              className="group relative text-black px-4 py-4 w-full text-xs font-semibold hover:text-white border border-black rounded-md hover:border-0"
            >
              <div className="bg-white absolute inset-0 -z-10 rounded-md group-hover:scale-x-[1.03] group-hover:scale-y-105 group-hover:bg-black transition-transform duration-700"></div>
              Register
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
