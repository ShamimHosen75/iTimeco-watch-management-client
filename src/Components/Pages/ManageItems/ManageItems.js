import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // get all items item data
    useEffect(() => {
        fetch('https://enigmatic-savannah-54985.herokuapp.com/getProduct')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoading(false)
            })
    }, [items, loading]);

    // delete item from items
    const handleDelete = id => {
        fetch(`https://enigmatic-savannah-54985.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount) {
                    const rest = items.filter(item => item._id !== id);
                    setItems(rest);
                }
            })
    };

    if (loading) {
        return <div>
            <h2 className="text-center my-5">
                <Spinner className='me-2' animation="grow" />Loading...
            </h2>
        </div>
    }
    else {
        if (items.length === 0) {
            return <div className="d-flex justify-content-center align-items-center my-4">
                <h2>Nothing Find Hare 😭</h2>
            </div>
        }
        else {
            return (
                <div>
                    <Container>
                        <div className="d-flex align-items-center justify-content-between my-4">
                            <h2 className=''>Manage All items</h2>
                            <Link to="/addItems">
                                <Button
                                    style={{ background: '#12C1AD', outline: 'none', color: '#FFC107' }}
                                    className="bg-dark rounded-pill border-0 px-4 "
                                >
                                    Add Items
                                </Button>
                            </Link>
                        </div>
                        
                        <Row>
                            <Col>
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Item Name</th>
                                            <th className='text-center' scope="col">User</th>
                                            <th className='text-center' scope="col">Supplier</th>
                                            <th className='text-center' scope="col">Quantity</th>
                                            <th className='text-end' scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            items.map(item => {
                                                return <tr>
                                                    <td>{item.name}</td>
                                                    <td className='text-center'>{item?.user}</td>
                                                    <td className='text-center'>{item.supplier}</td>
                                                    {item.quantity > 0 ? <td className='text-center'>{item.quantity}</td> : <td className="text-warning text-center">Sold</td>}
                                                    <td className="d-flex justify-content-end align-items-center">
                                                        <button
                                                            onClick={() => handleDelete(item._id)}
                                                            className='btn btn-danger me-2'
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }
    }
};

export default ManageItems;