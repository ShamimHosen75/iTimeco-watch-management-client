import React from 'react';
import Products from '../../../Sheared/Products/Products';
import Banner from '../Banner/Banner';
import Newsletter from '../Newsletter/Newsletter';
import AnotherFeatures from './../AnotherFeatures/AnotherFeatures';
import ServiceFeatures from './../ServiceFeature/ServiceFeatures';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ServiceFeatures></ServiceFeatures>
            <AnotherFeatures></AnotherFeatures>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;