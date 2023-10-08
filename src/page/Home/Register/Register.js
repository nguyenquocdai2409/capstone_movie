import React from "react";
import bgMovie from "./bgmovie.png"
import FormRegister from "./FormRegister";

export default function Register() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgMovie})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
      className="brightness-100 flex items-center w-auto h-screen "
    >
      <div className="container-login bg-white rounded-xl flex justify-center flex-col items-center space-x-5 ">
        <p className="font-semibold my-3 text-red-500">ĐĂNG KÝ</p>
        <FormRegister/>
      </div>
    
    </div>
  );
}
