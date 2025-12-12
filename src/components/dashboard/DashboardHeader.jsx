import React from 'react';
import { useLocation } from 'react-router-dom';
import { dashboardConfig } from '../../config/dashboardConfig';

const DashboardHeader = () => {
  const location = useLocation();

  // Find the current menu item based on the path
  const currentItem = dashboardConfig.menuItems.find(
    item => item.path === location.pathname
  );

  // Default title if not found (e.g., root dashboard)
  const title = currentItem ? currentItem.label : 'Dashboard';

  return (
    <div className="dashboard-header d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
      <div>
        <h1 className="h3 fw-bold mb-1 text-dark">{title}</h1>
        <p className="text-muted mb-0 small">
          Manage your {title.toLowerCase()} and view details.
        </p>
      </div>
      <div>
        {/* Placeholder for future actions like "Create New" */}
        {/* <button className="btn btn-primary btn-sm">
            <i className="bi bi-plus-lg me-2"></i>Create New
          </button> */}
      </div>
    </div>
  );
};

export default DashboardHeader;
