import { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import axios from 'axios';
// import useAuth from '../../../Hooks/useAuth';

const ProductDetails = () => {
    const { register, handleSubmit,reset } = useForm();
    const { id } = useParams();
    const [displayProduct, setDisplayProduct] = useState([]);
    const [delivered, setDelivered] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => {
                setDelivered(false);
                setDisplayProduct(data[0])
            })
    }, [delivered]);

    const deliveredProduct = () => {
        let target = parseInt(displayProduct.quantity);
        displayProduct.quantity = target - 1;
        fetch(`http://localhost:5000/deliveredProduct/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(displayProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setDelivered(true);
                    alert('Product delivered')
                }
            })
    };

    const onSubmit = data => {
        let target = parseInt(displayProduct.quantity);
        displayProduct.quantity = target + parseInt(data.newQuantity);
        fetch(`http://localhost:5000/deliveredProduct/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(displayProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset();
                    setDelivered(true);
                    alert('restock new items')
                }
            })
    };


    return (
        <>
            <div className="my-5">
                <Container>
                    <Row>
                        <Col md={4}>
                            <img className="img-fluid img-thumbnail" src={displayProduct?.img} alt="" />
                        </Col>
                        <Col md={8}>
                            <h2 className="text-capitalize mb-3">{displayProduct?.name}</h2>
                            <p className=" text-muted">{displayProduct?.desc}</p>
                            <h4
                                className='fs-4 mb-3'>Price:
                                <span style={{ color: '#12C1AD', marginLeft: '8px' }}>
                                    ${displayProduct?.price}
                                </span>
                            </h4>
                            <h4>Subleir Name: {displayProduct?.supplier}</h4>
                            <h4>quantity: {displayProduct?.quantity}</h4>
                            <Button
                                onClick={() => deliveredProduct()}
                                style={{ background: '#12C1AD', outline: 'none', color: '#fff' }}
                                className="rounded-pill border-0 px-4 "
                            >
                                delivered
                            </Button>
                            <form className="add-place-container md-w-100" onSubmit={handleSubmit(onSubmit)}>
                                <input type='number' placeholder="restock the items" {...register("newQuantity")} />
                                <input type="submit" />
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default ProductDetails;