import { Navbar, Nav, Button } from "react-bootstrap";
import Dates from "../UI/Date/Dates";
import "./NavBar.css";
import logo from "../../assest/embassy_edge_logo.png";

const NavBar = (props) => {
  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand>
        <img
          src={logo}
          alt="Logo"
          className="brand-image"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="active">Dashboard</Nav.Link>
          <Nav.Link>FOYR</Nav.Link>
          <Nav.Link>Site Visit</Nav.Link>
          <Nav.Link className="broucher">Brochure</Nav.Link>
          {<Dates className="dates" />}
          <Nav.Link className="register">Register</Nav.Link>
          <Button
            className="login rounded-pill border border-light"
            size="sm"
            variant="outline-light"
          >
            LOGIN
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
