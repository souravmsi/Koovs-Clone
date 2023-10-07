'use client'
import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { login, verifyUser } from "@/redux/slices/auth-slice";
import LoginComponent from "@/components/organisms/LoginComponent";
import { useSelector } from "react-redux";
import Profile from "@/components/organisms/Profile";

const LoginPage = () => {
  const dispatch = useDispatch();
  const {isAuth, username, name} = useSelector((state)=>state.authReducer);
  useEffect(()=>{
    const token = localStorage.getItem('koovsAuth');
    if(token){
      dispatch(verifyUser(token))
    }
  },[dispatch]);
  const onLogin = (email, password) => {
    dispatch(login({email,password}));
  }
  return (
    <div>
      {!isAuth && <LoginComponent onLogin={onLogin}/>}
      {isAuth && <Profile email={username} name={name}/>}
    </div>
  );
};

export default LoginPage;
