import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { PAGE_PATH } from "../../configuration/routeConfig";
import { getToken } from "../../helpers/util";
import "./Admin.scss";
import Article from "./Article/Article";
import Banners from "./Banners/Banners";
import Cart from "./Cart/Cart";
import CategoryEdit from "./Categories/Edit/CategoryEdit";
import ProductsCategories from "./Categories/ProductsCategories";
import Content from "./Content/Content";
import Feedback from "./Feedback/Feedback";
import Library from "./Library/Library";
import Marketing from "./Marketing/Marketing";
import Member from "./Member/Member";
import Order from "./Order/Order";
import Product from "./Product/Product";
import { ProductManagement } from "./ProductManagement/ProductManagement";
import AddProduct from "./ProductManagement/add/AddProduct";
import EditProduct from "./ProductManagement/edit/EditProduct";
import ServicePack from "./ServicePack/ServicePack";
import Services from "./Services/Services";
import SideMenu from "./SideMenu/SideMenu";
import StarRating from "./StarRating/StarRating";
import System from "./System/System";
import Theme from "./Theme/Theme";

const Admin = () => {
  const [tokenFromSession, setTokenFromSession] = useState(null);
  const token = getToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setTokenFromSession(token);
    }
  }, [token]);

  useEffect(() => {
    if (!tokenFromSession && !token) {
      navigate("/users/login");
    }
  }, [tokenFromSession]);

  return (
    <div id="admin">
      <SideMenu />
      <div className="page-content">
        <Routes>
          <Route path="/content" element={<Content />} />
          <Route path="/service-pack" element={<ServicePack />} />
          <Route path="/services" element={<Services />} />
          <Route path="/article" element={<Article />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart/cart-management" element={<Cart />} />

          <Route path={PAGE_PATH.PRODUCTS_CATEGORIES.BASE}>
            <Route index={true} element={<ProductsCategories />} />
            <Route
              path={PAGE_PATH.PRODUCTS_CATEGORIES.EDIT_CATEGORIES()}
              element={<CategoryEdit />}
            />
          </Route>
          <Route
            path={PAGE_PATH.PRODUCT_MANAGEMENT}
            element={<ProductManagement />}
          />
          <Route path={PAGE_PATH.ADD_PRODUCT} element={<AddProduct />} />
          <Route path={PAGE_PATH.EDIT_PRODUCT()} element={<EditProduct />} />
          <Route
            path={PAGE_PATH.COURSE_MANAGEMENT}
            element={<ProductManagement />}
          />
          <Route
            path={PAGE_PATH.SERVICE_MANAGEMENT}
            element={<ProductManagement />}
          />
          <Route path={PAGE_PATH.EDIT_SERVICE()} element={<EditProduct />} />
          <Route path={PAGE_PATH.ADD_SERVICE} element={<AddProduct />} />
          <Route path={PAGE_PATH.EDIT_COURSE()} element={<EditProduct />} />
          <Route path={PAGE_PATH.ADD_COURSE} element={<AddProduct />} />
          <Route path={PAGE_PATH.EDIT_CART()} element={<AddProduct />} />
          <Route path={PAGE_PATH.BANNER_MANAGEMENT} element={<Banners />} />

          <Route path="/order" element={<Order />} />
          <Route path="/library" element={<Library />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/star-rating" element={<StarRating />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/member" element={<Member />} />
          <Route path="/system" element={<System />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
