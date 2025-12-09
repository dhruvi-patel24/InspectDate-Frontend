import { Star, Quote } from 'lucide-react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Reviews.scss";

export default function Reviews() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Construction Manager",
      company: "BuildRight Inc.",
      rating: 5,
      text: "I love using InspectDate to help me manage all my team inspections. It makes it so easy to communicate with all parties involved in the inspection process.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Project Director",
      company: "Metro Construction",
      rating: 5,
      text: "InspectDate has transformed our workflow. The platform is intuitive, and the reporting features save us hours every week. Highly recommended!",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Loan Officer",
      company: "First National Bank",
      rating: 5,
      text: "The best inspection management tool we've used. Real-time updates and comprehensive reports make our job so much easier. Outstanding support team!",
      avatar: "ER"
    }
  ];

  return (
    <section className="reviews-section" id="reviews">
      <Container>
        {/* Section Header */}
        <div className="section-header text-center mb-5">
          <h2 className="section-title mb-3">
            User Reviews
          </h2>
          <p className="section-description">
            See what our customers have to say about InspectDate
          </p>
        </div>

        {/* Reviews Grid */}
        <Row className="g-4">
          {reviews.map((review, index) => (
            <Col key={index} lg={4} md={6}>
              <div className="review-card">
                <div className="quote-icon">
                  <Quote size={32} />
                </div>

                <div className="rating mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="review-text">{review.text}</p>

                <div className="reviewer-info">
                  <div className="avatar">{review.avatar}</div>
                  <div className="reviewer-details">
                    <div className="reviewer-name">{review.name}</div>
                    <div className="reviewer-role">{review.role}</div>
                    <div className="reviewer-company">{review.company}</div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Navigation Dots */}
        <div className="review-navigation text-center mt-5">
          <div className="nav-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </Container>
    </section>
  );
}
