import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import BasicButton from "../../../components/Button/BasicButton";
import HeaderMainPage from "../Header/HeaderMainPage";

import { useNavigate, useParams } from "react-router-dom";
import Table from "../../../components/Table/Table";
import "../ProductManagement/ProductManagement.scss";
import { vi } from "date-fns/locale";
import { format, formatDistance, parseISO } from "date-fns";
import { toast } from "react-toastify";
import axiosClient from "../../../api/axiosClient";
import CartItem from "./CartItem";
import parse from "date-fns/parse";

const CartDetail = () => {
  const [cart, setCart] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const getBackground = (cart) => {
    switch (cart?.status?.name) {
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

  const getCart = () => {
    axiosClient.get("/cart?filters=id==" + id).then((res) => {
      setCart(res.responseData.rows[0]);
    });
  };

  useEffect(() => {
    getCart();
    axiosClient
      .get("/status")
      .then((res) => setStatusList(res.responseData.rows));
  }, []);

  const handleDeleteCart = () => {
    axiosClient.delete(`/cart?filters=id==${id}`).then((res) => {
      if (res.status === "success") {
        toast.success("Xóa đơn hàng thành công!");
      } else {
        toast.error("Xóa đơn hàng không thành công!");
        navigate("/admin/cart/cart-management");
      }
    });
  };

  const handleUpdateStatus = (status) => {
    const statusId = statusList.find((s) => s.name == status).id;
    axiosClient
      .put(`/cart/` + id, {
        statusId: statusId,
      })
      .then((res) => {
        if (res.status === "success") {
          toast.success("Chuyển đổi trạng thái đơn hàng thành công!");
          getCart();
          navigate("/admin/cart/cart-management");
        } else {
          toast.error("Chuyển đổi trạng thái đơn hàng không thành công!");
        }
      });
  };

  console.log(cart);

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
          <div className="flex justify-content-between">
            <div className="">
              <div>
                Trạng thái:{" "}
                <span className={`${getBackground(cart)} px-3 rounded`}>
                  {cart?.status?.name}
                </span>
              </div>
            </div>
            <div className="flex justify-content-end space-x-1">
              <p className="mr-2">Đánh dấu: </p>
              {cart?.status?.name !== "Đã liên hệ" && (
                <button
                  className="rounded bg-amber-200 px-3 border-1 border-black"
                  onClick={() => handleUpdateStatus("Đã liên hệ")}
                >
                  Đã liên hệ
                </button>
              )}
              {cart?.status?.name !== "Đã thanh toán" && (
                <button
                  className="rounded bg-emerald-200 px-3 border-1 border-black"
                  onClick={() => handleUpdateStatus("Đã thanh toán")}
                >
                  Đã thanh toán
                </button>
              )}
              {cart?.status?.name !== "Đã huỷ" && (
                <button
                  className="rounded bg-rose-300 px-3 border-1 border-black"
                  onClick={() => handleUpdateStatus("Đã huỷ")}
                >
                  Đã huỷ
                </button>
              )}
              <button
                className="rounded bg-rose-300 px-3 border-1 border-black"
                onClick={handleDeleteCart}
              >
                Xóa đơn hàng
              </button>
            </div>
          </div>
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
