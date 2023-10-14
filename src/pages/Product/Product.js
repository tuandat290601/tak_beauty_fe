import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { productApi } from "../../api";
import { ProductItem } from "../../components";
import "./Product.sass";
import configuration from "../../configuration";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ReactPaginate from "react-paginate";
import Filter from "./Filter/Filter";

const Product = () => {
  const [productQueries, setProductQueries] = useState({
    currentPage: 1,
    pageSize: 9,
    filters: "type==PRODUCT",
    sortField: "discountPrice",
    sortOrder: "asc",
    categoryListIds: [],
    region: "",
  });
  const [listProduct, setListProduct] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState("discountPrice-asc");
  const [payload, setPayload] = useState({
    currentPage: 1,
    pageSize: 10,
    filters: "type==PRODUCT",

  });

  const { data, isLoading, error, isError, isSuccess } = useQuery({
    queryKey: ["getProducts", productQueries],
    queryFn: async ({ signal }) => {
      return await productApi.getProducts({ payload: productQueries, signal });
    },
  });

  console.log(payload)

  useEffect(() => {
    // api call
    if (isSuccess)
      setListProduct(
        data.responseData.rows.map((item) => ({
          ...item,
          image:
            item?.image && item?.image?.length !== 0
              ? item?.image?.map(
                (img) => configuration.apiConfig.imageEndPoint + img
              )
              : [],
          category: item.connects.filter((cate) => cate.categoryId !== null),
        }))
      );
    setTotalPages(data?.responseData?.totalPages);
  }, [data, isSuccess]);

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    const queries = sort.split("-");
    setProductQueries((old) => ({
      ...old,
      sortField: queries[0],
      sortOrder: queries[1],
    }));
  }, [sort]);

  const handlePageClick = (selectedPage) => {
    setPage(selectedPage.selected);
  };

  useEffect(() => {
    setProductQueries((old) => ({ ...old, currentPage: page + 1 }));
  }, [page]);

  return (
    <div className="product-page">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filter productQueries={productQueries} setProductQueries={setProductQueries} />
          </div>
          <div className="col-9">
            <div className="row pe-1">
              <div className="d-flex justify-content-end">
                <div className="d-flex">
                  <InputLabel
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                    }}
                    htmlFor="sort"
                  >
                    Sắp xếp theo
                  </InputLabel>
                  <FormControl sx={{ marginLeft: "1rem", minWidth: 151 }}>
                    <Select
                      autoWidth={true}
                      id="sort"
                      sx={{ background: "white" }}
                      value={sort}
                      onChange={(e) => handleSort(e)}
                    >
                      <MenuItem value={"discountPrice-asc"}>
                        Giá: Tăng dần
                      </MenuItem>
                      <MenuItem value={"discountPrice-desc"}>
                        Giá: Giảm dần
                      </MenuItem>
                      <MenuItem value={"title-asc"}>Tên: A-Z</MenuItem>
                      <MenuItem value={"title-desc"}>Tên: Z-A</MenuItem>
                      <MenuItem value={"createdAt-asc"}>Cũ nhất</MenuItem>
                      <MenuItem value={"createdAt-desc"}>Mới nhất</MenuItem>
                      <MenuItem value={"sold-desc"}>Bán chạy nhất</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className="row">
              {listProduct?.map((item) => (
                <div className="col-4 p-3" key={item.id}>
                  <ProductItem {...item} />
                </div>
              ))}
            </div>
            <div className="row">
              <div className="d-flex justify-content-center">
                {totalPages > 1 && (
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={totalPages}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    forcePage={page}
                    className="pagination"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
