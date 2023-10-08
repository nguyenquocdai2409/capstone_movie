import { Carousel, ConfigProvider, message } from "antd";
import React, { useEffect, useState } from "react";
import { getDataSlider } from "../../../api/apiLocal";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export default function Slider() {
  const [banner, setBanner] = useState([]);
  //try catch : có thể chạy ở mọi nơi
  // async-await
  let fetchData = async () => {
    try {
      let response = await getDataSlider();
      console.log(response.data.content);
      setBanner(response.data.content);
    } catch {
      message.error("đã có lỗi xảy ra");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Carousel: {
              dotHeight: 10,
              dotWidth: 30,
              dotActiveWidth: 24,
              /* here is your component tokens */
            },
          },
        }}
      >
        {" "}
        <Carousel autoplay effect="fade">
          {banner.map((item, index) => {
            return (
              <img
                src={item.hinhAnh}
                key={index}
                className="desktop:w-full desktop:h-200 laptop:h-96 laptop:w-96 tablet:h-40 tablet:w-40 object-bottom"
              />
            );
          })}
        </Carousel>
      </ConfigProvider>
    </div>
  );
}
