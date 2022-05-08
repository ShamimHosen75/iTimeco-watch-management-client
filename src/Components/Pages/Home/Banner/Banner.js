import React from 'react';
import { Carousel } from 'react-bootstrap';
import Watch from '../../../../images/banner1.jpg';
import Watch2 from '../../../../images/banner2.jpg';
import Watch3 from '../../../../images/banner3.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <div width={800} height={450} alt="750x420">
            <Carousel className='bg-dark'>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Watch}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3 className='text-warning'>Apple Watch {`&`} Series 6</h3>
            <p>Featuring a Blood Oxygen sensor and app, new case finishes, and watchOS 7</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Watch2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3 className='text-warning'>Design and Performance</h3>
            <p>The Blood Oxygen sensor employs LEDs, <br/> along with photo diodes on the back crystal of Apple Watch Series 6.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Watch3}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3 className='text-warning'>Blood Oxygen Sensor and App</h3>
            <p>Apple Watch Series 6 offers its most colorful collection yet.</p>
            </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
            <img
            className="d-block w-100"
            src={Apple4}
            alt="Fourth slide"
            />

            <Carousel.Caption>
            <h3 className='text-success'>Repair Your Devices</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Apple5}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3 className='text-dark'>Repair Your Body Part</h3>
            <p>Send your device in for repair and have the repair at Apple Doctor fix it</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Apple6}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Repair Laptop</h3>
            <p>Send your device in for repair and have the repair at Apple Doctor fix it</p>
            </Carousel.Caption>
        </Carousel.Item> */}
        </Carousel>
        </div>
        
    );
};

export default Banner;