

import React, { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap'
import { render } from '@testing-library/react';
import './bookingDetails.css'

const BookingDetails = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Booked For
      </Button>

      <Modal size="xl" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className='modal-title'>
          <Modal.Title>Purpose - Team Meeting</Modal.Title>
          </div>
        </Modal.Header>

        <Modal.Body>
          <b className='book-for'> Booked For  </b>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Poornima</td>
                <td>poornima.m@indiumsoft.com</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mahesh</td>
                <td>mahesh.nanubala@indiumsoft.com</td>
                </tr>
              <tr>
                <td>3</td>
                <td>Jaishree</td>
                <td>jaishree@indiumsoft.com</td>
                </tr>
              <tr>
                <td>4</td>
                <td>Jaswanth</td>
                <td>jaswanth@indiumsoft.com</td>
                </tr>
              <tr>
                <td>5</td>
                <td>Pema</td>
                <td>pema@indiumsoft.com</td>
                </tr>
              <tr>
                <td>6</td>
                <td>Yuvaraj</td>
                <td>Yuvaraj@indiumsoft.com</td>
                </tr>
              <tr>
                <td>7</td>
                <td>Ravi</td>
                <td>ravi@indiumsoft.com</td>
                </tr>
              <tr>
                <td>8</td>
                <td>Madhavi</td>
                <td>madhavi@indiumsoft.com</td>
                </tr>
              <tr>
                <td>9</td>
                <td>Naveen</td>
                <td>naveen@indiumsoft.com</td>

              </tr>
              <tr>
                <td>10</td>
                <td>Vinay</td>
                <td>vinay@indiumsoft.com</td>

              </tr>

            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
};
render(<BookingDetails />);
export default BookingDetails