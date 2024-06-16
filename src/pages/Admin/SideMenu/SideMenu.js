import React from 'react';
import { Header } from '../Header/Header';
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../Footer/Footer';
import './SideMenu.scss';

export const SideMenu = () => {
  return (
    <div id="side-menu">
      <Header />
      <NavBar />
      <Footer />
    </div>
  );
};

export default SideMenu;
