import React from 'react'
import Modal from 'react-bootstrap/Modal';
import "./contactFormModal.css";

export default function ContactFormModal({ show, setShow}) {


    return (       
         <>
            <Modal show={show} onHide={() =>setShow(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Success!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Thanks for reaching out! I'll get back to you as soon as I can </p>
                </Modal.Body>
            </Modal>
        </>
    );
}