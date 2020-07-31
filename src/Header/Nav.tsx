import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

export default function NavHeader() {
  return (
    <>
      <Navbar fixed="top" expand="lg" style={{ backgroundColor: "#280c83" }}>
        <Navbar.Brand className={"nav-white"} href="#home">
          Wonder Bank
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Business Loans" id="basic-nav-dropdown">
              <NavDropdown.Item href="/business-loans">
                Small Business Loans
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/line-of-credit">
                Line of Credit
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/equipment-finance">
                Equipment Finance
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/how-we-roll">How We Roll</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contacts">Contact</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
