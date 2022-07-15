import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './Home.scss';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import BookingDetails from "../BookingDetails/bookingDetails"

let name = "NAME!"
let cardContent = `Booked from 11th July, 2022 to 15th July, 2022 for Yuvaraj,Jashwanth, Mahesh, Karthick.`;

const Home = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => { setShow(true) }

  return (
    <>
      {show && <BookingDetails showModal={show} onClose={() => { setShow(false) }} />}
      <Container fluid className='home' >
        <section className=" pt-5 pb-2 ">
          <Row>
            <Col md={12}>
              <h4 id="welcomeName-row">
                Welcome back <span id="text-name">{name}</span>
              </h4>
            </Col>
          </Row>
        </section>
        <hr className='hr' />
        <section className="custom-upcomingbooking-section pt-3 pb-3">
          <Row>
            <h4 className="headings">UPCOMING BOOKINGS</h4>
            <Col md={4}>
              <Card className="text-initial">
                <Card.Body>
                  <Card.Title className='cardheadings'>Team Meeting</Card.Title>
                  {/* <Button variant="primary">Team Meeting</Button> */}
                  <Card.Text className='cardtext' >
                    {cardContent}
                  </Card.Text >
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <hr className='hr' />
        <section className="custom-recentbooking-section pt-3 pb-3">
          <Row>
            <h4 className="headings">RECENT BOOKINGS</h4>
            <Col md={4}>
              <Card className="text-initial">
                <Card.Body>
                  <Button variant="primary" onClick={handleShow}>Team Meeting</Button>
                  <Card.Text className='cardtext' >
                    {cardContent}
                  </Card.Text >
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-initial">
                <Card.Body>
                  <Button variant="primary" onClick={handleShow}>Team Meeting</Button>
                  <Card.Text className='cardtext' >
                    Booked from 11th July, 2022 to 15th July, 2022 for Yuvaraj,
                    Jashwanth, Mahesh, Karthick.
                  </Card.Text >
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-initial">
                <Card.Body>
                  <Button variant="primary" onClick={handleShow}>Team Meeting</Button>
                  <Card.Text className='cardtext' >
                    {cardContent}
                  </Card.Text >
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <hr className='hr' />
      </Container>
    </>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
