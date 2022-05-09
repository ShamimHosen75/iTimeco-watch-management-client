import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <div
                style={{ background: '#12C1AD' }}
                className="fw-bold py-4  text-white">
                <Container>
                    <h2>Contact With Us</h2>
                </Container>
            </div>
            <Container className="my-5">
                <Row className="g-5">
                    <Col md={8}>
                        <div>
                            <div>
                                <h2>Tell Us Your Problem</h2>
                            </div>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Your Email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Form>
                            <Button
                                style={{ background: '#12C1AD', outline: 'none' }}
                                className=" bg-dark rounded-pill border-0 px-4 ">
                                <Link
                                    style={{ color: '#FFC107', textDecoration: "none" }}
                                    to='/welldone'>
                                    Send Message
                                </Link>
                            </Button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h4>The Office</h4>
                        <div
                            style={{ marginBottom: '16px', height: '3px', width: '120px', background: '#12C1AD' }}
                        >
                        </div>
                        <span
                            className="d-flex gap-2 mt-4 align-items-center">
                            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                            Habiganj, Sylhet.
                        </span>
                        <span
                            className="d-flex gap-2 mt-4 align-items-center">
                            <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
                            +880 1833923107
                        </span>
                        <span
                            className="d-flex gap-2 mt-4 align-items-center">
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            dev.romansheikh@gmail.com
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;