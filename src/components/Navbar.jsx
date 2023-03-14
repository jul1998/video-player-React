import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Sidebar from './OffCanvasComp';
const NavbaComp = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Sidebar />
      <Container>
      
        <Navbar.Brand href="#home">Video Player</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Form className="d-flex mx-auto">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbaComp;
