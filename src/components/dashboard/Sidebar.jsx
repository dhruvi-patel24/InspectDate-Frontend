import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { dashboardConfig } from '../../config/dashboardConfig';
import { ROUTES } from '../../routes/routePaths';
import './Sidebar.scss';

const Sidebar = () => {
  const location = useLocation();
  const { menuItems } = dashboardConfig;

  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3 border-end border-secondary">
      <Link
        to="/"
        className="logo d-flex align-items-center mb-4 mb-md-0 me-md-auto text-decoration-none"
      >
        <div className="logo-icon me-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
            <path d="M10 6h4" />
            <path d="M10 10h4" />
            <path d="M10 14h4" />
            <path d="M10 18h4" />
          </svg>
        </div>
        <span className="fs-4 fw-bold text-white">
          Inspect<span className="text-success">Date</span>
        </span>
      </Link>

      <div className="sidebar-scroll">
        <Nav className="flex-column mb-auto">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Nav.Item key={index} className="mb-1">
                <Link
                  to={item.path}
                  className={`nav-link d-flex align-items-center gap-3 ${
                    isActive ? 'active' : ''
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon size={20} />
                  {item.label}
                </Link>
              </Nav.Item>
            );
          })}
        </Nav>
      </div>

      <div className="mt-auto pt-3 border-top border-secondary">
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div
              className="avatar-placeholder rounded-circle d-flex align-items-center justify-content-center me-2"
              style={{ width: '32px', height: '32px' }}
            >
              <strong>U</strong>
            </div>
            <strong>User</strong>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <Link className="dropdown-item" to={ROUTES.my_profile}>
                Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="/sign_in">
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
