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

const Admin = () => {
  return (
    <div id="admin">
      <SideMenu />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/content" element={<Content />} />
          <Route path="/service-pack" element={<ServicePack />} />
          <Route path="/services" element={<Services />} />
          <Route path="/article" element={<Article />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/product" element={<Product />} />
          <Route
            path="/products/products-categories"
            element={<ProductsCategories />}
          />
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
