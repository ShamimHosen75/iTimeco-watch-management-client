import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const NavBar = () => {
    const { user, logOut} = useAuth();
    
    return (
        <div className='sticky-top bg-dark'>
            <Container>
                <Navbar expand="lg">
                    <Navbar.Brand>
                        <Link className='text-decoration-none' to="/home">
                           <h3 className='text-warning'>iTimeco</h3>
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
                                    style={{ color: '#fff', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#0077BB"
                                    }}>
                                    Home
                                </NavLink>
                            </Nav.Link>
                            {user.email && <Nav.Link>
                                <NavLink
                                    to="/manageItems"
                                    style={{ color: '#fff', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#0077BB"
                                    }}>
                                    Manage Items
                                </NavLink>
                            </Nav.Link>}
                           {user.email && <Nav.Link>
                                <NavLink
                                    to="/addItems"
                                    style={{ color: '#fff', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#0077BB"
                                    }}>
                                    Add Items
                                </NavLink>
                            </Nav.Link>}
                            {user.email && <Nav.Link>
                                <NavLink
                                    to="/myItems"
                                    style={{ color: '#fff', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#0077BB"
                                    }}>
                                    My Items
                                </NavLink>
                            </Nav.Link>}
                            <Nav.Link>
                                <NavLink
                                    to="/blog"
                                    style={{ color: '#fff', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#0077BB"
                                    }}>
                                    Blog
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to="/contact"
                                    style={{ color: '#fff', textDecoration: "none" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#0077BB"
                                    }}>
                                    Contact
                                </NavLink>
                            </Nav.Link>
                        </Nav>
                        <Nav
                            className="ms-auto my-2 my-lg-0 d-flex align-items-center"
                            navbarScroll
                        >
                            {user.email ? <span className="me-2">{user.displayName ? user.displayName : user.email}</span> : <Button
                                style={{ background: 'none', outline: 'none' }}
                                className="text-black border-0">
                                <Link
                                    style={{ color: '#fff', textDecoration: "none" }}
                                    to='/logIn'>
                                    Log In
                                </Link>
                            </Button>}
                            {user.email ? <Button
                                onClick={logOut}
                                style={{ background: '#0077BB', outline: 'none', color: '#fff' }}
                                className="rounded-pill border-0">
                                LOGOUT
                            </Button> : <Button
                                style={{ background: '#FFC107', outline: 'none' }}
                                className="rounded-pill border-0">
                                <Link
                                    style={{ color: '#000000', textDecoration: "none" }}
                                    to='/register'>
                                    Register
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