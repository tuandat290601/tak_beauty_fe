import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

const StandardLayout = () => {
  return (
    <div className="standard-layout">
      <ScrollToTopButton />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default StandardLayout;
