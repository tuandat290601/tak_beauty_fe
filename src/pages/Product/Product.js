import React, { useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import { productApi, categoryApi } from "../../api";
import { ProductItem } from "../../components";
import "./Product.sass";
import configuration from "../../configuration"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { productList } from "../../features/productSlice";

const Product = () => {
  const [categoryId, setCategoryId] = useState("49a30440-cc1a-4c0b-bda9-fd609d397f3d") // This is mock, change it
  const [productQueries, setProductQueries] = useState({
    currentPage: 1,
    pageSize: 10,
    filters: "type==PRODUCT",
    sortField: null,
    sortOrder: null
  })
  const [listProduct, setListProduct] = useState([])
  // const { category, images, name, discount, price, rate, comments, buys } =
  const [sort, setSort] = useState("price-asc");

  const { data, isLoading, error, isError, isSuccess } =
    useQuery({
      queryKey: ["getProducts"],
      queryFn: async ({ signal }) => {
        return await productApi.getProducts({ payload: productQueries, signal })
      }
    })

  useEffect(() => {
    // api call
    if (isSuccess)
      setListProduct(data.responseData.rows.map((item) => ({
        ...item,
        image: item?.image && item?.image?.length !== 0 ? item?.image?.map((img) => configuration.apiConfig.imageEndPoint + img) : [],
        category: item.connects.filter(cate => cate.categoryId !== null)
      })))
  }, [data, isSuccess])

  const handleSort = () => {

  }

  return (
    <div className="product-page">
      <div className="container">
        <div className="row">
          <div className="col-3">
            Filter
          </div>
          <div className="col-9">
            <div className="row pe-1">
              <div className="d-flex justify-content-end">
                <div className="d-flex">
                  <InputLabel sx={{ display: "flex", alignItems: "center", color: "white" }} htmlFor="sort">Sắp xếp theo</InputLabel>
                  <FormControl sx={{ marginLeft: "1rem", minWidth: 151 }} >
                    <Select
                      autoWidth={true}
                      id="sort"
                      sx={{ background: "white" }}
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                    >
                      <MenuItem value={'price-asc'}>Giá: Tăng dần</MenuItem>
                      <MenuItem value={'price-desc'}>Giá: Giảm dần</MenuItem>
                      <MenuItem value={'title-asc'}>Tên: A-Z</MenuItem>
                      <MenuItem value={'title-desc'}>Tên: Z-A</MenuItem>
                      <MenuItem value={'createdAt-asc'}>Cũ nhất</MenuItem>
                      <MenuItem value={'createdAt-desc'}>Mới nhất</MenuItem>
                      <MenuItem value={'sold-desc'}>Bán chạy nhất</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className="row">
              {listProduct?.map((item) => <div className="col-4 p-3" key={item.id}>
                <ProductItem {...item} />
              </div>)}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
