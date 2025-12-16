import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Construction, ArrowLeft } from 'lucide-react';
import './PageUnderConstruction.scss';

const PageUnderConstruction = () => {
  const navigate = useNavigate();

  return (
    <div className="page-under-construction p-5">
      <Container className="d-flex flex-column align-items-center justify-content-center text-center">
        <div className="icon-wrapper mb-4">
          <Construction size={48} strokeWidth={1.5} />
        </div>

        <h1 className="fw-bold mb-3">Under Construction</h1>

        <p
          className="lead text-muted mb-5"
          style={{ maxWidth: '500px' }}
        >
          We're currently working on this page to bring you a better experience.
          Check back soon!
        </p>

        <Button
          variant="primary"
          onClick={() => navigate(-1)}
          className="d-flex align-items-center gap-2 px-4 py-2"
        >
          <ArrowLeft size={20} />
          Go Back
        </Button>
      </Container>
    </div>
  );
};

export default PageUnderConstruction;
