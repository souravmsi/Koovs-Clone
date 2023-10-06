"use client";
import Link from "next/link";
import Input from "@/components/atoms/Input";
import React, { useRef } from "react";
import toast from "react-hot-toast";

const RegisterComponent = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const registerHandler = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    let toastId = toast.loading("Loading");
    const response = await fetch(
      "https://koovs-backend.onrender.com/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, confirmPassword }),
      }
    );
    if (!response.ok) {
      const { msg } = await response.json();
      toast.error(msg, { id: toastId });
    } else {
      const data = await response.json();
      toast.success("User registered sucessfully!", { id: toastId });
      nameRef.current.value = '';
      emailRef.current.value = '';
      passwordRef.current.value = '';
      confirmPasswordRef.current.value = '';
    }
  };

  return (
    <div className="py-20">
      <h1 className="self-start text-3xl font-medium w-fit mx-auto">
        Register
      </h1>
      <div className="w-fit mx-auto flex items-center gap-x-2 mt-8 mb-20">
        <Link href={"/"} className="text-sm hover:text-gray-400">
          Home
        </Link>
        <p>{">"}</p>
        <p className="text-sm">Create Account</p>
      </div>
      <form className="px-4" onSubmit={registerHandler}>
        <div className="flex flex-col gap-y-4 items-center mx-auto w-[100%] max-w-[28rem]">
          <h2 className="self-start text-xl font-medium">Register</h2>
          <Input type="text" placeholder="Name" required ref={nameRef} />
          <Input type="email" placeholder="Email" required ref={emailRef} />
          <Input
            type="password"
            placeholder="Password"
            required
            ref={passwordRef}
          />
          <Input
            type="text"
            placeholder="Confimr Password"
            required
            ref={confirmPasswordRef}
          />
          <p className="text-xs text-gray-600 font-normal leading-5">
            Sign up for early Sale access plus tailored new arrivals, trends and
            promotions. To opt out, click unsubscribe in our emails.
          </p>
          <button
            type="submit"
            className="group relative text-white px-4 py-4 w-full text-xs font-semibold"
          >
            <div className="bg-black absolute inset-0 -z-10 rounded-md group-hover:scale-x-[1.03] group-hover:scale-y-105 transition-all duration-700"></div>
            Register
          </button>

          <Link href="/account" className="w-full">
            <button
              type="button"
              className="group relative text-black px-4 py-4 w-full text-xs font-semibold hover:text-white border border-black rounded-md hover:border-0"
            >
              <div className="bg-white absolute inset-0 -z-10 rounded-md group-hover:scale-x-[1.03] group-hover:scale-y-105 group-hover:bg-black transition-transform duration-700"></div>
              Log In
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterComponent;
