import React, { useEffect, useState } from "react";
import { Col, Divider, Row } from "antd";
import { useParams } from "react-router-dom";
import { getDetailLichChieu } from "../../api/apiLocal";
const style = {
  background: "#0092ff",
  padding: "8px 0",
  width: "24px",
  height: "24px",
};

const OrderTickket = () => {
  const params = useParams();
  const [thongTinDatVe, setthongTinDatVe] = useState({});
  const [gheDuocChon, setGheDuocChon] = useState([]);

  console.log("thong tin dat ve", thongTinDatVe);
  useEffect(() => {
    getDetailLichChieu(params.maLichChieu)
      .then((res) => {
        setthongTinDatVe(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="flex">
        <div style={{ width: "70%" }}>
          <Row gutter={[16, 24]}>
            {thongTinDatVe.danhSachGhe?.map((item, index) => {
              return (
                <Col className="gutter-row" span={2}>
                  <div
                    role="button"
                    className={`${
                      item.daDat ? "!bg-gray-600 cursor-not-allowed" : ""
                    }`}
                    style={style}
                    onClick={() => {}}
                  >
                    {" "}
                    {item.tenGhe}{" "}
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
        <div style={{ width: "30%" }}>
          <div>
            <p>tong tien</p>
            <p>Cụm Rạp: {thongTinDatVe.thongTinPhim?.tenCumRap}</p>
            <p>Địa chỉ:{thongTinDatVe.thongTinPhim?.diaChi}</p>
            <p>Rạp:{thongTinDatVe.thongTinPhim?.tenRap}</p>
            <p>
              Ngày giờ chiếu:{thongTinDatVe.thongTinPhim?.ngayChieu} -{" "}
              {thongTinDatVe.thongTinPhim?.gioChieu}
            </p>
            <p>Tên Phim:{thongTinDatVe.thongTinPhim?.tenPhim}</p>
            <p>
              Chọn:
              {gheDuocChon.map((item, index) => (
                <span>
                  {" "}
                  {index === 0 ? "" : ","}
                  {item}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderTickket;
