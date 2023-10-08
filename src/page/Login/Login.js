import React from "react";
import Form from "./Form";
import bgMovie from "./bgmovie.png";
import userImg from "./user.png";

export default function Login() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgMovie})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position:"relative",
      }}
      className="brightness-100 flex items-center w-auto h-screen "
    >
      <div className="container-login bg-white rounded-xl flex justify-center flex-col items-center ">
        <img src={userImg} style={{width:70}} />
        <p className="font-semibold my-3">ĐĂNG NHẬP</p>
        <Form />
      </div>
    </div>
  );
}
