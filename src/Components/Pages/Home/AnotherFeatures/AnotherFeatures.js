import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import AppleFeatures2 from '../../../../../src/images/Features2.jpg';
const AnotherFeatures = () => {
    return (
        <div style={{backgroundColor:'#fff', height: '550px', marginBottom:'20px'}}>
            <div className='container fluid mb-5'>
                    <div className='row d-flex justify-content-center align-items-center pt-5'>
                    <div className="col-md-6">
                        <img className='w-100' src={AppleFeatures2} alt="Apple Watch Features"/>
                    </div>
                        <div className="col-md-6 mb-5">
                       <h3>Your family joined at the wrist.</h3>
                       <h1><strong>One iPhone makes everyone's</strong></h1>
                       <h1><strong> Apple Watch tick.</strong></h1>
                        <p>
                        With Family Setup, everyone in the family, like your kids and older adults, can have an Apple Watch. Even those who don’t have their own iPhone yet. It’s all the connectivity, wellness, and safety features you love, for everyone you love. Fun and independence for them. Peace of mind for you.
                        </p>
                        <div className="row">
                            <div className="col-md-6 mt-3">
                              <button  className='p-2 bg-light text-primary border-0'>Learn More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                              </button>
                            </div>
                        </div>
                        </div>
                        
                    </div>
            </div>
        </div>
    );
};

export default AnotherFeatures;