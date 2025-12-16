import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Lock, Eye, EyeOff, ArrowLeft, CheckCircle } from 'lucide-react';
import axios from 'axios';
import { ROUTES } from '../../routes/routePaths';
import './ResetPassword.scss';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const resetPasswordToken = searchParams.get('reset_password_token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!resetPasswordToken) {
      setError('Invalid or missing reset token.');
    }
  }, [resetPasswordToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (!resetPasswordToken) {
      setError('Missing reset token. Please request a new password reset link.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/users/password`,
        {
          user: {
            reset_password_token: resetPasswordToken,
            password: password,
            password_confirmation: confirmPassword
          }
        }
      );

      if (response.status === 200 || response.status === 204) {
        setSuccess(
          'Your password has been reset successfully. Redirecting to login...'
        );
        setTimeout(() => {
          navigate(ROUTES.sign_in);
        }, 3000);
      } else {
        setError('Failed to reset password. Please try again.');
      }
    } catch (err) {
      console.error('Reset password error:', err);
      if (err.response?.data?.errors) {
        const errors = err.response.data.errors;

        if (typeof errors === 'object' && !Array.isArray(errors)) {
          const errorMessages = Object.entries(errors)
            .map(
              ([key, msgs]) =>
                `${key.replace('_', ' ')} ${msgs.join(', ')}`
            )
            .join('. ');
          setError(errorMessages);
        } else {
          setError(Array.isArray(errors) ? errors.join(', ') : errors);
        }
      } else {
        setError('An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-password-page">
      <Container fluid className="p-0 min-vh-100 overflow-hidden">
        <Row className="g-0 min-vh-100">
          {/* Left Side */}
          <Col
            lg={6}
            className="d-none d-lg-flex flex-column justify-content-center align-items-center bg-dark position-relative hero-section"
          >
            <div className="hero-bg-image" />
            <div className="hero-overlay" />
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
                <h1 className="display-4 fw-bold mb-3">FRESH START</h1>
              </div>

              <p
                className="lead mb-5 text-white-50 mx-auto"
                style={{ maxWidth: '400px' }}
              >
                Create a new password to secure your account and get back to
                work.
              </p>

              <div className="d-flex gap-3 justify-content-center">
                <div className="feature-badge">
                  <span className="check-icon">✓</span> Strong Security
                </div>
                <div className="feature-badge">
                  <span className="check-icon">✓</span> Instant Access
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
              className="auth-form-wrapper p-4 p-sm-5 w-100 animate-fade-in-up"
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
                <h2 className="fw-bold mb-2 h3">Reset Password 🔐</h2>
                <p className="text-muted">
                  Please enter your new password below.
                </p>
              </div>

              {error && (
                <Alert variant="danger" className="mb-4">
                  {error}
                </Alert>
              )}

              {success && (
                <Alert
                  variant="success"
                  className="mb-4 d-flex align-items-center gap-2"
                >
                  <CheckCircle size={20} />
                  <div>{success}</div>
                </Alert>
              )}

              {!success && (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4 position-relative">
                    <Form.Label>New Password</Form.Label>
                    <div className="input-group-icon">
                      <Lock size={20} className="icon text-muted" />
                      <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter new password"
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
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </div>
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-4 position-relative">
                    <Form.Label>Confirm New Password</Form.Label>
                    <div className="input-group-icon">
                      <Lock size={20} className="icon text-muted" />
                      <Form.Control
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) =>
                          setConfirmPassword(e.target.value)
                        }
                        required
                        className="py-2 ps-5 pe-5"
                      />
                      <div
                        className="password-toggle"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </div>
                    </div>
                  </Form.Group>

                  <Button
                    type="submit"
                    className="w-100 mb-4 submit-btn py-2"
                    disabled={loading}
                  >
                    {loading
                      ? 'Resetting Password...'
                      : 'Reset Password'}
                  </Button>
                </Form>
              )}

              <div className="text-center">
                <Link
                  to={ROUTES.sign_in}
                  className="back-to-login-link fw-semibold"
                >
                  <ArrowLeft size={16} />
                  Back to Sign In
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResetPassword;
