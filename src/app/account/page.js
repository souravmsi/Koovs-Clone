import React from "react";
import Profile from "@/components/organisms/Profile";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import verifyUser from "@/utils/verifiyUser";

const AccountPage = async () => {
  const cookieStore = cookies();
  const data = cookieStore.get("koovsAuth");
  let isAuth, fullName, username;
  if (data) {
    const token = data.value;
    const { auth, name, email } = await verifyUser(token);
    isAuth = auth;
    fullName = name;
    username = email;
    if (!auth) {
      redirect("/cart");
    }
  } else {
    redirect("/account/login");
  }

  return (
    <div>
      <Profile email={username} name={fullName} />
    </div>
  );
};

export default AccountPage;
