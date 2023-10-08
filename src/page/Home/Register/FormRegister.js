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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL, configHeader } from "../../../api/api";
const FormRegister = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .post(`${BASE_URL}/QuanLyNguoiDung/DangKy`, values, {
        headers: configHeader(),
      })
      .then((res) => {
        console.log(res);
        navigate("/login");
        message.success("Đăng ký thành công");
      })
      .catch((err) => {
        console.log(err);
        message.error("Tài khoản đã tồn tại");
      });
  };

  return (
    <Form
      layout="vertical"
      name="normal_login"
      className="login-form w-2/3"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Tài Khoản"
        name="taiKhoan"
        rules={[{ required: true, message: "Đây là trường bắt buộc!" }]}
      >
        <Input placeholder="Tài Khoản" style={{ height: "50px" }} />
      </Form.Item>
      <Form.Item
        label="Mật khẩu"
        name="matKhau"
        rules={[{ required: true, message: "Đây là trường bắt buộc!" }]}
      >
        <Input
          type="password"
          placeholder="Mật Khẩu"
          style={{ height: "50px" }}
        />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Đây là trường bắt buộc!" }]}
      >
        <Input placeholder="email" style={{ height: "50px" }} />
      </Form.Item>
      <Form.Item
        label="Số Điện Thoại"
        name="soDt"
        rules={[{ required: true, message: "Đây là trường bắt buộc!" }]}
      >
        <Input placeholder="Số điện thoại" style={{ height: "50px" }} />
      </Form.Item>
      <Form.Item
        label="Họ Tên"
        name="hoTen"
        rules={[{ required: true, message: "Đây là trường bắt buộc!" }]}
      >
        <Input placeholder="Họ tên" style={{ height: "50px" }} />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button w-full bg-red-500 "
        >
          ĐĂNG KÝ
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormRegister;
