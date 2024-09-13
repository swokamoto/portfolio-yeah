import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './AppNavbar.module.css';

export default function AppNavbar() {
const currentPage = useLocation().pathname;

    return (
        <header>
            
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky="top">
                <Container >
                    <Navbar.Brand>Scott Okamoto</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className='me-auto'>
                        <Nav.Link
                            as={Link}
                            to="/"
                            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                        >
                            About
                        </Nav.Link>
                    
                        <Nav.Link
                            as={Link}
                            to="/projects"
                            className={currentPage === '/projects' ? 'nav-link active' : 'nav-link'}
                        >
                            Projects
                        </Nav.Link>
                    
                        <Nav.Link
                            as={Link}
                            to="/contact"
                            className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </Nav.Link>
                    
                        <Nav.Link
                            as={Link}
                            to="/resume"
                            className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                        </Nav.Link>
                    </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}