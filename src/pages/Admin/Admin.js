import React from "react";
import SideMenu from "./SideMenu/SideMenu";
import Dashboard from "./Dashboard/Dashboard";
import Content from "./Content/Content";
import { Routes, Route } from "react-router-dom";
import "./Admin.scss";
import Article from "./Article/Article";
import Feedback from "./Feedback/Feedback";
import Product from "./Product/Product";
import Order from "./Order/Order";
import Library from "./Library/Library";
import Theme from "./Theme/Theme";
import StarRating from "./StarRating/StarRating";
import Marketing from "./Marketing/Marketing";
import Services from "./Services/Services";
import ServicePack from "./ServicePack/ServicePack";
import Member from "./Member/Member";
import System from "./System/System";
import ProductsCategories from "./Categories/ProductsCategories";
import CategoryEdit from "./Categories/Edit/CategoryEdit";
import { ProductManagement } from "./ProductManagement/ProductManagement";
import { PAGE_PATH } from "../../configuration/routeConfig";
import AddProduct from "./ProductManagement/add/AddProduct";
import EditProduct from "./ProductManagement/edit/EditProduct";

const Admin = () => {
  return (
    <div id="admin">
      <SideMenu />
      <div className="page-content">
        <Routes>
          <Route path={PAGE_PATH.HOME} element={<Dashboard />} />
          <Route path={PAGE_PATH.ADMIN_DASHBOARD} element={<Dashboard />} />
          <Route path="/content" element={<Content />} />
          <Route path="/service-pack" element={<ServicePack />} />
          <Route path="/services" element={<Services />} />
          <Route path="/article" element={<Article />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/product" element={<Product />} />

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
