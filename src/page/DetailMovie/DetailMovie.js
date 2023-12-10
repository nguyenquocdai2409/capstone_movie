import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie } from "../../api/apiLocal";
import { Progress } from "antd";

export default function DetailMovie() {
  // useParams => lấy id từ url
  let params = useParams();
  console.log("movie", params);
  const [detail, setDetail] = useState({});

  // gọi api lấy chi tiết phim
  useEffect(() => {
    // goị api lấy chi tiết phim dựa vào id
    getDetailMovie(params.id)
      .then((res) => {
        console.log(res);
        setDetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className="flex justify-between items-center p-28 bg-cyan-950"
    >
      <img className="w-1/3 aspect-square mt-12" src={detail.hinhAnh} />
      <Progress
        size={350}
        strokeColor={"yellow"}
        type="circle"
        percent={detail.danhGia * 10}
        format={(percent) => <span className="text-white">{percent} ĐIỂM</span>}
      />
    </div>
  );
}
