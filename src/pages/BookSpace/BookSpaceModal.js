import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import { CustomFieldInput } from "./CustomFieldInput";
import { useNavigate } from "react-router-dom";
import "./BookSpace.scss";

const BookSpaceModal = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
    navigate(`/book-space-confirmation`);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Confirm
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>BookSpace Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CustomFieldInput label={"City"} inputs={"City input"} />
          <CustomFieldInput label={"Location"} inputs={"Location input"} />
          <CustomFieldInput label={"Building"} inputs={"Building input"} />
          <CustomFieldInput label={"Floor"} inputs={"Floor input"} />
          <CustomFieldInput label={"Dates"} inputs={"Dates input"} />
          <CustomFieldInput label={"Purpose"} inputs={"Purpose input"} />
          <CustomFieldInput
            label={"No.of work stations available"}
            inputs={"work station input"}
          />
          <CustomFieldInput
            label={"No.of work stations required"}
            inputs={"work station input"}
          />
          <CustomFieldInput label={"Booked"} inputs={"Booked input"} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

BookSpaceModal.propTypes = {};

BookSpaceModal.defaultProps = {};

export default BookSpaceModal;
