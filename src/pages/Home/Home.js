import React from 'react';
// import PropTypes from 'prop-types';
import './Home.scss';
import { Container, Row, Col, Card } from 'react-bootstrap';
// import { logout } from "react-icons/";
// import { HiOutlineLogout } from 'react-icons/hi'
// import {ImHome} from 'react-icons/im'
// import {FaCalendarAlt, FaCalendarCheck} from'react-icons/fa';

let name = "Name!"

// let content = "7th jul 2022 to 11 jul 2022  \"Kay ARR Royal\" Stone Tech Park \"BOOKit\" project";
// let footer_content = "Kay ARR Royal Stone Tech Park, Benniganahalli, No.100, Old Madras Rd, Pai Layout, Mahadevapuram, Bengaluru, Karnataka 560016";
 const Home = () => (

<>
<Container fluid className='center' >
      <section className=" pt-5 pb-2">
        <Row>
          <Col md={12}>
            <h4>
              Welcome back <span className="text-primary">{name}</span>
            </h4>
          </Col>
        </Row>
      </section>
      <hr className='hrshadow'/>
      <section className="custom-upcomingbooking-section pt-3 pb-3">
        <Row>
          <h4 className="text-primary">UPCOMING BOOKINGS</h4>
          <Col md={4}>
            <Card className="text-initial cardshadow">
              <Card.Body>
                <Card.Title>Team Meeting</Card.Title>
                <Card.Text>
                  Booked from 11th July, 2022 to 15th July, 2022 for Yuvaraj,
                  Jashwanth, Mahesh, Karthick.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <hr className='hrshadow' />
      <section className="custom-recentbooking-section pt-3 pb-3">
        <Row>
          <h4 className="text-primary">RECENT BOOKINGS</h4>
          <Col md={4}>
            <Card className="text-initial cardshadow">
              <Card.Body>
                <Card.Title>Team Meeting</Card.Title>
                <Card.Text>
                  Booked from 11th July, 2022 to 15th July, 2022 for Yuvaraj,
                  Jashwanth, Mahesh, Karthick.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-initial cardshadow">
              <Card.Body>
                <Card.Title>Team Meeting</Card.Title>
                <Card.Text>
                  Booked from 11th July, 2022 to 15th July, 2022 for Yuvaraj,
                  Jashwanth, Mahesh, Karthick.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-initial cardshadow">
              <Card.Body>
                <Card.Title>Team Meeting</Card.Title>
                <Card.Text>
                  Booked from 11th July, 2022 to 15th July, 2022 for Yuvaraj,
                  Jashwanth, Mahesh, Karthick.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <hr className='hrshadow' />
    </Container>


 </>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
