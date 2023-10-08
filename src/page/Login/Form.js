import React from "react";
import {
  Avatar,
  Button,
  Checkbox,
  Form,
  Image,
  Input,
  Tooltip,
  message,
} from "antd";
import axios from "axios";
import { BASE_URL, configHeader } from "../../api/api";

import { useDispatch } from "react-redux";
import { SET_INFO } from "../../redux/reducer/constant/user";
import { useNavigate } from "react-router-dom";
import { userLocalStorage } from "../../api/localService";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { loginAction } from "../../redux/Aciton/User";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const FormLogin = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    axios
      .post(`${BASE_URL}/QuanLyNguoiDung/DangNhap`, values, {
        headers: configHeader(),
      })
      .then((res) => {
        // đẩy dữ liệu (res) lên redux sai khi login thành công : mapdispatchtoprops ( bên redux)
        let action = {
          type: SET_INFO,
          payload: res.data.content,
          //payload : đưa dữ liệu lên => thì ta đưa cái res.data ( dữ liệu mình cần)
        };
        dispatch(action);
        // lúc này dữ liệu của admin đăng nhập đã được đưa lên redux nhưng chưa được lưu lại
        // =>>> lưu dữ liệu trên localstorage
        userLocalStorage.set(res.data.content);
        /// useNavigate để di chuyển trang
        navigate("/");
        message.success("Đăng nhập thành công!");
      })
      .catch((err) => {
        console.log(err);
        message.error("Tài khoản hoặc mật khẩu không chính xác!");
      });
  };
  const onFinish2 = (values) => { 
    // set up redux thunk
    dispatch(loginAction(values));
    navigate("/");
   }
  return (
    <Form
    layout="vertical"
      name="normal_login"
      className="login-form w-2/3"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="taiKhoan"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="matKhau"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button w-full bg-blue-500">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormLogin;

// => () : return trực tiếp
