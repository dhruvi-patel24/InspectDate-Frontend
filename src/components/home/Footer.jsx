import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        {/* Main Footer Content */}
        <Row className="footer-main g-4">
          {/* Brand Column */}
          <Col lg={3} md={6}>
            <div className="footer-brand">
              <h3 className="brand-name">
                Inspect<span className="brand-accent">Date</span>
              </h3>
              <p className="brand-tagline">
                Transform the way you manage your construction loan portfolio.
              </p>
            </div>
          </Col>

          {/* Product Column */}
          <Col lg={2} md={6}>
            <div className="footer-column">
              <h4 className="footer-heading">Product</h4>
              <ul className="footer-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
              </ul>
            </div>
          </Col>

          {/* Company Column */}
          <Col lg={2} md={6}>
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#linkedin">LinkedIn</a></li>
              </ul>
            </div>
          </Col>

          {/* Legal Column */}
          <Col lg={3} md={6}>
            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#security">Security</a></li>
              </ul>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © 2025 InspectDate. All rights reserved.
          </p>
          <p className="powered-by">
            Inspectdate emails →
          </p>
        </div>
      </Container>
    </footer>
  );
}
