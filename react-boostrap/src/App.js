import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavHeader from "./Header/Nav.tsx";
import Home from "./Body/Home.tsx";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
  Container,
  Row,
} from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <Row>
        <NavHeader />
        <Home />
      </Row>
    </Container>
  );
}

export default App;
