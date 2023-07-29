import React from 'react';
import SideMenu from './SideMenu/SideMenu';
import Dashboard from './Dashboard/Dashboard';
import Content from './Content/Content';
import Service from './Service/Service';
import { Routes, Route } from 'react-router-dom';
import './Admin.scss';

const Admin = () => {
  return (
    <div id="admin">
      <SideMenu />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/content" element={<Content />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
