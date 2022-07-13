import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CustomFieldInput } from "./CustomFieldInput";
import "./BookSpace.scss";

const BookSpaceModal = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
    navigate(`/book-space-confirmation`);
  };
  const handleCancel = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Confirm
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        className="bookspace-confirmation-section"
      >
        <Modal.Header className="border-0 pb-0">
          <Modal.Title>
            <b>CONFIRMATION</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="justify-content-center">
          {/* <p className="mb-0">
            <b>20 workstations</b> have been booked at <b>Ganesh Chambers</b>,
            Building 2, Floor 3
            <b> Chennai from 11th July, 2022 to 15th July, 2022 </b>
          </p>
          <p className="mb-0">For Yuvaraj, Jashwanth, Mahesh, Karthick.</p> */}

          <CustomFieldInput label={"No of workspace booked"} inputs={"20"} />
          <CustomFieldInput
            label={"Location"}
            inputs={"Chennai - Ganesh Chambers"}
          />
          <CustomFieldInput
            label={"Booked Dates"}
            inputs={"16/08/2022 - 18/08/2022"}
          />
        </Modal.Body>
        <Modal.Footer className="justify-content-center border-0">
          <Button
            className="bookspace-cancel-btn bookspace-btn bg-transparent border-secondary me-4"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            className="bookspace-confirm-btn bookspace-btn"
            onClick={handleClose}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

BookSpaceModal.propTypes = {};

BookSpaceModal.defaultProps = {};

export default BookSpaceModal;
