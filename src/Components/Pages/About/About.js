import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
             <div>
            <div
                style={{ background: '#12C1AD' }}
                className="fw-bold py-4  text-white">
                <Container>
                    <h2>About Us</h2>
                </Container>
            </div>
            <Container>
                <Row className="my-5">
                    <Col md={5}>
                        <div className="mb-5">
                            <img className="img-fluid w-100 rounded-3" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fSbcmJsnKRQ2Tho1kufe83HIVQdgd3zo8g&usqp=CAU' alt="" />
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="mb-5">
                            <h2 className="mb-2">ABOUT US</h2>
                            <p className="">Bangladesh is a land of beauty. It is a small country but full of tourist sports. Every year a lot of tourists from home and abroad come to visit these sports. There are many tourist spots in Bangladesh. All the tourist spots are very beautiful and wonderful. The most popular tourist spot is Cox’s Bazar. There is the longest sea beach of the world in Cox’s Bazar. One can see the charming sun setting from this sea beach. Another tourist spot is Sreemangal in Bangladesh. It is very famous for the beauty of the tea gardens. Going there one can enjoy that heart rending beauty. There is also another beautiful tourist spot in Bangladesh naming Madhobkundo. t is very famous for its beautiful waterfalls. Another most wonderful tourist spot in Bangladesh is the Saint Martin’s. This is the only coral island in Bangladesh. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;