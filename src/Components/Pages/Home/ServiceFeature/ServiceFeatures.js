import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import AppleFeatures from '../../../../images/features.png';
const ServiceFeatures = () => {
    return (
        <div style={{backgroundColor:'#fff', height: '550px', margin:'20px'}}>
            <h1 className='text-center mt-5'> <strong>Which Apple Watch is right for you?</strong></h1>
            <div className='container fluid'>
                    <div className='row d-flex justify-content-center align-items-center pt-5'>
                        <div className="col-md-5 mb-5">
                       <h3>Family Setup?</h3>
                       <h1><strong>Heavy on features.</strong></h1>
                        <h1><strong>Light on price.</strong></h1>
                        <h4><strong>From $279</strong></h4>
                        <p>
                        Checking your blood oxygen is a very reasonable addition to the company’s suite of health features.Powerful features to help keep you connected, active, healthy, and safe. Advanced sensors to track all the ways you move and to measure your favorite workouts. And available cellular so you can go without your phone.
                        </p>
                        <div className="row">
                            <div className="col-md-12 mt-3">
                            <button className='p-2 bg-light text-primary border-0' >Learn More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-7">
                        <img className='w-100' src={AppleFeatures} alt="Apple Watch Features"/>
                    </div>
                    </div>
            </div>
            
        </div>
    );
};

export default ServiceFeatures;