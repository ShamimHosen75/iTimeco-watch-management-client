import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    return (
        <Col md={4} sm={6}>
            <Card className='places-img'>
                <Card.Img
                    variant="top"
                    style={{ maxHeight: '450px' }}
                    src={product.img} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.desc.slice(0, 100)}...
                    </Card.Text>
                    <div>
                        <h6>Supplier :{product.supplier}</h6>
                        <h6>Quantity : {product.quantity}</h6>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h4>${product.price}</h4>
                        <Link
                            to={`/inventory/${product._id}`}
                            className="text-decoration-none btn btn-outline-dark d-flex align-items-center">
                            Update
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;