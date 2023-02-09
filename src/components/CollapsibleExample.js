import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" variant='dark' style={{ backgroundColor: "#231eb6" }} fixed="top">
            <Container>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <NavDropdown title="Projects" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Project 01</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Project 02</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Add Project
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Members" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">member 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">member 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">member 3</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Add Member
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div className='ss'>profile picture</div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;