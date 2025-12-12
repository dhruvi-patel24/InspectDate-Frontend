import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import './Sidebar.scss'; // Reuse sidebar styles for layout adjustments

const DashboardLayout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="dashboard-main p-4">
        <DashboardHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
