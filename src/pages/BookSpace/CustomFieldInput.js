import React from "react";
import { Row, Col } from "react-bootstrap";

export const CustomFieldInput = ({ label, inputs }) => {
  return (
    <>
      <Row>
        <Col md={6}>
          <label className="fw-bold">{label}</label>
        </Col>
        <Col md={6}>
          <p>{inputs}</p>
        </Col>
      </Row>
    </>
  );
};
