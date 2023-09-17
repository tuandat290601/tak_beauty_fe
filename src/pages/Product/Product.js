import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import { productApi, categoryApi } from "../../api";
import { ProductItem } from "../../components";
import "./Product.sass";
import configuration from "../../configuration"

const Product = () => {
  const [categoryId, setCategoryId] = useState("49a30440-cc1a-4c0b-bda9-fd609d397f3d") // This is mock, change it
  const [productQueries, setProductQueries] = useState({
    currentPage: 1,
    pageSize: 10,
    filters: "categoryListIds=49a30440-cc1a-4c0b-bda9-fd609d397f3d",
    sortField: null,
    sortOrder: null
  })
  const [listProduct, setListProduct] = useState([])
  // const { category, images, name, discount, price, rate, comments, buys } =

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
        image: item?.iamge && item?.image?.length !== 0 ? item?.image?.map((img) => configuration.apiConfig.imageEndPoint + img) : [],
        category: item.connects.filter(cate => cate.categoryId !== null)
      })))
  }, [data, isSuccess])

  console.log(data)
  return (
    <div className="product-page">
      <div className="container">
        <div className="row">
          <div className="col-3">
            Filter
          </div>
          <div className="col-9">
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
