import React from 'react';
import './Footer.scss';

export const Footer = () => {
  return (
    <div className="side-menu-footer">
      <div className="account-info">
        <a
          href="#"
          data-bs-toggle="collapse"
          data-bs-target="#list-action-user"
        >
          <img
            alt=""
            src="http://test.sikidodemo.com/manhdung/views/backend/assets/images/avatar.png"
          />
          <span>Quản Trị Viên</span>
          <span id="caret-menu-user">
            <i className="fal fa-angle-up caret-menu-icon"></i>
          </span>
        </a>
        <div id="list-action-user" className="collapse">
          <ul className="nav-user-sub">
            <li>
              <a href="http://test.sikidodemo.com/manhdung/admin/users/edit?view=profile">
                <i className="fal fa-user"></i>
                <span>Tài khoản của bạn</span>
              </a>
            </li>
            <li>
              <a href="http://test.sikidodemo.com/manhdung/admin/users/edit?view=password">
                <i className="fal fa-unlock"></i> <span>Đổi mật khẩu</span>
              </a>
            </li>
            <li className="divider"></li>
            <li>
              <a href="http://test.sikidodemo.com/manhdung/admin/users/logout">
                <i className="fal fa-sign-out-alt"></i>
                <span>Đăng xuất</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
