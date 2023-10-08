import React, { useEffect, useState } from "react";
import { getListMovie } from "../../../api/apiLocal";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { NavLink } from "react-router-dom";

export default function ListMovie() {
  //render danh sách movie
  const [movieArr, setMovieArr] = useState([]);
  useEffect(() => {
    getListMovie()
      .then((res) => {
        setMovieArr(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderMovieArr = () => {
    return movieArr.slice(0, 12).map((item) => {
      return (
        <Card
          hoverable
          cover={
            <img className="desktop:h-56 laptop:h-52 tablet:w-auto object-cover" alt="" src={item.hinhAnh} />
          }
          // style={{ width: "230px" }}
        >
          <Meta
            className=""
            title={
              <span className="font-semibold uppercase">
                {" "}
                <span className="c18">C18</span> {item.tenPhim}{" "}
              </span>
            }
            description={
              <span className="text-green-600">{item.ngayKhoiChieu}</span>
            }
          />

          <NavLink to={`/movie/${item.maPhim}`}>
            <button className="bg-red-500 text-white w-full px-5 py-3 rounded mt-5">
              MUA VÉ
            </button>
          </NavLink>
        </Card>
      );
    });
  };
  return (
    <div>
      <div className=" container grid desktop:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 gap-10">
        {renderMovieArr()}
      </div>
    </div>
  );
}
