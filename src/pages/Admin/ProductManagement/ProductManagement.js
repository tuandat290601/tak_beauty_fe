import React, { useState } from "react";
import "./ProductManagement.scss";
import HeaderMainPage from "../Header/HeaderMainPage";
import BasicButton from "../../../components/Button/BasicButton";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { AiFillEye, AiOutlineEye } from "react-icons/ai";
import Table from "../../../components/Table/Table";
import IconButton from "../../../components/Button/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Rating from "@mui/material/Rating";
import useHover from "../../../hooks/useHover";
import { BasicTag } from "../../../components/Tag/BasicTag";
import BasicPagination from "../../../components/Pagination/BasicPagination";
import { Checkbox, FormControlLabel } from "@mui/material";
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
  ];
  const [searchKey, setSearchKey] = useState("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("1");
  const [selectedCriteriaFilter, setSelectedCriteriaFilter] = useState("2");
  const [pageCount, setPageCount] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [checked, setChecked] = React.useState(
    Array(listItem.length).fill(false)
  );
  const handlePageClick = (event) => {};
  const handleOnChangeSearchKey = (e) => {
    setSearchKey(e.target.value);
  };
  const handleCheckAll = (event) => {
    if (checked.every((item) => item === true)) {
      setChecked(Array(listItem.length).fill(false));
    } else if (
      checked.some((item) => item === true) &&
      !checked.every((item) => item === true)
    ) {
      setChecked(Array(listItem.length).fill(false));
    } else {
      setChecked(Array(listItem.length).fill(true));
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
  return (
    <div className="page-body">
      <HeaderMainPage>
        <div className="flex justify-end">
          <BasicButton
            icon={<AiOutlinePlusCircle></AiOutlinePlusCircle>}
            title="Thêm mới"
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
                        <IconButton className="!bg-blue-500 border-none">
                          <MdEdit color="white" size={20}></MdEdit>
                        </IconButton>
                      </div>
                      <div className="relative">
                        <div className="py-[2px] absolute flex justify-center text-sm -top-2 -right-2 text-center w-[25px] h-[25px] rounded-full bg-gray-200 font-bold">
                          10
                        </div>
                        <IconButton>
                          <FaTrash size={20}></FaTrash>
                        </IconButton>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <input
                        onChange={(e) => handleOnChangeSearchKey(e)}
                        className="border border-gray-500 p-2 rounded-sm"
                        value={searchKey}
                        placeholder="Từ khóa..."
                      ></input>
                      <BasicDropdown
                        value={selectedCategoryFilter}
                        onChange={(e) => handleSelectCategoryFilter(e)}
                        dropdownItems={listCategory}
                      ></BasicDropdown>
                      <BasicDropdown
                        value={selectedCriteriaFilter}
                        onChange={(e) => handleSelectCriteriaFilter(e)}
                        dropdownItems={listCriteria}
                      ></BasicDropdown>
                      <IconButton
                        handleOnClick={() => {
                          console.log(
                            searchKey + ", " + selectedCategoryFilter
                          );
                        }}
                      >
                        <BsSearch size={14}></BsSearch>
                      </IconButton>
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
              {listItem.map((item, index) => (
                <TableItem
                  // key={}
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
              <IconButton>10</IconButton>
              <IconButton>20</IconButton>
              <IconButton>40</IconButton>
              <IconButton>50</IconButton>
              <IconButton>100</IconButton>
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

const TableItem = ({ index, className, checked, handleCheck }) => {
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
          src="https://i.pinimg.com/564x/19/84/8e/19848eec0724e8c34ffd44eea72a1f24.jpg"
          alt="thumb"
          className="w-[50px] rounded-md"
        />
      </td>
      <td className="!py-[10px]">
        <div className="w-fit">
          <Tooltip title="Sản phẩm test" arrow placement="top" color="error">
            <h4 className="font-semibold text-sm">Sản phẩm test</h4>
          </Tooltip>
        </div>
        <div className="mt-2 flex justify-start items-center gap-1">
          <a href="#" target="_blank">
            <Rating value={5} size="small" readOnly></Rating>
          </a>
          <span className="text-blue-500 text-xs">(0 đánh giá)</span>
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
        <h4 className="text-blue-500 text-sm cursor-pointer">Thể thao</h4>
      </td>
      <td></td>
      <td>
        <div className="flex gap-2">
          {/*Origin price*/}
          <h4 className="editable-text text-center">12.000</h4>
          {/*Discount price*/}
          <h4 className="editable-text text-center">12.000</h4>
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
        <h4 className="editable-text text-center">0</h4>
      </td>
      <td>
        <div className="flex gap-1">
          <Tooltip title="Ẩn sản phẩm" arrow placement="top">
            <div>
              <IconButton className="!bg-green-400">
                <AiOutlineEye color="white"></AiOutlineEye>
              </IconButton>
            </div>
          </Tooltip>
          <Tooltip title="Cập nhật" arrow placement="top">
            <div>
              <IconButton className="!bg-blue-500">
                <MdEdit color="white"></MdEdit>
              </IconButton>
            </div>
          </Tooltip>
          <Tooltip title="Xoá" arrow placement="top">
            <div>
              <IconButton className="!bg-red-500">
                <FaTrash color="white"></FaTrash>
              </IconButton>
            </div>
          </Tooltip>
        </div>
      </td>
    </tr>
  );
};

const BasicDropdown = ({
  value,
  onChange,
  dropdownItems,
  className = "",
  props,
}) => {
  return (
    <select
      className={`basic-select border border-gray-500 p-2 rounded-sm !max-w-[200px] text-ellipsis ${className}`}
      value={value}
      onChange={onChange}
      {...props}
    >
      {dropdownItems.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};
