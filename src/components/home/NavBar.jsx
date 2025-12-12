import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routePaths";
import "./NavBar.scss";

function NavBar() {
  const navigate = useNavigate();
  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <Navbar expand="lg" className="header-navbar bg-white">
      <Container>
        {/* Logo */}
        <Navbar.Brand onClick={() => handleNavClick("/")} className="brand-logo">
          <div className="logo-icon">
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
          <span className="brand-text">
            Inspect<span className="brand-accent">Date</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          {/* Center Navigation */}
          <Nav className="mx-auto">
            <Nav.Link
              onClick={() => handleNavClick("/#features")}
              className="nav-item-link"
            >
              Features
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavClick("/#how-it-works")}
              className="nav-item-link"
            >
              How It Works
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavClick("/#pricing")}
              className="nav-item-link"
            >
              Pricing
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavClick("/#reviews")}
              className="nav-item-link"
            >
              Reviews
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavClick("/#contact")}
              className="nav-item-link"
            >
              Contact
            </Nav.Link>

            {/* Right Side Auth Buttons */}
            <span className="d-flex align-items-center gap-3">
              <Button
                variant="link"
                onClick={() => handleNavClick(ROUTES.sign_in)}
                className="sign-in-btn"
              >
                Sign In
              </Button>
              <Button
                variant="dark"
                onClick={() => handleNavClick("/signup")}
                className="get-started-btn"
              >
                Get Started
              </Button>
            </span>
          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
};

export default NavBar;
