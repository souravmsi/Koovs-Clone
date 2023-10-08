"use client";
import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-40 flex justify-center p-20">
      <HashLoader color="#000000" size={30}/>
    </div>
  );
};

export default Loading;
