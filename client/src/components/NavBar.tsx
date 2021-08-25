import React, {useContext} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {BookContext} from '../context/bookContext';
import {Link} from 'react-router-dom';

const NavBar = () => {
    const {setBookMode} = useContext(BookContext)
    return (
        <Navbar bg="light" expand="lg">
            <div className="navbar-wrapper container">
                <Link to="/" className='text-decoration-none fw-bold mr-2 text-black fs-5'>Books App</Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/">About</Nav.Link>
                        <Link
                            to='/manage'
                            className='bg-success text-white border-radius-0 add-book d-flex justify-content-center align-items-center text-decoration-none px-2'
                            onClick={() => setBookMode && setBookMode(false) }
                        >Add book</Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NavBar;