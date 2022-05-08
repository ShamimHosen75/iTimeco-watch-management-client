import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const {
        googleSignIn,
        getEmail,
        getPassword,
        signUpUsingEmail,
        error,
        setUser,
        setError,
        setIsLoading
    } = useAuth();
    const location = useLocation()
    const history = useNavigate()
    const redirect_url = location.state?.from || '/home';
    
    const handleEmail = (e) => {
        const email = e.target.value;
        getEmail(email);
    }

    const handlePassword = (e) => {
        const password = e.target.value;
        getPassword(password);
    }

    const handleGoogleRegister = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.massage)
            })
            .finally(() => setIsLoading(false))
    }

    const handleEmailRegister = () => {
        signUpUsingEmail()
            .then(result => {
                const user = result.user;
                setUser(user);
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.massage)
            })
            .finally(() => setIsLoading(false))
    };

    
    return (
        <div className="d-flex justify-content-center align-items-center my-5">
            <div style={{ boxShadow: "0px 0px 8px 0px #ddd" }} className=" text-center rounded-2 p-4">
                <div
                    style={{ height: '100px', width: '100px', background: '#0077BB', fontSize: "60px" }}
                    className='d-flex justify-content-center align-items-center rounded-circle mx-auto'>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </div>
                <h4 className="my-3">Please Register</h4>
                <div>
                    <div class="form-floating mb-3">
                        <input onChange={handleEmail} style={{ width: '260px' }} type="email" class="form-control py-2 rounded-pill" id="floatingInput" placeholder="Your Email" />
                        <label for="floatingInput">Email Address</label>
                    </div>
                    <div class="form-floating">
                        <input onChange={handlePassword} style={{ width: '260px' }} type="password" class="form-control py-2 rounded-pill" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                </div>
                <div>
                    <button
                        onClick={handleEmailRegister}
                        style={{ background: '#0077BB', outline: 'none', width: '260px' }}
                        className="btn mt-3 px-3 rounded-pill border-0 text-white">
                        Register 
                    </button>
                </div>
                <span className="text-danger my-2">{error}</span><br />
                <span className="mt-1">All Ready have an Account? <Link to='/login'>Login</Link></span>
                <h6 className="my-2">---Or---</h6>
                <button
                    onClick={handleGoogleRegister}
                    style={{ background: '#0077BB', outline: 'none', width: '260px' }}
                    className="btn px-2 rounded-pill border-0 text-white">
                    Register With Google 
                </button>
            </div>
        </div>
    );
};

export default Register;