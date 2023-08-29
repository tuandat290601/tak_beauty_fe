import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import "./Header.sass";
import Navbar from "../Navbar/Navbar";
import CustomLink from "../CustomLink/CustomLink";
import { PAGE_PATH } from "../../configuration/routeConfig";

const Header = () => {
  const { register, handleSubmit } = useForm();

  return (
    <nav id="header" className="p-3">
      <div className="container">
        <div className="row">
          <div className="col-3 align-items-center">
            <Link to="/" className="header-logo">
              <img
                src="https://theme.hstatic.net/200000280801/1000673816/14/logo.png?v=17"
                alt="logo"
              />
            </Link>
          </div>
          <div className="col-6">
            <form
              className="header-search"
              onSubmit={handleSubmit((data) => console.log(data))}
            >
              <input
                className="header-search-box w-100 py-2 px-3"
                {...register("searchValue")}
                placeholder="Nhập sản từ khóa tìm kiếm..."
              />
              <button type="submit" className="btn">
                <BsSearch />
              </button>
            </form>
          </div>
          <div className="col-3">
            <div className="d-flex justify-content-end align-items-center header-user">
              <CustomLink path="/" text="Đăng ký" styleClass="py-2 px-3 me-2" />
              <CustomLink
                path={PAGE_PATH.LOGIN}
                text="Đăng nhập"
                styleClass="py-2 px-3"
              />
              <div className="header-user-cart">
                <Link to="cart" className="header-user-link">
                  <FaCartShopping />
                </Link>
                <span className="badge rounded-pill">1</span>
              </div>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </nav>
  );
};

export default Header;
