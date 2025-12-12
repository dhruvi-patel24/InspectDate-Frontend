import { Play, CheckCircle, ArrowRight, Users } from 'lucide-react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./Intro.scss";

export default function Hero() {
  return (
    <section className="intro-section">
      <Container className="py-5">
        <Row className="align-items-center g-4 g-lg-5">
          {/* Left Content - 50% */}
          <Col lg={6} className="intro-section-1 text-center text-lg-start">
            {/* Badge */}
            <div className="badge-accent mb-4">
              <span className="pulse-dot"></span>
              Trusted by leading lenders
            </div>

            {/* Main Heading */}
            <h1 className="hero-title mb-4">
              Requested. <span className="text-accent">Scheduled.</span> Delivered.
            </h1>

            {/* Description */}
            <p className="hero-description mb-4">
              Transform the way you manage your construction loan portfolio.
              Streamline inspections, collaborate with vendors, and keep every project on track.
            </p>

            {/* Feature List */}
            <div className="feature-list mb-4">
              <div className="feature-item">
                <CheckCircle className="feature-icon" />
                No downloads required
              </div>
              <div className="feature-item">
                <CheckCircle className="feature-icon" />
                Zero startup costs
              </div>
              <div className="feature-item">
                <CheckCircle className="feature-icon" />
                Free 30-day trial
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <Button className="btn-primary-cta">
                Start Free Trial
                <ArrowRight className="ms-2" size={16} />
              </Button>
              <Button variant="outline-dark" className="btn-secondary-cta">
                <Play className="me-2" size={16} />
                Watch Demo
              </Button>
            </div>
          </Col>

          {/* Right Content - Dashboard Preview - 50% */}
          <Col lg={6} className='intro-section-2'>
            <div className="dashboard-preview position-relative">
              <div className="dashboard-card">
                {/* Purple Header */}
                <div className="dashboard-header">
                  <div className="window-controls">
                    <div className="control-dot red"></div>
                    <div className="control-dot yellow"></div>
                    <div className="control-dot green"></div>
                  </div>
                  <span className="dashboard-title">Construction Dashboard</span>
                  <span className="live-badge">Live</span>
                </div>

                {/* Floating Stats Cards */}
                <div className="floating-stats">
                  <div className="stat-card-float completed">
                    <CheckCircle size={20} className="stat-icon" />
                    <div className="stat-content">
                      <div className="stat-value">24</div>
                      <div className="stat-label">Completed Today</div>
                      <div className="stat-change">+12% this month</div>
                    </div>
                  </div>

                  <div className="stat-card-float scheduled">
                    <div className="stat-content">
                      <div className="stat-value">18</div>
                      <div className="stat-label">Scheduled</div>
                      <div className="stat-change">On schedule</div>
                    </div>
                  </div>

                  <div className="stat-card-float progress">
                    <div className="stat-content">
                      <div className="stat-value">6</div>
                      <div className="stat-label">In Progress</div>
                      <div className="stat-change">3 today</div>
                    </div>
                  </div>

                  <div className="stat-card-float rate">
                    <div className="stat-content">
                      <div className="stat-value">98%</div>
                      <div className="stat-label">On-Time Rate</div>
                    </div>
                  </div>
                </div>

                {/* Construction Image with Play Button */}
                <div className="construction-preview">
                  <div className="construction-image">
                    {/* YouTube Video Thumbnail */}
                    <img
                      src="https://img.youtube.com/vi/-WHpWI9vcTc/maxresdefault.jpg"
                      alt="Construction site preview"
                      className="video-thumbnail"
                    />
                    <div className="play-button-overlay">
                      <a
                        href="https://www.youtube.com/watch?v=-WHpWI9vcTc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="play-button"
                      >
                        <Play size={32} fill="currentColor" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Stat Card */}
                <div className="bottom-stat-card">
                  <div className="stat-icon-wrapper">
                    <Users size={20} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">156</div>
                    <div className="stat-label">Active Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}