import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from '../Product/Product';
const Products = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log(products);


    useEffect( () => {
        fetch('http://localhost:5000/getProduct')
                .then (res => res.json())
                .then (data => {
                    setProducts(data)
                    setIsLoading(false)
                })
    }, []);

    if(isLoading){
        return <div className="d-flex justify-content-center align-items-center my-4">
            <h2>
            <Spinner className='me-2' animation="grow" />Loading...
            </h2>
        </div>
    } else {
        return (
            <div className="my-5">
                <Container>
                    <Row>
                        <h2 className="mt-4 p-0 text-capitalize">Our Smart Watch</h2>
                        <div
                            style={{ marginBottom: '16px', height: '3px', width: '220px', background: '#0077BB' }}
                        >
                        </div>
                    </Row>
                    <Row className="g-4">
                        {
                            products.map((product, index) => {
                                console.log(product, index);
                                if (index < 6) {
                                    return <Product
                                        key={product._id}
                                        product={product}>
                                    </Product>
                                }
                            })
                        }
                    </Row>
                </Container>
            </div>
    );
  }
};

export default Products;






// import React, { useEffect, useState } from 'react';
// import { Container, Row, Spinner } from 'react-bootstrap';
// import Service from './../Products/Products';

// const Products = () => {
//     const [places, setPlaces] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     // get all places data
//     useEffect(() => {
//         fetch('https://sheltered-depths-95295.herokuapp.com/places')
//             .then(res => res.json())
//             .then(data => {
//                 setPlaces(data)
//                 setIsLoading(false)
//             })
//     }, []);
    
//     if(isLoading){
//         return <div className="d-flex justify-content-center align-items-center my-4">
//             <h2>
//             <Spinner className='me-2' animation="grow" />Loading...
//             </h2>
//         </div>
//     } else {
//         return (
//             <div className="my-5">
//                 <Container>
//                     <Row>
//                         <h2 className="mt-4 p-0 text-capitalize">most beautiful places</h2>
//                         <div
//                             style={{ marginBottom: '16px', height: '3px', width: '220px', background: '#12C1AD' }}
//                         >
//                         </div>
//                     </Row>
//                     <Row className="g-4">
//                         {
//                             places.map((service, index) => {
//                                 if (index < 6) {
//                                     return <Service
//                                         key={service._id}
//                                         service={service}>
//                                     </Service>
//                                 }
//                             })
//                         }
//                     </Row>
//                 </Container>
//             </div>
//         );
//     }
    
// };

// export default Products;