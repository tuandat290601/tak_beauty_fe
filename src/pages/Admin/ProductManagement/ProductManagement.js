import React, { useEffect, useState } from "react";
import "./ProductManagement.scss";
import HeaderMainPage from "../Header/HeaderMainPage";
import BasicButton from "../../../components/Button/BasicButton";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import Table from "../../../components/Table/Table";
import BasicIconButton from "../../../components/Button/BasicIconButton";
import BasicPagination from "../../../components/Pagination/BasicPagination";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { TableDropdown } from "../../../components/Dropdown/TableDropdown";
import { useNavigate } from "react-router-dom";
import productApi from "../../../api/productApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useCategories from "../../../hooks/Categories/useCategories";
import useMenu from "../../../hooks/useMenu";
import { TableItem, TableItemSkeleton } from "./TableItem";
import ConfirmPopup from "../../../components/Popup/ConfirmPopup";
import usePopup from "../../../hooks/usePopup";
import { toast } from "react-toastify";
import { reactQueryKey } from "../../../configuration/reactQueryKey";
import { PRODUCT_TYPE } from "../../../common/constant";

const page = window.location.href.includes("product")
  ? PRODUCT_TYPE.PRODUCT
  : PRODUCT_TYPE.COURSE;
const ITEMS_PER_PAGE = 10;
const pageSizeOption = [
  { size: 10 },
  { size: 20 },
  { size: 40 },
  { size: 50 },
  { size: 100 },
];
const ACTION = {
  DELETE: 1,
};
const actions = [
  {
    value: ACTION.DELETE,
    icon: <FaTrash></FaTrash>,
    title: `Xóa ${
      page === PRODUCT_TYPE.PRODUCT_TYPE ? "sản phẩm" : "khóa học"
    }`,
  },
];
export const ProductManagement = () => {
  const [page, setPage] = useState(PRODUCT_TYPE.PRODUCT);

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    anchorEl: anchorElActions,
    handleCloseMenu: handleClosePopupActionsMenu,
    handleOpenMenu: onShowActions,
  } = useMenu();
  const { open: openConfirm, handleOpenPopup, handleClosePopup } = usePopup();
  const {
    open: openConfirmDeleteListProudct,
    handleOpenPopup: handleOpenDeleteListProudctPopup,
    handleClosePopup: handleCloseDeleteListProudctPopup,
  } = usePopup();
  const [searchKey, setSearchKey] = useState("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("");
  const [pageCount, setPageCount] = useState(5);
  const [pageSize, setPageSize] = useState(pageSizeOption[0].size);
  const [currentPage, setCurrentPage] = useState(1);
  const [listProduct, setListProduct] = useState([]);
  const [listCategories, setListCategories] = useState([]);
  const [currentSelectedProduct, setCurrentSelectedProduct] = useState();
  const [productQueries, setProductQueries] = useState({
    currentPage: 1,
    pageSize: pageSize,
    filters: `type==${page}`,
    sortField: null,
    sortOrder: null,
  });

  useEffect(() => {
    const page = window.location.href.includes("product")
      ? PRODUCT_TYPE.PRODUCT
      : PRODUCT_TYPE.COURSE;
    setProductQueries({
      ...productQueries,
      filters: `type==${page}`,
    });
    setPage(page);
  }, [window.location.href]);

  const onMenuActionSelect = (action) => {
    switch (action) {
      case ACTION.DELETE:
        handleOpenDeleteListProudctPopup();
        break;
      default:
        break;
    }
  };
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
    setProductQueries({
      ...productQueries,
      currentPage: event.selected + 1,
    });
  };
  const handleSetPageSize = (item) => {
    setPageSize(item.size);
    setProductQueries({
      ...productQueries,
      pageSize: item.size,
    });
  };
  const handleSearchWithFilter = () => {
    console.log(searchKey + ", " + selectedCategoryFilter);
    setProductQueries({
      ...productQueries,
      filters: `title@=${searchKey},type==${page}`,
      categoryListIds: `${selectedCategoryFilter}`,
    });
  };
  const handleOnChangeSearchKey = (e) => {
    setSearchKey(e.target.value);
  };
  const handleCheckAll = (event) => {
    console.log("handleCheckAll");
    if (listProduct.every((item) => item.checked === true)) {
      const newListProduct = listProduct.map((item) => {
        return { ...item, checked: false };
      });
      setListProduct(newListProduct);
    } else if (
      listProduct.some((item) => item.checked === true) &&
      !listProduct.every((item) => item.checked === true)
    ) {
      const newListProduct = listProduct.map((item) => {
        return { ...item, checked: false };
      });
      setListProduct(newListProduct);
      // setChecked(Array(listProduct.length).fill(false));
    } else {
      const newListProduct = listProduct.map((item) => {
        return { ...item, checked: true };
      });
      setListProduct(newListProduct);
      // setChecked(Array(listProduct.length).fill(true));
    }
  };
  const handleCheckItem = (event, index) => {
    const newListProduct = listProduct;
    newListProduct[index].checked = event.target.checked;
    setListProduct([...newListProduct]);
  };
  const handleDeleteProduct = (product) => {
    setCurrentSelectedProduct(product);
    handleOpenPopup();
  };
  const handleConfirmDeleteProduct = async () => {
    const res = await productApi.deleteProduct(currentSelectedProduct.id);
    if (res.status === "success") {
      toast.success(
        `Xoá ${
          page === PRODUCT_TYPE.PRODUCT ? "sản phẩm" : "khóa học"
        } thành công`
      );
      queryClient.invalidateQueries(reactQueryKey.GET_PRODUCTS);
    } else {
      toast.error("Đã có lỗi xảy ra! Xoá sản phẩm thất bại");
    }
  };
  const handleConfirmDeleteListCheckedProduct = async () => {
    const listChecked = listProduct.filter(
      (item, index) => item.checked === true
    );
    const listId = listChecked.map((item) => item.id);
    console.log(listId);
    const queryListId = listId.join("|");
    const res = await productApi.deleteProduct(queryListId);
    // console.log(queryListId);
    if (res.status === "success") {
      toast.success(
        `Xoá ${
          page === PRODUCT_TYPE.PRODUCT ? "sản phẩm" : "khóa học"
        } thành công`
      );
      queryClient.invalidateQueries(reactQueryKey.GET_PRODUCTS);
    } else {
      toast.error(
        `Đã có lỗi xảy ra! Xoá ${
          page === PRODUCT_TYPE.PRODUCT ? "sản phẩm" : "khóa học"
        } thất bại`
      );
    }
  };
  const handleSelectCategoryFilter = (e) => {
    setSelectedCategoryFilter(e.target.value);
  };
  // const handleSelectCriteriaFilter = (e) => {
  //   setSelectedCriteriaFilter(e.target.value);
  // };
  const { data, isLoading, error, isError, isSuccess } = useQuery({
    queryKey: ["getProducts", productQueries],
    queryFn: async ({ signal }) => {
      return await productApi.getProducts({ payload: productQueries, signal });
    },
  });
  const {
    categoryList,
    tempFilterCategory,
    createCategoryListDropdown,
    isLoading: categoriesIsLoading,
    isSuccess: categoriesIsSuccess,
  } = useCategories({});
  useEffect(() => {
    const fetchData = async () => {
      // const res = await categoryApi.getCategories();
      if (categoriesIsSuccess) {
        const categoryListDropdown = createCategoryListDropdown();
        const resCategories = [...categoryListDropdown];
        // console.log(resCategories);
        // if (
        //   !resCategories?.some(
        //     (item) => item.title === "Tất cả" && item.id === ""
        //   )
        // ) {
        //   resCategories?.unshift({
        //     id: "",
        //     title: "Tất cả",
        //   });
        // }
        setListCategories(resCategories);
      }
      if (isSuccess) {
        setPageCount(data.responseData.totalPages);
        setCurrentPage(data.responseData.currentPage);
        const listProduct = data.responseData.rows.map((item) => {
          return { ...item, checked: false };
        });
        setListProduct(listProduct);
        // setChecked(Array(data.responseData.rows.length).fill(false));
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
              if (page === PRODUCT_TYPE.PRODUCT)
                navigate("/admin/product/product-management/add");
              else navigate("/admin/course/course-management/add");
            }}
          />
        </div>
      </HeaderMainPage>
      <div className="ui-layout">
        <div className="py-[25px]">
          <h1 className="text-[28px] text-blue-950 font-semibold">
            Danh sách {page === PRODUCT_TYPE.PRODUCT ? "sản phẩm" : "khóa học"}
          </h1>
        </div>
        <div>
          <Table>
            <thead>
              <tr className=" sticky z-10">
                <th colSpan={9} className="!bg-white">
                  <div className="flex justify-between w-full">
                    <div className="flex gap-3">
                      {listProduct?.length > 0 &&
                        listProduct?.some((item) => item.checked === true) && (
                          <BasicButton
                            onClick={(e) => onShowActions(e)}
                            className="!bg-green-400 border-none text-white h-fit"
                            title="Thao tác"
                          ></BasicButton>
                        )}
                      <Menu
                        anchorEl={anchorElActions}
                        id="account-menu"
                        open={Boolean(anchorElActions)}
                        onClose={handleClosePopupActionsMenu}
                        keepMounted
                        onClick={handleClosePopupActionsMenu}
                      >
                        {actions.map((item, index) => (
                          <div key={item?.value}>
                            <MenuItem
                              onClick={() => {
                                handleClosePopupActionsMenu();
                                onMenuActionSelect(item?.value);
                              }}
                            >
                              <ListItemIcon>{item?.icon}</ListItemIcon>
                              {item?.title}
                            </MenuItem>
                            {index !== actions.length - 1 && (
                              <Divider></Divider>
                            )}
                          </div>
                        ))}
                      </Menu>
                    </div>
                    <div className="flex gap-1">
                      <input
                        onChange={(e) => handleOnChangeSearchKey(e)}
                        className="border border-gray-500 p-2 rounded-sm"
                        value={searchKey}
                        placeholder="Từ khóa..."
                      ></input>
                      <TableDropdown
                        value={selectedCategoryFilter.title}
                        onChange={handleSelectCategoryFilter}
                        dropdownItems={listCategories}
                      ></TableDropdown>

                      <BasicIconButton
                        handleOnClick={() => {
                          handleSearchWithFilter();
                        }}
                      >
                        <BsSearch size={14}></BsSearch>
                      </BasicIconButton>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                Array(pageSize)
                  .fill(0)
                  .map((item, index) => (
                    <TableItemSkeleton key={index}></TableItemSkeleton>
                  ))
              ) : listProduct.length === 0 ? (
                <div className="flex flex-col items-center justify-center my-10 gap-y-10">
                  <img
                    src="/images/empty/empty-box.png"
                    alt="Empty img"
                    className="w-40"
                  />
                  <h4 className="font-medium text-2xl">
                    Không tìm thấy kết quả nào
                  </h4>
                </div>
              ) : (
                <>
                  <tr className="sticky z-9 shadow-md">
                    <th>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              (listProduct?.length > 0 &&
                                listProduct?.every(
                                  (item) => item.checked === true
                                )) ||
                              false
                            }
                            indeterminate={
                              listProduct.some(
                                (item) => item.checked === true
                              ) &&
                              !listProduct.every(
                                (item) => item.checked === true
                              )
                            }
                            onChange={handleCheckAll}
                          />
                        }
                      />
                    </th>
                    <th>Hình</th>
                    <th>Tiêu đề</th>
                    <th>Danh mục</th>
                    <th>Phân loại</th>
                    <th>Giá gốc</th>
                    <th>Giá khuyến mãi</th>
                    {/* <th>Nhóm</th> */}
                    <th>Thứ tự</th>
                    <th>Hành động</th>
                  </tr>
                  {listProduct.map((item, index) => (
                    <TableItem
                      key={item.id}
                      product={item}
                      checked={item.checked || false}
                      handleCheck={handleCheckItem}
                      index={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : ""
                      } hover:bg-gray-200`}
                      handleDeleteProduct={handleDeleteProduct}
                    ></TableItem>
                  ))}
                </>
              )}
            </tbody>
          </Table>
          <div className="mt-2 flex gap-2 justify-end items-center">
            <span className="text-sm">Số lượng sản phẩm/ trang</span>
            <div className="flex gap-1">
              {pageSizeOption.map((item) => (
                <BasicIconButton
                  key={item.size}
                  className={`${
                    pageSize === item.size ? "!bg-blue-500 text-white" : ""
                  } `}
                  onClick={() => handleSetPageSize(item)}
                >
                  {item.size}
                </BasicIconButton>
              ))}
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
      <ConfirmPopup
        isOpen={openConfirm}
        handleClose={() => {
          handleClosePopup();
        }}
        handleConfirm={handleConfirmDeleteProduct}
        positionTop={true}
      >
        Bạn có chắc chắn muốn xoá{" "}
        {page === PRODUCT_TYPE.PRODUCT ? "sản phẩm" : "khóa học"}{" "}
        <span className="text-blue-500 font-bold">
          {currentSelectedProduct?.title}
        </span>
      </ConfirmPopup>
      <ConfirmPopup
        isOpen={openConfirmDeleteListProudct}
        handleClose={() => {
          handleCloseDeleteListProudctPopup();
        }}
        handleConfirm={handleConfirmDeleteListCheckedProduct}
        positionTop={true}
      >
        Bạn có chắc chắn muốn xoá{" "}
        {listProduct.filter((item) => item.checked === true).length}{" "}
        {page === PRODUCT_TYPE.PRODUCT ? "sản phẩm" : "khóa học"}
      </ConfirmPopup>
    </div>
  );
};
