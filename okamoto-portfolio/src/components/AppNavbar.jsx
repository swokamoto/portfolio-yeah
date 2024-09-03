import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './AppNavbar.module.css';

export default function AppNavbar() {
const currentPage = useLocation().pathname;

    return (
        <header>
            
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container >
                    <Navbar.Brand>Scott Okamoto</Navbar.Brand>
                    
                    <Nav className='nav-item'>
                        <Nav.Link
                            as={Link}
                            to="/"
                            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                        >    
                            Home
                        </Nav.Link>
                    </Nav>

                    <Nav className='nav-item'>
                        <Nav.Link
                            as={Link}
                            to="/about"
                            className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}
                        >
                            About
                        </Nav.Link>
                    </Nav>

                    <Nav className='nav-item'>
                        <Nav.Link
                            as={Link}
                            to="/projects"
                            className={currentPage === '/projects' ? 'nav-link active' : 'nav-link'}
                        >
                            Projects
                        </Nav.Link>
                    </Nav>

                    <Nav className='nav-item'>
                        <Nav.Link
                            as={Link}
                            to="/contact"
                            className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>

                    <Nav className='nav-item'>
                        <Nav.Link
                            as={Link}
                            to="/resume"
                            className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </header>
    )
}