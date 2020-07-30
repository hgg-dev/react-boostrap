import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavHeader from "./Header/Nav";
import Home from "./Body/Home";
import BusinessLoans from "./Body/Business-Loans";
import Contacts from "./Body/Contacts";
import { Footer } from "./Footer/Footer";
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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Container fluid style={{ margin: "0px" }}>
          <Row>
            <NavHeader />
            <Route exact path="/" render={() => <Home />} />
            <Route
              exact
              path="/business-loans"
              render={() => <BusinessLoans />}
            />
            <Route exact path="/contacts" render={() => <Contacts />} />
            <Footer />
          </Row>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
