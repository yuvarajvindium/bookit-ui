import React,{useState} from 'react';
// import PropTypes from 'prop-types';
import './Layout.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header/Header';
import AsideBar from './AsideBar/AsideBar';
import PrivateRoute from '../../Authentication/PrivateRoutes';
// import PrivatrRoute from '../../Authentication/PrivateRoutes';
const Layout = ({children}) => {
  const [isAuth, setAuth] = useState(true);
 
    return (
    <>
    {isAuth? <> <Container fluid className='layout'>
          <Row className="positon-sticky">
            <Col md={12} className="pe-0 ps-0">
              <Header />
            </Col>
          </Row>        
         <Row>
            <Col md={2} className="pe-0 ps-0">
              <AsideBar />
            </Col>     
            {/* <Col md={10} className="pe-0 ps-0">
            {children} 
            </Col>      */}
            {/* // for future private access */}
           <PrivateRoute>{children}</PrivateRoute>             
                             
         </Row>
      </Container> </> :   
      <Container>      
          <PrivateRoute>{children}</PrivateRoute>            
      </Container>
     
      }
    </>
    );
  };


Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
