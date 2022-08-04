// import React, { useState,useEffect } from 'react'; 
// import { Table, Modal } from 'react-bootstrap'
// import {
//   Button,
//   ModalHeader,
//   ModalDialog,
//   ModalTitle,
//   ModalBody
// } from 'react-bootstrap'

// export default function BookingDetails(props) {
//   console.log(props)
//   const [optSmModal, setOptSmModal] = useState(props?.showModal);
//   const toggleShow = () => setOptSmModal(!optSmModal);
//   useEffect(() => {
//     setOptSmModal(props?.showModal );
//     }, [props?.showModal]);
  

//   return (
//     <>
//     <Modal show={optSmModal} setShow={setOptSmModal}>
//         < ModalDialog>
//           <ModalHeader>
//             <ModalTitle>Purpose-Team Meeting</ModalTitle>
//             <Button className='btn-close' color='none' onClick={()=>{props?.onClose()}}></Button>
//             </ModalHeader>
//           <ModalBody>
//             <b className='book-for'> Booked For  </b>
//             <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>No</th>
//                 <th>Name</th>
//                 <th>Email</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>Poornima</td>
//                 <td>poornima.m@indiumsoft.com</td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>Mahesh</td>
//                 <td>mahesh.nanubala@indiumsoft.com</td>
//               </tr>
//               <tr>
//                 <td>3</td>
//                 <td>Jaishree</td>
//                 <td>jaishree@indiumsoft.com</td>
//               </tr>
//               <tr>
//                 <td>4</td>
//                 <td>Jaswanth</td>
//                 <td>jaswanth@indiumsoft.com</td>
//               </tr>
//               <tr>
//                 <td>5</td>
//                 <td>Pema</td>
//                 <td>pema@indiumsoft.com</td>
//               </tr>
//               <tr>
//                 <td>6</td>
//                 <td>Yuvaraj</td>
//                 <td>Yuvaraj@indiumsoft.com</td>
//               </tr>
//               <tr>
//                 <td>7</td>
//                 <td>Ravi</td>
//                 <td>ravi@indiumsoft.com</td>
//               </tr>
//               <tr>
//                 <td>8</td>
//                 <td>Madhavi</td>
//                 <td>madhavi@indiumsoft.com</td>
//               </tr>
//               <tr>
//                 <td>9</td>
//                 <td>Naveen</td>
//                 <td>naveen@indiumsoft.com</td>
//                 </tr>
//               <tr>
//                 <td>10</td>
//                 <td>Vinay</td>
//                 <td>vinay@indiumsoft.com</td>
//                 </tr>
//               </tbody>
//           </Table>
//           </ModalBody>
//       </ModalDialog>
//       </Modal>
//       </>
//       );
//     };

import Dropdown from 'react-bootstrap/Dropdown';
import React, {useEffect,useState} from 'react'
import { Button } from 'react-bootstrap';

 export default function BookingDropdown(props) {
  const [optSmModal, setOptSmModal] = useState(props?.showModal);
  const toggleShow = () => setOptSmModal(!optSmModal);
  useEffect(() => {
    setOptSmModal(props?.showModal );
    }, [props?.showModal]);
  
  return (
  <Dropdown.Menu  className='drop-down-list'  show={optSmModal} setShow={setOptSmModal}>
   {/* <Button className='btn-close' color='none' onClick={()=>{props?.onClose()}}></Button> */}
   <Dropdown.Header>Release Booked Room</Dropdown.Header>
    <Dropdown.Item eventKey="2">Reschedule Date & Date</Dropdown.Item>
    <Dropdown.Item eventKey="3">Share the Details</Dropdown.Item>
    <Dropdown.Item eventKey="4">Delete Record</Dropdown.Item>
    </Dropdown.Menu>
  );
}

       