import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import axios from 'axios';
import { ROUTES } from '../../routes/routePaths';
import './ForgotPassword.scss';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      // Assuming Devise standard password reset endpoint
      const response = await axios.post(
        import.meta.env.VITE_API_BASE_URL + '/users/password',
        {
          user: {
            email: email,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSuccess('If an account exists for ' + email + ', you will receive an email with instructions on how to reset your password.');
        setEmail('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Password reset error:', err);
      if (err.response && err.response.data && err.response.data.errors) {
        // Devise usually returns errors array or object
        const errors = err.response.data.errors;
        setError(Array.isArray(errors) ? errors.join(', ') : errors);
      } else {
        // For security reasons, sometimes it's better not to reveal if email exists or not, 
        // but for UX we often show a generic message or the success message anyway.
        // However, if it's a 404 or 422, we might want to show a generic error.
        setError('An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-page">
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
                  SECURE & RELIABLE
                </h1>
              </div>

              <p
                className="lead mb-5 text-white-50 mx-auto"
                style={{ maxWidth: '400px' }}
              >
                We keep your data safe. Recover your account access securely.
              </p>

              <div className="d-flex gap-3 justify-content-center">
                <div className="feature-badge">
                  <span className="check-icon">✓</span> Encrypted Data
                </div>
                <div className="feature-badge">
                  <span className="check-icon">✓</span> 24/7 Support
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
                <h2 className="fw-bold mb-2 h3">Forgot Password? 🔒</h2>
                <p className="text-muted">
                  Enter your email and we'll send you instructions to reset your password.
                </p>
              </div>

              {error && (
                <Alert variant="danger" className="mb-4">
                  {error}
                </Alert>
              )}

              {success && (
                <Alert variant="success" className="mb-4 d-flex align-items-center gap-2">
                  <CheckCircle size={20} />
                  <div>{success}</div>
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

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mb-4 submit-btn py-2"
                  disabled={loading}
                >
                  {loading ? 'Sending Link...' : 'Send Reset Link'}
                </Button>

                <div className="text-center">
                  <Link to={ROUTES.sign_in} className="back-to-login-link fw-semibold">
                    <ArrowLeft size={16} />
                    Back to Sign In
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

export default ForgotPassword;
