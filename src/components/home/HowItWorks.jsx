import { CheckCircle, ArrowRight } from 'lucide-react';
import { Container, Row, Col } from 'react-bootstrap';
import "./HowItWorks.scss";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Request Inspection",
      description: "Submit your inspection request through our simple online platform. Specify project details, location, and timeline."
    },
    {
      number: "02",
      title: "Schedule & Assign",
      description: "Our system automatically matches you with qualified inspectors and schedules the inspection at your convenience."
    },
    {
      number: "03",
      title: "Inspection Complete",
      description: "Certified inspectors conduct thorough on-site evaluations with detailed documentation and photo evidence."
    },
    {
      number: "04",
      title: "Receive Report",
      description: "Get comprehensive inspection reports delivered instantly to your dashboard with actionable insights."
    }
  ];

  return (
    <section className="how-it-works-section" id="how-it-works">
      <Container>
        {/* Section Header */}
        <div className="section-header text-center mb-5">
          <div className="section-badge mb-3">
            <CheckCircle size={16} />
            <span>Simple Process</span>
          </div>
          <h2 className="section-title mb-3">
            HOW IT WORKS
          </h2>
          <p className="section-description">
            Our streamlined workflow ensures every inspection is completed on time, every time
          </p>
        </div>

        {/* Steps Grid */}
        <Row className="g-4">
          {steps.map((step, index) => (
            <Col key={index} md={6} lg={3}>
              <div className="step-card">
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="step-arrow">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>

        {/* CTA */}
        <div className="text-center mt-5">
          <a href="#contact" className="btn-primary-cta">
            Get Started Now
            <ArrowRight className="ms-2" size={16} />
          </a>
        </div>
      </Container>
    </section>
  );
}
