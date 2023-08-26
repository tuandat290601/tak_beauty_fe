import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const StandardLayout = () => {
  return (
    <div className="standard-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default StandardLayout;
