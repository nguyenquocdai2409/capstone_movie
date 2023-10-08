// đi định nghĩa trên redux ( redux thunk)
// rồi đi dispatch sau

import axios from "axios";
import { BASE_URL, configHeader } from "../../api/api";
import { SET_INFO } from "../reducer/constant/user";

export let loginAction = (values) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/QuanLyNguoiDung/DangNhap`, values, {
        headers: configHeader(),
      })
      .then((res) => {
        console.log(res);
        let action = {
          type: SET_INFO,
          payload: res.data.content,
        };
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
