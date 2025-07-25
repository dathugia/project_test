import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./OverViewSection.css";

const OverViewSection = () => {
  return (
    <div className="overview-section bg-white rounded-4 shadow-lg p-4 p-md-5 my-4">
      <Container>
        <Row className="text-center g-4">
          <Col xs={6} md={3}>
            <h3 className="text-primary fw-bold mb-2">150+</h3>
            <p className="text-muted mb-0">Beautiful Beaches</p>
          </Col>
          <Col xs={6} md={3}>
            <h3 className="text-primary fw-bold mb-2">50+</h3>
            <p className="text-muted mb-0">Countries</p>
          </Col>
          <Col xs={6} md={3}>
            <h3 className="text-primary fw-bold mb-2">1M+</h3>
            <p className="text-muted mb-0">Photos</p>
          </Col>
          <Col xs={6} md={3}>
            <h3 className="text-primary fw-bold mb-2">24/7</h3>
            <p className="text-muted mb-0">Support</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OverViewSection;
