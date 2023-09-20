import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './com.style1.css';
import Logo from '../assets/image/logo.png'
import { NavLink, Link } from 'react-router-dom';
import { useSession } from '../Context/SessionContext';
import LogoutButton from './Logout';
const NavbarComponent = () => {
    
    const { sessionId } = useSession();
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/" className='ml-5 pl-5  w-15'> <span className='spanlogo'><img src={Logo} alt="CareConnect logo" /></span> CareConnect</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Nav
                        className="ms-auto w-50 nav-link-wrappwer"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={NavLink} to="/" className="linknav"> Home </Nav.Link>
                        <Nav.Link as={NavLink} to="news" className=' linknav'>New's</Nav.Link>
                    </Nav>

                    <Form className="d-flex justify-content-between align-items-center  mx-auto">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 "
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>



                    <div>
                        {sessionId ? (
                            <LogoutButton />
                            // onClick={handleLogout} 
                        ) : (
                            <Nav.Link as={NavLink} to="login" className='linknav'>Sign in</Nav.Link>
                        )}

                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
