import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import { productApi, categoryApi } from "../../api";
import { categoryProductList } from "../../helpers/data";
import { ProductItem } from "../../components";
import "./Product.sass";
import configuration from "../../configuration"

const Product = () => {
  const [categoryId, setCategoryId] = useState("49a30440-cc1a-4c0b-bda9-fd609d397f3d") // This is mock, change it
  const [productQueries, setProductQueries] = useState({
    currentPage: 1,
    pageSize: 10,
    filters: "categoryId==49a30440-cc1a-4c0b-bda9-fd609d397f3d",
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
        image: configuration.apiConfig.imageEndPoint + item.image,
        comments: 4, 
        buys: 4 
      })))
  }, [data, isSuccess])
  return (
    <div className="product-page">
      <div className="container">
        <div className="row">
          <div className="col-4">
            Filter
          </div>
          <div className="col-8">
            <div className="row">
              {listProduct?.map((item, index) => <div className="col-4 p-3" key={index}>
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
