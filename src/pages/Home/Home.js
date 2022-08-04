import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './Home.scss';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import {Routes, Route, useNavigate} from 'react-router-dom';

//import BookingDetails from "../BookingDetails/bookingDetails"
import {HiUsers} from 'react-icons/hi'
import {TbDotsVertical} from 'react-icons/tb'
import image from '../../images/conference-icon.png'
let name = "NAME!"
//let cardContent = `Booked from 11th July, 2022 to 15th July, 2022 for Yuvaraj,Jashwanth, Mahesh, Karthick.`;

const Home = () => {
  const navigate = useNavigate();
  const navigateToNewBookings = () => {
    navigate('/new-bookings');
  };
  const [show, setShow] = useState(false);
  const handleShow = () => { setShow(true) }

  return (
    <>
      {/* {show && <BookingDetails showModal={show} onClose={() => { setShow(false) }} />} */}
      <Container fluid className='home' >
        <section className=" pt-5 pb-2 ">
          <Row>
            <Col md={12}>
              <h4 id="welcomeName-row">
                Welcome back <span id="text-name">{name}</span>
              </h4>
              <button className='booking-icon' onClick={navigateToNewBookings}>New Booking</button> 
                </Col>
          </Row>
        </section>
        <hr className='hr' />
        <section className="custom-upcomingbooking-section pt-3 pb-3">
          <Row>
            <h4 className="headings">Upcoming Bookings</h4>
            <Col md={4}>
              <Card className="text-initial ub-border-left">
                
                <Card.Body>
                  <TbDotsVertical className='icon-dots'/>
                  <Card.Title className='card-headings'> <img src={image} className='icon-headings'/> 29 July 2022| 12.00 to 3.00 </Card.Title>
                  <Card.Title className='card-headers'>Team Meeting</Card.Title>
                  <Card.Text className='cardtext' >
                  chennai - Ganesh Chambar
                   Floor-2-AAR Room 20 
                   Room Capacity 6 seats 
                  </Card.Text >
                </Card.Body>
                </Card>
              </Col>
            <Col md={4}>
              <Card className="text-initial ub-border-left">
                <Card.Body>
                <TbDotsVertical className='icon-dots'/>
                <Card.Title className='card-headings'> <img src={image} className='icon-headings'/>  29 July 2022| 12.00 to 3.00 </Card.Title>
                  <Card.Title className='card-headers'>Team Meeting</Card.Title>
                  <Card.Text className='cardtext' >
                  chennai - Ganesh Chambar
                   Floor-2-AAR Room 20 
                   Room Capacity 8 seats 
                  </Card.Text >
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <hr className='hr' />
        <section className="custom-recentbooking-section pt-3 pb-3">
          <Row>
            <h4 className="headings"> Booking History</h4>
            <Col md={4}>
              <Card className="text-initial rb-border-left"  onClick={handleShow}>
                <Card.Body>
                <TbDotsVertical className='icon-dots'/>
                  <Card.Title className='card-headings'>   <img src={image} className='icon-headings'/> 29 July 2022| 2.00 to 5.00 </Card.Title>
                <Card.Title className='card-headers'>Team Meeting</Card.Title>
                  <Card.Text className='cardtext' >
                  chennai - Ganesh Chambar
                   Floor 1 - AAR Room 21
                   Room Capacity 8 seats 
                  </Card.Text >
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-initial rb-border-left"  onClick={handleShow}>
                <Card.Body>
                <TbDotsVertical className='icon-dots'/>
                <Card.Title className='card-headings'>  <img src={image} className='icon-headings'/>  29 July 2022| 2.00 to 5.00 </Card.Title>
                <Card.Title className='card-headers'>Team Meeting</Card.Title>
                  <Card.Text className='cardtext' >
                   chennai - Ganesh Chambar
                   Floor 2 - AAR Room 21
                   Room Capacity 6 seats 
                  </Card.Text >
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-initial rb-border-left"
                onClick={handleShow}>
                <Card.Body>
                <TbDotsVertical className='icon-dots'/>
                <Card.Title className='card-headings'> <img src={image} className='icon-headings'/> 29 July 2022| 2.00 to 5.00 </Card.Title>
                <Card.Title className='card-headers'>Team Meeting</Card.Title>
                  <Card.Text className='cardtext' >
                  chennai - Ganesh Chambar
                   Floor 1 -AAR Room 22
                   Room Capacity 8 seats 
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
