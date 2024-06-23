import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import BasicButton from "../../../components/Button/BasicButton";
import HeaderMainPage from "../Header/HeaderMainPage";

import { Tooltip } from "@mui/material";
import { IoMdEye, IoMdTrash } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import BasicIconButton from "../../../components/Button/BasicIconButton";
import Table from "../../../components/Table/Table";
import "../ProductManagement/ProductManagement.scss";

import { vi } from "date-fns/locale";
import { format, formatDistance, parseISO } from "date-fns";
import axiosClient from "../../../api/axiosClient";
const Cart = () => {
  const [carts, setCarts] = useState([]);
  const navigate = useNavigate();
  const getBackground = (cart) => {
    switch (cart.status.name) {
      case "Mới": {
        return "bg-sky-200";
      }
      case "Đã liên hệ": {
        return "bg-amber-200";
      }
      case "Đã thanh toán": {
        return "bg-emerald-200";
      }
      case "Đã huỷ": {
        return "bg-rose-300";
      }
      default:
        return "bg-sky-200";
    }
  };

  useEffect(() => {
    axiosClient.get("/cart?sortOrder=desc&sortField=createdAt").then((res) => {
      setCarts(res.responseData.rows);
    });
  }, []);

  const getDate = (cart) => {
    console.log(Date(Date.now), new Date(cart.createdAt));
    const compareTwoDate = formatDistance(
      parseISO(cart.createdAt),
      Date.now(),
      {
        locale: vi, // Fall back to English locale if Vietnamese is unavailable
        addSuffix: true,
      }
    );

    return compareTwoDate;
  };

  return (
    <div className="page-body">
      <HeaderMainPage>
        <div className="flex justify-end ui-layout gap-x-2">
          <BasicButton
            icon={<AiOutlinePlusCircle></AiOutlinePlusCircle>}
            title="Thêm mới"
            className="green-btn"
            onClick={() => {}}
            style={{ visibility: "hidden" }}
          />
        </div>
      </HeaderMainPage>
      <div className="ui-layout">
        <div className="py-[25px]">
          <h1 className="text-[28px] text-blue-950 font-semibold">
            Danh sách đơn hàng
          </h1>
        </div>
        <div>
          <Table>
            <thead></thead>
            <tbody>
              {carts?.length === 0 ? (
                <div className="flex flex-col items-center justify-center my-10 gap-y-10">
                  <h4 className="font-medium text-2xl">
                    Không tìm thấy kết quả nào
                  </h4>
                </div>
              ) : (
                <>
                  <tr className="sticky z-9 shadow-md">
                    <th>Mã đơn hàng</th>
                    <th>Khách hàng</th>
                    <th>Số điện thoại</th>
                    <th>Ngày tạo</th>
                    <th>Trạng thái</th>
                    <th></th>
                  </tr>
                  {carts.map((item, index) => {
                    const bg = getBackground(item);
                    const date = getDate(item);
                    return (
                      <tr key={item.id.toString().split("-")[0]}>
                        <td className="!py-[10px] !px-[14px]">
                          {item.id.toString().split("-")[0]}
                        </td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>
                          {format(new Date(item.createdAt), "dd/MM/yyyy")} (
                          {date})
                        </td>
                        <td>
                          <span className={`${bg + " px-2 py-0.5 rounded"} `}>
                            {item.status.name}
                          </span>
                        </td>
                        <td>
                          <div className="flex gap-1">
                            <Tooltip title="Xem chi tiết" arrow placement="top">
                              <BasicIconButton
                                className="!bg-blue-500"
                                handleOnClick={() => {
                                  navigate(
                                    `/admin/cart/cart-management/edit/${item.id}`
                                  );
                                }}
                              >
                                <IoMdEye color="white"></IoMdEye>
                              </BasicIconButton>
                            </Tooltip>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
