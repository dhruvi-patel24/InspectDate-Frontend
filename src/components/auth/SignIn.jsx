import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Chrome } from 'lucide-react';
import axios from 'axios';
import { ROUTES } from '../../routes/routePaths';
import api from '../../api';
import './SignIn.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(
        import.meta.env.VITE_API_BASE_URL + '/users/sign_in',
        {
          user: {
            email: email,
            password: password,
          },
        }
      );

      if (response.data.success) {
        navigate(ROUTES.dashboard);
      } else {
        setError(response.data.errors || 'Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      if (err.response && err.response.data && err.response.data.errors) {
        setError(err.response.data.errors);
      } else {
        setError('An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign-in-page">
      <Container fluid className="p-0 min-vh-100 overflow-hidden">
        <Row className="g-0 min-vh-100">
          {/* Left Side */}
          <Col
            lg={6}
            className="d-none d-lg-flex flex-column justify-content-center align-items-center bg-dark position-relative hero-section"
          >
            <div className="hero-bg-image"></div>
            <div className="hero-overlay"></div>
            <div className="hero-content text-white text-center p-5 position-relative z-2">
              <div className="mb-4">
                <div className="logo-icon-large mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={64}
                    height={64}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
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
                <h1 className="display-4 fw-bold mb-3">
                  REQUESTED. SCHEDULED. DELIVERED.
                </h1>
              </div>

              <p
                className="lead mb-5 text-white-50 mx-auto"
                style={{ maxWidth: '400px' }}
              >
                Transform the way you manage your construction loan portfolio
              </p>

              <div className="d-flex gap-3 justify-content-center">
                <div className="feature-badge">
                  <span className="check-icon">✓</span> Real-time Updates
                </div>
                <div className="feature-badge">
                  <span className="check-icon">✓</span> Smart Reporting
                </div>
              </div>
            </div>
          </Col>

          {/* Right Side */}
          <Col
            lg={6}
            className="d-flex align-items-center justify-content-center bg-white"
          >
            <div
              className="sign-in-form-wrapper p-4 p-sm-5 w-100 animate-fade-in-up"
              style={{ maxWidth: '550px' }}
            >
              <div className="text-center mb-5">
                <div className="brand-logo d-inline-flex align-items-center gap-2 justify-content-center">
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
                  <span className="brand-text h4 mb-0 fw-bold">
                    Inspect<span className="text-success">Date</span>
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <h2 className="fw-bold mb-2 h3">Welcome back! 👋</h2>
                <p className="text-muted">
                  Enter your credentials to access your inspection dashboard.
                </p>
              </div>

              {error && (
                <Alert variant="danger" className="mb-4">
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-4 position-relative"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email address</Form.Label>
                  <div className="input-group-icon">
                    <Mail size={20} className="icon text-muted" />
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="py-2 ps-5"
                    />
                  </div>
                </Form.Group>

                <Form.Group
                  className="mb-4 position-relative"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <div className="input-group-icon">
                    <Lock size={20} className="icon text-muted" />
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="py-2 ps-5 pe-5"
                    />
                    <div
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff size={20} className="text-muted" />
                      ) : (
                        <Eye size={20} className="text-muted" />
                      )}
                    </div>
                  </div>
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <Form.Check
                    type="checkbox"
                    label="Remember for 30 days"
                    id="remember-me"
                  />
                  <Link to="/forgot-password" className="forgot-password-link">
                    Forgot Password?
                  </Link>
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mb-4 sign-in-btn py-2"
                  disabled={loading}
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </Button>

                <div className="text-center">
                  <span className="text-muted">Don't have an account? </span>
                  <Link to="/signup" className="sign-up-link fw-semibold">
                    Create an account
                  </Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
