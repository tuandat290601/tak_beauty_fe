import React from "react";

import "./Quality.sass";
import { qualities } from "../../../helpers/data";
import { CustomLink } from "../../../components";

const Quality = () => {
  return (
    <section id="quality" className="quality py-5">
      <div className="row w-100 p-0 m-0">
        <div className="col-5 m-auto">
          <div className="container align-content-middle">
            <div className="quality-introduction">
              <h1>TAK Beauty</h1>
              <p>
                Đã và đang là nhà phân phối cấp cao nhất 7 năm của tập đoàn chỉ
                nâng cơ quốc tê White medience tại VN Đơn vị phân phối độc quyền
                filler MD LIFT của tập đoàn Exocobio (tập đoàn sản xuất Exosome
                ASCE) Đồng thời là đại lý phân phối chính hãng của các sản phẩm
                Juverderm, Jalupro, Botulax,… với tiêu chí nói không với hàng
                giả, sức khoẻ người tiêu dùng là ưu tiên hàng đầu. Khẳng định sự
                an tâm thoải mái cho bất cứ chuyên gia, bác sĩ khi dùng sản phẩm
                của công ty.
              </p>
              <CustomLink path="" text="Xem ngay" />
            </div>
          </div>
        </div>
        <div className="col-7 pe-0">
          <div className="quality-img">
            <img
              src="https://theme.hstatic.net/200000584705/1001023835/14/home_store_image.png?v=10"
              alt="quality"
            />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          {qualities.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="quality-item d-flex flex-column align-items-center">
                  {item.icon}
                  <h5>{item.title}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Quality;
