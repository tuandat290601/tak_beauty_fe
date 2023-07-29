import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <section id="admin-header">
      <a href="">
        <img
          alt=""
          src="http://test.sikidodemo.com/manhdung/views/backend/assets/images/cms-logo.png"
        ></img>
      </a>
      <a href="/" className="pull-right" target="_black" id="home-logo">
        <i className="ti-home"></i>
      </a>
    </section>
  );
};
