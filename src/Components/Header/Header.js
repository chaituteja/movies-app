import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Person } from "react-bootstrap-icons";
import "./Header.css";

const Header = (props) => {
  function handleSearchChange(event) {
    props.onChange(event.target.value);
  }

  function preventDefault(event) {
    event.preventDefault();
  }

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Martin Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <NavDropdown title="Home" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Home Version 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Home Version 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Home Version 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Coming soon</NavDropdown.Item>
              <NavDropdown.Item href="#">404 Page</NavDropdown.Item>
              <NavDropdown.Item href="#">Pricing Plan</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Movies & TV Shows" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Movie 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Movie 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Movie 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Blog List</NavDropdown.Item>
              <NavDropdown.Item href="#">Post with Youtube</NavDropdown.Item>
              <NavDropdown.Item href="#">Post with Audio</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Contact Us</Nav.Link>
          </Nav>
          <Form onSubmit={preventDefault} inline>
            <FormControl
              type="text"
              placeholder="Search"
              onChange={handleSearchChange}
              onClick={preventDefault}
              onSubmit={preventDefault}
              value={props.value}
              className="mr-sm-2"
            />
          </Form>
          <Button variant="login" size="lg">
            <Person className="login-icon align-middle" />
            Login
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
