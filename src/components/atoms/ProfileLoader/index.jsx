import React from "react";

const ProfileLoader = () => {
  return (
    <div className="py-12 shadow rounded-md p-4 w-[50%] mx-auto">
      <div className="animate-pulse flex flex-col items-center gap-y-8">
        <div className="rounded-full bg-slate-700 h-28 w-28" />
        <div className="rounded-full bg-slate-700 h-2 w-[60%]" />
        <div className="rounded-full bg-slate-700 h-2 w-[50%]" />
        <div className="rounded-full bg-slate-700 h-2 w-[60%]" />
      </div>
    </div>
  );
};

export default ProfileLoader;
