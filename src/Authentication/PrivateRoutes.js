// for future private access  


import { useState } from 'react';

import { Col } from 'react-bootstrap';
const PrivateRoute = ({children},{/*, {Authenticate}*/}) => {
    const [isAuth, setAuth] = useState(true);
    // console.log('fron pvt',Authenticate);
    return(
        <>
         { isAuth?  <> <Col md={10} className="pe-0 ps-0">
          {children}
          </Col>  </> :  '' }
        </>
       );

}
export default PrivateRoute;
