import React, { useEffect, useState } from "react";
import { getMovieTheater } from "../../../api/apiLocal";
import { Tabs } from "antd";
import moment from "moment/moment";
const onChange = (key) => {
  console.log(key);
};
// const items = [
//   {
//     key: "1",
//     label: "Tab 1",
//     children: "Content of Tab Pane 1",
//   },
//   {
//     key: "2",
//     label: "Tab 2",
//     children: "Content of Tab Pane 2",
//   },
//   {
//     key: "3",
//     label: "Tab 3",
//     children: "Content of Tab Pane 3",
//   },
// ];
export default function TabMovie() {
  const [danhSachHeThongRap, setdanhSachHeThongRap] = useState([]);

  // useEffect : getMovieTheater  để lấy api từ server về
  useEffect(() => {
    getMovieTheater()
      .then((res) => {
        setdanhSachHeThongRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let renderDanhSachPhim = (dsPhim) => {
    return dsPhim.map((phim, index) => {
      return (
        <div className="flex p-1 border">
          <img src={phim.hinhAnh} className="w-40 h-40 object-cover" />
          <div className="ml-10 ">
            <p className="font-medium mb-5">
              {" "}
              <p className="c18">C18</p> {phim.tenPhim}
            </p>
            <div className="jss219">
              {phim.lstLichChieuTheoPhim
                .slice(0, 4)
                .map((lichChieuTheoPhim) => {
                  return (
                    <a className="jss220">
                      <a className="text-green-500 font-medium">
                        {moment(lichChieuTheoPhim).format("LLL")}
                      </a>
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      );
    });
  };

  let handleHeThongRap = () => {
    return danhSachHeThongRap.map((heThongRap, index) => {
      return {
        key: index,
        label: <img src={heThongRap.logo} style={{ width: 50 }} />,
        children: (
          <Tabs
            style={{ height: 500, }}
            tabPosition="left"
            items={heThongRap.lstCumRap.map((cumRap) => {
              return {
                key: cumRap.tenCumRap,
                label: (
                  <div className="text-left w-72 whitespace-normal">
                    <p className="text-green-500 font-medium" >
                      {cumRap.tenCumRap}
                    </p>
                    <p className="">{cumRap.diaChi}</p>
                  </div>
                ),
                children: (
                  <div style={{ height: 500, overflow: "scroll" }}>
                    {renderDanhSachPhim(cumRap.danhSachPhim)}
                  </div>
                ),
              };
            })}
          />
        ),
      };
    });
  };

  return (
    <div className=" container shadow border-l-black border-2 p-3 rounded">
      <Tabs
        style={{ height: 500 }}
        tabPosition="left"
        defaultActiveKey="1"
        items={handleHeThongRap()}
        onChange={onChange}
      />
    </div>
  );
}

//items : props
//{items} : array
// => truyền 1 props dưới dạng array

// responesive react