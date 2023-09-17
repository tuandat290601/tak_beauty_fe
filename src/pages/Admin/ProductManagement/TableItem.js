import {
  Checkbox,
  FormControlLabel,
  Rating,
  Skeleton,
  Tooltip,
} from "@mui/material";
import Config from "../../../configuration";
import useHover from "../../../hooks/useHover";
import { AiFillEye, AiOutlineEye } from "react-icons/ai";
import { BasicEditablePopup, BasicTag } from "../../../components";
import BasicIconButton from "../../../components/Button/BasicIconButton";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import { PRODUCT_TYPE, SUBMIT_STATUS } from "../../../common/constant";
import { productApi } from "../../../api";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { reactQueryKey } from "../../../configuration/reactQueryKey";
import { useNavigate } from "react-router-dom";
import { PAGE_PATH } from "../../../configuration/routeConfig";
import { IMG_PATH } from "../../../configuration/imagePath";
import {
  navigateToEditBaseOnProductType,
  productTypeToString,
} from "../../../helpers/util";

export const TableItemSkeleton = () => {
  return (
    <tr className="hover:bg-slate-100">
      <td className="border-t border-b border-slate-200 p-2">
        <Skeleton variant="text"></Skeleton>
      </td>
      <td className="border-t border-b min-w-[200px] max-w-[200px] border-slate-200 p-2 hover:underline">
        <Skeleton variant="text"></Skeleton>
      </td>
      <td className="border-t border-b min-w-[400px] max-w-[400px] border-slate-200 p-2 truncate">
        <Skeleton variant="text"></Skeleton>
      </td>
      <td className="border-t border-b border-slate-200 p-2">
        <Skeleton variant="text"></Skeleton>
      </td>
      <td className="border-t border-b border-slate-200 p-2">
        <Skeleton variant="text"></Skeleton>
      </td>
      <td className="border-t border-b border-slate-200 p-2">
        <div className="flex gap-2 justify-center">
          <Skeleton variant="rectangular" width={40} height={40}></Skeleton>
          <Skeleton variant="rectangular" width={40} height={40}></Skeleton>
          <Skeleton variant="rectangular" width={40} height={40}></Skeleton>
        </div>
      </td>
    </tr>
  );
};

export const TableItem = ({
  page,
  product,
  index,
  className,
  checked,
  handleCheck,
  handleDeleteProduct,
}) => {
  const [hoverRef, isHovered] = useHover();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const handleAddFavTag = () => {};
  const handleAddHotSellTag = () => {};
  const handleAddOutStandingTag = () => {};
  const [updateUpdateOriginPriceStatus, setUpdateOriginPriceStatus] =
    useState();
  const [updateUpdateDiscountPriceStatus, setUpdateDiscountPriceStatus] =
    useState();
  const handleUpdateDiscountPrice = async (editPrice) => {
    setUpdateDiscountPriceStatus(SUBMIT_STATUS.LOADING);
    if (editPrice > parseInt(product.originPrice)) {
      toast.error("Giá khuyến mãi phải nhỏ hơn hoặc bằng giá gốc");
      setUpdateDiscountPriceStatus(SUBMIT_STATUS.ERROR);
      return;
    }
    const data = {
      id: product.id,
      discountPrice: parseInt(editPrice) || 0,
    };
    const res = await productApi.updateProduct(data);
    if (res.status === "success") {
      toast.success(
        `Cập nhật giá khuyến mãi ${productTypeToString(page)} thành công`
      );
      queryClient.invalidateQueries(reactQueryKey.GET_PRODUCTS);
      setUpdateDiscountPriceStatus(SUBMIT_STATUS.SUCCESS);
    } else {
      toast.error(
        `Đã có lỗi xảy ra! Cập nhật giá khuyến mãi ${productTypeToString(
          page
        )} không thành công`
      );
      setUpdateDiscountPriceStatus(SUBMIT_STATUS.ERROR);
    }
  };
  const handleUpdateOriginPrice = async (editPrice) => {
    setUpdateOriginPriceStatus(SUBMIT_STATUS.LOADING);
    if (editPrice < parseInt(product.discountPrice)) {
      toast.error("Giá gốc phải lớn hơn hoặc bằng giá khuyến mãi");
      setUpdateOriginPriceStatus(SUBMIT_STATUS.ERROR);
      return;
    }
    const data = {
      id: product.id,
      originPrice: parseInt(editPrice) || 0,
    };
    const res = await productApi.updateProduct(data);
    if (res.status === "success") {
      console.log("success");
      toast.success(`Cập nhật giá gốc ${productTypeToString(page)} thành công`);
      queryClient.invalidateQueries(reactQueryKey.GET_PRODUCTS);
      setUpdateOriginPriceStatus(SUBMIT_STATUS.SUCCESS);
    } else {
      toast.error(
        `Đã có lỗi xảy ra! Cập nhật giá gốc ${productTypeToString(
          page
        )} không thành công`
      );
      setUpdateOriginPriceStatus(SUBMIT_STATUS.ERROR);
    }
  };
  return (
    <tr className={className} ref={hoverRef}>
      <td className="!py-[10px] !px-[14px]">
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={(e) => handleCheck(e, index)}
            />
          }
        />
      </td>
      <td>
        <img
          src={
            product?.image?.length > 0 && product?.image[0] !== ""
              ? Config.apiConfig.imageEndPoint + product?.image[0]
              : IMG_PATH.NO_IMG
          }
          alt="thumb"
          className="w-[50px] h-full rounded-md"
        />
      </td>
      <td className="!py-[10px]">
        <div className="w-fit">
          <Tooltip title={product?.title} arrow placement="top" color="error">
            <h4 className="font-semibold text-sm">{product?.title}</h4>
          </Tooltip>
        </div>
        <div className="mt-2 flex justify-start items-center gap-1">
          <a href="#" target="_blank">
            <Rating value={product?.rating || 0} size="small" readOnly></Rating>
          </a>
          <span className="text-blue-500 text-xs">
            (
            {product?.connects?.filter((item) => item.feedbackId !== null)
              .length || 0}{" "}
            phản hồi)
          </span>
        </div>
        <div
          className={`flex gap-2 justify-start items-center ${
            isHovered ? "visible" : "invisible"
          }`}
        >
          {page === PRODUCT_TYPE.PRODUCT && (
            <h5 className="text-xs text-gray-400">
              Mã {productTypeToString(page)}: {product?.sku || ""} |
            </h5>
          )}
          <a href="#" target="_blank">
            <AiFillEye
              size={18}
              color="blue"
              className="cursor-pointer"
            ></AiFillEye>
          </a>
        </div>
      </td>
      <td>
        <div className="flex gap-1">
          {product?.connects?.filter((item) => item.categoryId !== null)
            .length > 3 ? (
            <>
              {product?.connects
                ?.filter((item) => item.categoryId !== null)
                .slice(0, 3)
                .map((item) => (
                  <BasicTag label={item?.category?.title || ""} />
                ))}
              <BasicTag
                label={`+${
                  product?.connects?.filter((item) => item.categoryId !== null)
                    .length - 3
                }`}
              />
            </>
          ) : (
            product?.connects
              ?.filter((item) => item.categoryId !== null)
              ?.map((item) => <BasicTag label={item?.category?.title || ""} />)
          )}
        </div>
      </td>
      <td></td>
      <td>
        {/*Origin price*/}
        <BasicEditablePopup
          submitStatus={updateUpdateOriginPriceStatus}
          handleSubmitEditPrice={handleUpdateOriginPrice}
          initValue={product?.originPrice || 0}
        ></BasicEditablePopup>
      </td>
      <td>
        {/*Discount price*/}
        <BasicEditablePopup
          submitStatus={updateUpdateDiscountPriceStatus}
          handleSubmitEditPrice={handleUpdateDiscountPrice}
          initValue={product?.discountPrice || 0}
        ></BasicEditablePopup>
      </td>
      {/* <td>
        <div className="flex gap-1">
          <BasicTag label={"Yêu thích"} onClick={handleAddFavTag} />
          <BasicTag label={"Bán chạy"} onClick={handleAddHotSellTag} />
          <BasicTag label={"Nổi bật"} onClick={handleAddOutStandingTag} />
        </div>
      </td> */}
      <td>
        <BasicEditablePopup initValue={0}></BasicEditablePopup>
      </td>
      <td>
        <div className="flex gap-1">
          {/* <Tooltip title="Ẩn sản phẩm" arrow placement="top">
            <div>
              <BasicIconButton className="!bg-green-400">
                <AiOutlineEye color="white"></AiOutlineEye>
              </BasicIconButton>
            </div>
          </Tooltip> */}
          <Tooltip title="Cập nhật" arrow placement="top">
            <div>
              <BasicIconButton
                className="!bg-blue-500"
                handleOnClick={() => {
                  navigate(navigateToEditBaseOnProductType(page, product.id));
                }}
              >
                <MdEdit color="white"></MdEdit>
              </BasicIconButton>
            </div>
          </Tooltip>
          <Tooltip title="Xoá" arrow placement="top">
            <div>
              <BasicIconButton
                className="!bg-red-500"
                handleOnClick={() => handleDeleteProduct(product)}
              >
                <FaTrash color="white"></FaTrash>
              </BasicIconButton>
            </div>
          </Tooltip>
        </div>
      </td>
    </tr>
  );
};
