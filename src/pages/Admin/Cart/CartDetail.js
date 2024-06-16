import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import BasicButton from "../../../components/Button/BasicButton";
import HeaderMainPage from "../Header/HeaderMainPage";

import { Tooltip } from "@mui/material";
import { IoMdEye, IoMdTrash } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import BasicIconButton from "../../../components/Button/BasicIconButton";
import Table from "../../../components/Table/Table";
import "../ProductManagement/ProductManagement.scss";

import { vi } from "date-fns/locale";
import { formatDistance, parseISO } from "date-fns";
import axiosClient from "../../../api/axiosClient";
import CartItem from "./CartItem";

const CartDetail = () => {
  const [cart, setCart] = useState([]);
  const [formatted, setFormatted] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const getBackground = (cart) => {
    switch (cart.status) {
      case "Mới": {
        return "bg-sky-200";
      }
      case "Đã liên hệ": {
        return "bg-amber-200";
      }
      case "Đã thanh toán": {
        return "bg-emerald-200";
      }
      case "Đã hủy": {
        return "bg-rose-300";
      }
    }
  };

  useEffect(() => {
    axiosClient.get("/cart?filters=id==" + id).then((res) => {
      setCart(res.responseData.rows[0]);
    });
  }, []);

  useEffect(() => {
    if (cart && typeof cart.connects === "object" && formatted === false) {
      const a = cart.connects;
      setCart({
        ...cart,
        connects: [{ ...a }],
      });
      setFormatted(true);
    }
  }, [cart, formatted]);

  const getDate = (cart) => {
    console.log(Date(Date.now), Date(cart.createdAt));
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
            Chi tiết đơn hàng
          </h1>
        </div>
        <div>
          <Table>
            <thead></thead>
            <tbody>
              {cart?.length === 0 ? (
                <div className="flex flex-col items-center justify-center my-10 gap-y-10">
                  <h4 className="font-medium text-2xl">
                    Không tìm thấy kết quả nào
                  </h4>
                </div>
              ) : (
                <>
                  <tr className="sticky z-9 shadow-md">
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                  </tr>
                  {Array.isArray(cart?.connects) &&
                    cart.connects.map((item, index) => {
                      return <CartItem key={item.id} {...item} />;
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

export default CartDetail;
