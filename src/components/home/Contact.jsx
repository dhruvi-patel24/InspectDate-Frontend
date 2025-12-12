import { Phone, Mail, MapPin } from 'lucide-react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./Contact.scss";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <Container>
        <Row className="align-items-center g-5">
          {/* Left Content */}
          <Col lg={6}>
            <h2 className="contact-title mb-4">
              Ready to transform your workflow?
            </h2>
            <p className="contact-description mb-5">
              We can immediately work with your IT department to deploy the software within your existing intranet and email security system.
            </p>

            {/* Contact Info Cards */}
            <div className="contact-info-cards">
              <div className="contact-card">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-details">
                  <div className="contact-label">CALL US</div>
                  <div className="contact-value">(650) 492-8506</div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-details">
                  <div className="contact-label">EMAIL</div>
                  <div className="contact-value">support@inspectdate.com</div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-details">
                  <div className="contact-label">LOCATED AT</div>
                  <div className="contact-value">InspectDate</div>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Content - Form */}
          <Col lg={6}>
            <div className="contact-form-card">
              <div className="form-header">
                <h3 className="form-title">Start Your Free Trial</h3>
              </div>

              <Form className="contact-form">
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="John" />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Smith" />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>Work Email</Form.Label>
                      <Form.Control type="email" placeholder="email@company.com" />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control type="text" placeholder="Your Company" />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control type="tel" placeholder="(555) 123-4567" />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Button className="btn-submit w-100">
                      Get Started Free →
                    </Button>
                  </Col>

                  <Col xs={12}>
                    <p className="form-footer-text">
                      By signing up, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
