import "./Navbar.css";
import { Nav, Navbar } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
      <Navbar className="navbar" bg="myDark" variant="dark" expand="sm">
        <Navbar.Brand className="brand" href="/">
          <img
            className="logoimg"
            src="./saw50.png"
            width="35px"
            height="35px"
          />
          Maple Woodworks
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="youtube">YouTube</Nav.Link>
            <Nav.Link href="products">Products</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar;
