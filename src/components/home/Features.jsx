import { Mail, Shield, Users, FileText, CheckCircle } from 'lucide-react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Features.scss";

export default function Features() {
  const features = [
    {
      icon: <Mail size={40} />,
      title: "FAST AND DEPENDABLE COMMUNICATION",
      description: "Our single-platform system can communicate with all parties involved in the inspection process."
    },
    {
      icon: <Shield size={40} />,
      title: "SECURITY AND STORAGE",
      description: "We use industry-standard security protocols to keep your data safe and secure at all times."
    },
    {
      icon: <Users size={40} />,
      title: "COLLABORATE",
      description: "Work seamlessly with vendors, contractors, and team members on every project."
    },
    {
      icon: <FileText size={40} />,
      title: "INSPECT",
      description: "Streamline your inspection process with detailed reports and real-time updates."
    }
  ];

  return (
    <section className="features-section" id="features">
      <Container>
        {/* Section Header */}
        <div className="section-header text-center mb-5">
          <div className="section-badge mb-3">
            <CheckCircle size={16} />
            <span>Why Choose Us</span>
          </div>
          <h2 className="section-title mb-3">
            KEY FEATURES
          </h2>
          <p className="section-description">
            Everything you need to manage your inspections efficiently
          </p>
        </div>

        <Row className="g-4">
          {features.map((feature, index) => (
            <Col key={index} sm={6} lg={3}>
              <div className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
