import React from "react";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import Dropdown from "react-multilevel-dropdown";

import "./Navbar.sass";
import useCategories from "../../hooks/Categories/useCategories";
import { useState } from "react";
import { useEffect } from "react";

const NavItem = (props) => {
  const { title, path } = props;
  return (
    <li className="navbar-item">
      <Link to={path}>
        {title}
      </Link>
    </li>
  );
};

const Navbar = () => {
  const navList = [
    { title: "Trang chủ", path: "/" },
    { title: "Sản phẩm", path: "/san-pham" },
    { title: "Liên hệ", path: "/" },
  ];

  const { sortCategory } = useCategories({})

  const [dropList, setDropList] = useState([])

  console.log(dropList)

  useEffect(() => {
    if (dropList.length === 0) {
      const categories = sortCategory();
      setDropList(categories);
    }
  }, [dropList])

  return (
    <div className="row my-4" id="navbar">
      <div className="col-5">
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
      <div className="col-7">
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
