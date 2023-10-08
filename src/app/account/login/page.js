import LoginComponent from "@/components/organisms/LoginComponent";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import verifyUser from "@/utils/verifiyUser";

const LoginPage = async () => {
  const cookieStore = cookies();
  const data = cookieStore.get("koovsAuth");
  if (data) {
    const token = data.value;
    const {auth} = await verifyUser(token);
    if(auth){
      redirect("/account");
    }
  }

  return <LoginComponent />;
};

export default LoginPage;
