import React from 'react';
// import PropTypes from 'prop-types';
import './Layout.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header/Header';
import AsideBar from './AsideBar/AsideBar';

const Layout = ({children}) => (
<Container fluid className='layout'>
      <Row className="positon-sticky">
        <Col md={12} className="pe-0 ps-0">
          <Header />
        </Col>
      </Row>
      <Row>
        <Col md={2} className="pe-0 ps-0">
          <AsideBar />
        </Col>
        <Col md={10} className="pe-0 ps-0">
          {children}
        </Col>
      </Row>
    </Container>
);

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
