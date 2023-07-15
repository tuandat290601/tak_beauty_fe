import React from "react";
import { Link } from "react-router-dom";
import { BsCaretDownFill, BsList } from "react-icons/bs";

import "./Navbar.sass";
import Dropdown from "react-multilevel-dropdown";

const NavItem = (props) => {
  const { title, path, isDropDown } = props;
  return (
    <li className="navbar-item">
      <Link to={path}>
        {title}
        {isDropDown && <BsCaretDownFill className="ms-1" />}
      </Link>
    </li>
  );
};

const Navbar = () => {
  const navList = [
    { title: "Trang chủ", path: "/" },
    { title: "Giới thiệu", path: "/" },
    { title: "Sản phẩm", path: "/", isDropDown: true },
    { title: "Tin tức", path: "/" },
    { title: "Liên hệ", path: "/" },
    { title: "Khóa học", path: "/" },
  ];

  const dropList = [
    { title: "Filler", path: "/" },
    { title: "Botox", path: "/" },
    {
      title: "Tinh Chất Làm Đẹp",
      path: "/",
      subList: [
        { title: "Trang chủ", path: "/" },
        { title: "Trang chủ", path: "/" },
      ],
    },
    { title: "Chỉ White Medience", path: "/" },
    { title: "Dụng Cụ Y Khoa", path: "/" },
  ];

  return (
    <div className="row my-4" id="navbar">
      <div className="col-3">
        <div className="dropdown">
          <Dropdown
            title={[<BsList key={999} />, "Danh mục sản phẩm"]}
            position="right"
          >
            {dropList.map((item, index) => {
              return (
                <Dropdown.Item key={index}>
                  <>
                    <Link to={item.path}>{item.title}</Link>
                    {item.subList?.length > 0 && (
                      <Dropdown.Submenu position="right">
                        {item.subList.map((subItem, subIndex) => {
                          return (
                            <Dropdown.Item key={subIndex + 9999}>
                              <Link to={subItem.path}>{subItem.title}</Link>
                            </Dropdown.Item>
                          );
                        })}
                      </Dropdown.Submenu>
                    )}
                  </>
                </Dropdown.Item>
              );
            })}
          </Dropdown>
        </div>
      </div>
      <div className="col-9">
        <ul className="navbar-list">
          {navList.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
