import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { CustomFieldInput } from "./CustomFieldInput";
import { useNavigate } from "react-router-dom";
import "./BookSpace.scss";

const BookSpaceForm = () => {
  const [bookspace, setBooksapce] = useState({
    city_id: '',
    location_id: '',
    building_id: '',
    floor_id: '',
    from_date: '',
    to_date: '',
    workspace_available: '',
    workspace_required: '',
    purpose: '',
    booking_for: []
  });
  
  const handleSubmit = event => {
    console.log('submit form');
  }

  return (
    <Container>
      <Row>
        <Col>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Select size="sm" aria-label="Default select example">
                  <option></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Select size="sm" aria-label="Default select example">
                  <option></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="floor">
                <Form.Label>Floor</Form.Label>
                <Form.Select size="sm" aria-label="Default select example">
                  <option></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="fromDate">
                <Form.Label>Date (From)</Form.Label>
                <Form.Control  size="sm" type="date"  />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="toDate">
                <Form.Label>Date (To)</Form.Label>
                <Form.Control size="sm"  type="date"  />
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="spaceAvailable">
                <Form.Label>Workspace Available</Form.Label>
                <Form.Control size="sm" type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="spaceRequired">
                <Form.Label>Workspace Required</Form.Label>
                <Form.Control size="sm" type="text" />
              </Form.Group>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="purpose">
                <Form.Label>Purpose</Form.Label>
                <Form.Select size="sm"  aria-label="Default select example">
                  <option></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="bookingFor">
                <Form.Label>Booking for</Form.Label>
                <Form.Select size="sm" aria-label="Default select example">
                  <option></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Button className="mb-3" style={{ float: 'right' }} variant="primary" type="submit">
            Book
          </Button>
        </Form>
        </Col>
      </Row>
    </Container>
  );
};

BookSpaceForm.propTypes = {};

BookSpaceForm.defaultProps = {};

export default BookSpaceForm;
