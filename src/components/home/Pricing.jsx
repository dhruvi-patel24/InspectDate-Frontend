import { Check } from 'lucide-react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./Pricing.scss";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$225",
      period: "/project",
      description: "Perfect for small projects and individual contractors",
      features: [
        "Up to 10 inspections/month",
        "Basic reporting",
        "Email support",
        "Mobile app access",
        "Photo documentation"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "$1,225",
      period: "/project",
      description: "Ideal for growing construction businesses",
      features: [
        "Unlimited inspections",
        "Advanced analytics",
        "Priority support",
        "Custom workflows",
        "API access",
        "Team collaboration",
        "Dedicated account manager"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations with complex needs",
      features: [
        "Everything in Professional",
        "Custom integrations",
        "White-label options",
        "SLA guarantees",
        "On-premise deployment",
        "Training & onboarding"
      ],
      highlighted: false
    }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <Container>
        {/* Section Header */}
        <div className="section-header text-center mb-5">
          <h2 className="section-title mb-3">
            Simple, transparent pricing
          </h2>
          <p className="section-description">
            Choose the plan that fits your needs. All plans include a 30-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <Row className="g-4 justify-content-center">
          {plans.map((plan, index) => (
            <Col key={index} lg={4} md={6}>
              <div className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
                {plan.highlighted && (
                  <div className="popular-badge">Most Popular</div>
                )}

                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    <span className="price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                  <p className="plan-description">{plan.description}</p>
                </div>

                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <Check size={18} className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`plan-button ${plan.highlighted ? 'btn-primary' : 'btn-outline'}`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </div>
            </Col>
          ))}
        </Row>

        {/* Bottom Note */}
        <div className="text-center mt-5">
          <p className="pricing-note">
            All plans include free 30-day trial. No credit card required.
            <a href="#contact" className="pricing-link"> Contact us</a> for volume discounts.
          </p>
        </div>
      </Container>
    </section>
  );
}
