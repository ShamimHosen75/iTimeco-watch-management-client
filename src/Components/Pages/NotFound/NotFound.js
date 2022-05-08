import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import oops from '../../../images/oops.jpg';

const NotFound = () => {
    return (
        <div className='my-5'>
            <div className='d-flex justify-content-center align-items-center my-2'>
                <img style={{maxHeight:'300px'}} src={oops} alt="" />
            </div>
            <div className='d-flex justify-content-center align-items-center my-2'>
                <h2>Can't Find The Page</h2>
            </div>
            <div className='d-flex justify-content-center align-items-center my-2'>
                <Button
                    style={{ background: '#0077BB', outline: 'none' }}
                    className="rounded-pill border-0 px-4 text-center">
                    <Link
                        style={{ color: '#fff', textDecoration: "none" }}
                        to='/home'>
                        Go Back To Home
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default NotFound;