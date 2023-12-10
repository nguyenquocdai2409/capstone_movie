import axios from "axios";
import { BASE_URL, configHeader } from "./api";

export let getListMovie = () => {
  // hàm thì phải có giá trị trả về : return
  // nếu k có return thì sẽ trả về giá trị là : undefine
  // =>> thì sẽ ko .then .catch được

  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayDanhSachPhim?maNhom=GP09`,
    method: "GET",
    headers: configHeader(),
  });
};

export let getDetailMovie = (id) => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
    method: "GET",
    headers: configHeader(),
  });
};

export let getMovieTheater = () => {
  return axios({
    url: `${BASE_URL}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09`,
    method: "GET",
    headers: configHeader(),
  });
};

export let getDataSlider = () => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayDanhSachBanner`,
    method: "GET",
    headers: configHeader(),
  });
};
// dat ve
export let getDetailLichChieu = (maLichChieu) => {
  return axios({
    url: `${BASE_URL}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
    method: "GET",
    headers: configHeader(),
  });
};
