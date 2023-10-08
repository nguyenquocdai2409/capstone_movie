import React from "react";
import { useSelector } from "react-redux";
import { userLocalStorage } from "../../api/localService";
import { NavLink } from "react-router-dom";
import userLogin from "./userlogin.png"

export default function Header() {
  let { info } = useSelector((state) => {
    return state.userReducer;
  });

  let handleLogOut = () => {
    userLocalStorage.remove();
    // load lại trang khi bấm đăng xuất
    // window.location.reload();
    // còn muốn chuyển sang trang login thì
    window.location.href = "/login"
  };

  let handleLogIn = () => {
    window.location.href = "/login";
  };

  let handleRegister = () => { 
    window.location.href = "/register"
   }

  let renderUser = () => {
    let styleBtn = "border-2 border-black rounded-xl px-7 py-3 mx-2";
    if (info) {
      // đã đăng nhập
      return (
        <>
          <span className={styleBtn}> {info.hoTen} </span>
          <button onClick={handleLogOut} className={styleBtn}>
            Đăng Xuất
          </button>
        </>
      );
    } else {
      return (
        <>
          <button onClick={handleLogIn} className={styleBtn}>
            Đăng Nhập
          </button>
          <button onClick={handleRegister} className={styleBtn}>Đăng Ký</button>
        </>
      );
    }
  };

  return (
    <div className="h-16 flex items-center justify-between shadow-xl px-10">
      <NavLink to={"/"}>
        <span className="text-red-600 font-semibold text-3xl animate-pulse">
          CYBER CINEMA
        </span>
      </NavLink>
      <div>{renderUser()}</div>
    </div>
  );
}
// làm mapState vẫn đc nhưng có cách gọn hơn
