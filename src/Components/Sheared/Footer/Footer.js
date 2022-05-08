import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='text-dark bg-white pt-4'>
            <Container>
                <Row className="py-4">
                    <Col md={4}>
                        <h4>About us</h4>
                        <div
                            style={{marginBottom:'16px', height:'3px',width:'120px',background:'#0077BB'}}
                        >
                        </div>
                        <span
                            className="border-bottom border-1 border-light w-75 mt-2 d-block pb-2">Sitemap
                        </span>
                        <span
                            className="border-bottom border-1 border-light w-75 mt-2 d-block pb-2">Privacy Policy
                        </span>
                        <span
                            className="border-bottom border-1 border-light w-75 mt-2 d-block pb-2">Your Account
                        </span>
                        <span
                            className="border-bottom border-1 border-light w-75 mt-2 d-block pb-2">Advanced Search
                        </span>
                        <span
                            className="w-75 mt-2 d-block pb-2">Contact Us
                        </span>
                    </Col>
                    <Col md={4}>
                        <h4>Customer Service</h4>
                        <div
                            style={{marginBottom:'16px', height:'3px',width:'120px',background:'#0077BB'}}
                        >
                        </div>
                        <span
                            className="border-bottom border-1 border-light w-75 mt-2 d-block pb-2">Shipping Policy
                        </span>
                        <span
                            className="border-bottom border-1 border-light w-75 mt-2 d-block pb-2">Compensation First
                        </span>
                        <span
                            className="border-bottom border-1 border-light w-75 mt-2 d-block pb-2">My Account
                        </span>
                        <span
                            className="w-75 mt-2 d-block pb-2">Return Policy
                        </span>
                    </Col>
                    <Col md={4}>
                        <h4>Contact Us</h4>
                        <div
                            style={{marginBottom:'16px', height:'3px',width:'120px',background:'#0077BB'}}
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
                            +880 1786 4737 96
                        </span>
                        <span
                            className="d-flex gap-2 mt-4 align-items-center">
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            developer.shamim96@gmail.com
                        </span>
                    </Col>
                </Row>
            </Container>
            <div className='bg-black text-white text-center py-4'>
                <span>Copyright © 2022 | <span style={{color:'#FFC107'}}>iTimeco</span> | All Rights Reserved</span>
            </div>
        </div>
    );
};

export default Footer;