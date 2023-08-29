import React, { useEffect, useRef, useState } from "react";
import "./ProductManagement.scss";
import HeaderMainPage from "../Header/HeaderMainPage";
import BasicButton from "../../../components/Button/BasicButton";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { AiFillEye, AiOutlineEye } from "react-icons/ai";
import Table from "../../../components/Table/Table";
import BasicIconButton from "../../../components/Button/BasicIconButton";
import Tooltip from "@mui/material/Tooltip";
import Rating from "@mui/material/Rating";
import useHover from "../../../hooks/useHover";
import { BasicTag } from "../../../components/Tag/BasicTag";
import BasicPagination from "../../../components/Pagination/BasicPagination";
import { Checkbox, FormControlLabel } from "@mui/material";
import { BasicEditablePopup } from "../../../components/Popup/BasicEditPopup";
import { TableDropdown } from "../../../components/Dropdown/TableDropdown";
import { useNavigate } from "react-router-dom";
import productApi from "../../../api/productApi";
import { useQuery } from "@tanstack/react-query";
import Config from "../../../configuration";
const ITEMS_PER_PAGE = 10;
export const ProductManagement = () => {
  const listCategory = [
    { value: "1", label: "Bóng đá" },
    { value: "2", label: "Giày thể thao" },
    { value: "3", label: "Áo quần" },
  ];
  const listCriteria = [
    { value: "1", label: "Yêu thích" },
    { value: "2", label: "Bán chạy" },
    { value: "3", label: "Nổi bật" },
  ];
  const listItem = [
    {
      id: 1,
      name: "Sản phẩm test",
      rating: 4.5,
      ratingCount: 5,
      category: "Thể thao",
      price: 12000,
    },
    {
      id: 2,
      name: "Sản phẩm test",
      rating: 4.5,
      ratingCount: 5,
      category: "Thể thao",
      price: 12000,
    },
    {
      id: 3,
      name: "Sản phẩm test",
      rating: 4.5,
      ratingCount: 5,
      category: "Thể thao",
      price: 12000,
    },
    {
      id: 4,
      name: "Sản phẩm test",
      rating: 4.5,
      ratingCount: 5,
      category: "Thể thao",
      price: 12000,
    },
    {
      id: 4,
      name: "Sản phẩm test",
      rating: 4.5,
      ratingCount: 5,
      category: "Thể thao",
      price: 12000,
    },
    {
      id: 4,
      name: "Sản phẩm test",
      rating: 4.5,
      ratingCount: 5,
      category: "Thể thao",
      price: 12000,
    },
    {
      id: 4,
      name: "Sản phẩm test",
      rating: 4.5,
      ratingCount: 5,
      category: "Thể thao",
      price: 12000,
    },
    {
      id: 4,
      name: "Sản phẩm test",
      rating: 4.5,
      ratingCount: 5,
      category: "Thể thao",
      price: 12000,
    },
    {
      id: 4,
      name: "Sản phẩm test",
      rating: 4.5,
      ratingCount: 5,
      category: "Thể thao",
      price: 12000,
    },
    {
      id: 4,
      name: "Sản phẩm test",
      rating: 4.5,
      ratingCount: 5,
      category: "Thể thao",
      price: 12000,
    },
  ];
  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("1");
  const [selectedCriteriaFilter, setSelectedCriteriaFilter] = useState("2");
  const [pageCount, setPageCount] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [listProduct, setListProduct] = useState([]);
  const [checked, setChecked] = React.useState(
    Array(listProduct.length).fill(false)
  );
  const handlePageClick = (event) => {};
  const handleOnChangeSearchKey = (e) => {
    setSearchKey(e.target.value);
  };
  const handleCheckAll = (event) => {
    if (checked.every((item) => item === true)) {
      setChecked(Array(listProduct.length).fill(false));
    } else if (
      checked.some((item) => item === true) &&
      !checked.every((item) => item === true)
    ) {
      setChecked(Array(listProduct.length).fill(false));
    } else {
      setChecked(Array(listProduct.length).fill(true));
    }
  };
  const handleCheckItem = (event, index) => {
    const newChecked = checked;
    newChecked[index] = event.target.checked;
    console.log(newChecked);
    setChecked([...newChecked]);
  };
  const handleSelectCategoryFilter = (e) => {
    setSelectedCategoryFilter(e.target.value);
  };
  const handleSelectCriteriaFilter = (e) => {
    setSelectedCriteriaFilter(e.target.value);
  };
  const [productQueries, setProductQueries] = useState({
    currentPage: 1,
    pageSize: 10,
    filters: "categoryId==49a30440-cc1a-4c0b-bda9-fd609d397f3d",
    sortField: null,
    sortOrder: null,
  });
  const { data, isLoading, error, isError, isSuccess } = useQuery({
    queryKey: ["getProducts"],
    queryFn: async ({ signal }) => {
      return await productApi.getProducts({ payload: productQueries, signal });
    },
  });
  useEffect(() => {
    const fetchData = async () => {
      // const res = await productApi.getProducts({});
      if (isSuccess) {
        setPageCount(data.responseData.totalPages);
        setCurrentPage(data.responseData.currentPage);
        setListProduct(data.responseData.rows);
        console.log(data.responseData);
      }
    };
    fetchData();
  }, [data, isSuccess]);
  return (
    <div className="page-body">
      <HeaderMainPage>
        <div className="flex justify-end ui-layout gap-x-2">
          <BasicButton
            icon={<AiOutlinePlusCircle></AiOutlinePlusCircle>}
            title="Thêm mới"
            className="green-btn"
            onClick={() => {
              navigate("/admin/product/product-management/add");
            }}
          />
        </div>
      </HeaderMainPage>
      <div className="ui-layout">
        <div className="py-[25px]">
          <h1 className="text-[28px] text-blue-950 font-semibold">
            Danh sách sản phẩm
          </h1>
        </div>
        <div>
          <Table>
            <thead>
              <tr>
                <td colSpan={9} className="">
                  <div className="flex justify-between w-full">
                    <div className="flex gap-3">
                      <div className="relative">
                        <div className="py-[2px] absolute flex justify-center text-sm -top-2 -right-2 text-center w-[25px] h-[25px] rounded-full bg-gray-200 font-bold">
                          10
                        </div>
                        <BasicIconButton className="!bg-blue-500 border-none">
                          <MdEdit color="white" size={20}></MdEdit>
                        </BasicIconButton>
                      </div>
                      <div className="relative">
                        <div className="py-[2px] absolute flex justify-center text-sm -top-2 -right-2 text-center w-[25px] h-[25px] rounded-full bg-gray-200 font-bold">
                          10
                        </div>
                        <BasicIconButton>
                          <FaTrash size={20}></FaTrash>
                        </BasicIconButton>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <input
                        onChange={(e) => handleOnChangeSearchKey(e)}
                        className="border border-gray-500 p-2 rounded-sm"
                        value={searchKey}
                        placeholder="Từ khóa..."
                      ></input>
                      <TableDropdown
                        value={selectedCategoryFilter}
                        onChange={(e) => handleSelectCategoryFilter(e)}
                        dropdownItems={listCategory}
                      ></TableDropdown>
                      <TableDropdown
                        value={selectedCriteriaFilter}
                        onChange={(e) => handleSelectCriteriaFilter(e)}
                        dropdownItems={listCriteria}
                      ></TableDropdown>
                      <BasicIconButton
                        handleOnClick={() => {
                          console.log(
                            searchKey + ", " + selectedCategoryFilter
                          );
                        }}
                      >
                        <BsSearch size={14}></BsSearch>
                      </BasicIconButton>
                    </div>
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="shadow-md">
                <th>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.every((item) => item === true)}
                        indeterminate={
                          checked.some((item) => item === true) &&
                          !checked.every((item) => item === true)
                        }
                        onChange={handleCheckAll}
                      />
                    }
                  />
                </th>
                <th>Hình</th>
                <th>Tiêu đề</th>
                <th>Chuyên mục</th>
                <th>Phân loại</th>
                <th>Giá</th>
                <th>Nhóm</th>
                <th>Thứ tự</th>
                <th>Hành động</th>
              </tr>
              {listProduct.map((item, index) => (
                <TableItem
                  key={item.id}
                  product={item}
                  checked={checked[index]}
                  handleCheck={handleCheckItem}
                  index={index}
                  className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}
                ></TableItem>
              ))}
              {/* <TableItem></TableItem> */}
            </tbody>
          </Table>
          <div className="mt-2 flex gap-2 justify-end items-center">
            <span className="text-sm">Số lượng sản phẩm/ trang</span>
            <div className="flex gap-1">
              <BasicIconButton>10</BasicIconButton>
              <BasicIconButton>20</BasicIconButton>
              <BasicIconButton>40</BasicIconButton>
              <BasicIconButton>50</BasicIconButton>
              <BasicIconButton>100</BasicIconButton>
            </div>
            {pageCount > 1 && (
              <BasicPagination
                itemsPerPage={ITEMS_PER_PAGE}
                pageCount={pageCount}
                handlePageClick={handlePageClick}
                currentPage={currentPage}
              ></BasicPagination>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TableItem = ({ product, index, className, checked, handleCheck }) => {
  const [hoverRef, isHovered] = useHover();
  const handleAddFavTag = () => {};
  const handleAddHotSellTag = () => {};
  const handleAddOutStandingTag = () => {};
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
      <td className="!py-[10px]">
        <img
          src={Config.apiConfig.imageEndPoint + product?.image}
          alt="thumb"
          className="w-[50px] rounded-md"
        />
      </td>
      <td className="!py-[10px]">
        <div className="w-fit">
          <Tooltip title="Sản phẩm test" arrow placement="top" color="error">
            <h4 className="font-semibold text-sm">{product?.title}</h4>
          </Tooltip>
        </div>
        <div className="mt-2 flex justify-start items-center gap-1">
          <a href="#" target="_blank">
            <Rating value={5} size="small" readOnly></Rating>
          </a>
          <span className="text-blue-500 text-xs">
            ({product.rating} đánh giá)
          </span>
        </div>
        <div
          className={`flex gap-2 justify-start items-center ${
            isHovered ? "visible" : "invisible"
          }`}
        >
          <h5 className="text-xs text-gray-300">ID: 6 |</h5>
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
        <h4 className="text-blue-500 text-sm cursor-pointer">
          {product.category.title}
        </h4>
      </td>
      <td></td>
      <td>
        <div className="flex gap-2">
          {/*Origin price*/}
          <BasicEditablePopup
            initValue={product.originPrice}
          ></BasicEditablePopup>
          {/*Discount price*/}
          <BasicEditablePopup
            initValue={product.discountPrice}
          ></BasicEditablePopup>
        </div>
      </td>
      <td>
        <div className="flex gap-1">
          <BasicTag label={"Yêu thích"} onClick={handleAddFavTag} />
          <BasicTag label={"Bán chạy"} onClick={handleAddHotSellTag} />
          <BasicTag label={"Nổi bật"} onClick={handleAddOutStandingTag} />
        </div>
      </td>
      <td>
        <BasicEditablePopup initValue={0}></BasicEditablePopup>
      </td>
      <td>
        <div className="flex gap-1">
          <Tooltip title="Ẩn sản phẩm" arrow placement="top">
            <div>
              <BasicIconButton className="!bg-green-400">
                <AiOutlineEye color="white"></AiOutlineEye>
              </BasicIconButton>
            </div>
          </Tooltip>
          <Tooltip title="Cập nhật" arrow placement="top">
            <div>
              <BasicIconButton className="!bg-blue-500">
                <MdEdit color="white"></MdEdit>
              </BasicIconButton>
            </div>
          </Tooltip>
          <Tooltip title="Xoá" arrow placement="top">
            <div>
              <BasicIconButton className="!bg-red-500">
                <FaTrash color="white"></FaTrash>
              </BasicIconButton>
            </div>
          </Tooltip>
        </div>
      </td>
    </tr>
  );
};
