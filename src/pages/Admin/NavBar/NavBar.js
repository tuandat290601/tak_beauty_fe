import React from "react";
import "./NavBar.scss";
import { adminNavbar } from "../../../helpers/admin-data";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div id="admin-menu-back"></div>
      <div id="admin-menu-wrap">
        <ul id="admin-menu">
          {adminNavbar.map((item, i) => {
            return (
              <li key={i} className="has-submenu menu-top has-current-submenu">
                <Link
                  to={item.path}
                  className="has-submenu has-current-submenu menu-top"
                >
                  <div className="menu-arrow">
                    <div></div>
                  </div>
                  <div className="menu-name">{item.name}</div>
                </Link>
                {item.subMenu && (
                  <ul className="submenu submenu-wrap">
                    {item.subMenu.map((subItem, i) => {
                      return (
                        <li key={i}>
                          {/* <a href={subItem.path}>{subItem.name}</a> */}
                          <Link to={subItem.path}>{subItem.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
