import React from "react";
import LogoutButton from "@/components/atoms/LogoutButton.js";


const Profile = ({ name, email }) => {
  
  return (
    <div className="w-full flex flex-col items-center gap-y-4 p-12 px-4">
      <div className="h-44 w-44 rounded-full bg-[url('/profile.webp')] bg-cover" />
      <h3>{name}</h3>
      <h3>{email}</h3>
      <LogoutButton/>
    </div>
  );
};

export default Profile;
