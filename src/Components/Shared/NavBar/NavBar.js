import { Button } from 'bootstrap';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png';

const NavBar = () => {
    const {user, logOut} = useAuth();
    return (
        <div className='sticky-top bg-white'>
            <Container>
                <Navbar expand="lg">
                    <Navbar.Brand>
                        <Link to="/home">
                            <img src={logo} alt="" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <Nav.Link>
                                <NavLink
                                    to="/home"
                                    style={{ color: '#000', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#12C1AD"
                                    }}>
                                    Home
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to="/about"
                                    style={{ color: '#000', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#12C1AD"
                                    }}>
                                    About
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to="/allPlaces"
                                    style={{ color: '#000', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#12C1AD"
                                    }}>
                                    All Places
                                </NavLink>
                            </Nav.Link>
                            {user.email && <Nav.Link>
                                <NavLink
                                    to="/myBooklist"
                                    style={{ color: '#000', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#12C1AD"
                                    }}>
                                    My Booklist
                                </NavLink>
                            </Nav.Link>}
                            {user.email && <Nav.Link>
                                <NavLink
                                    to="/MangeBooklist"
                                    style={{ color: '#000', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#12C1AD"
                                    }}>
                                    Mange Booklist
                                </NavLink>
                            </Nav.Link>}
                            {user.email && <Nav.Link>
                                <NavLink
                                    to="/addPlace"
                                    style={{ color: '#000', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#12C1AD"
                                    }}>
                                    Add Place
                                </NavLink>
                            </Nav.Link>}
                        </Nav>
                        <Nav
                            className="ms-auto my-2 my-lg-0 d-flex align-items-center"
                            navbarScroll
                        >
                            {user.email && <span className="me-2">{user.displayName ? user.displayName : user.email}</span>}
                            {user.email ? <Button
                                onClick={logOut}
                                style={{ background: '#12C1AD', outline: 'none', color: '#fff' }}
                                className="rounded-pill border-0">
                                LOGOUT
                            </Button> : <Button
                                style={{ background: '#12C1AD', outline: 'none' }}
                                className="rounded-pill border-0">
                                <Link
                                    style={{ color: '#fff', textDecoration: "none" }}
                                    to='/logIn'>
                                    Log In
                                </Link>
                            </Button>}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavBar;