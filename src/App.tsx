import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Body/Body.css";
import "./Header/Nav.css";
import "./Footer/Footer.css";
import NavHeader from "./Header/Nav";
import Home from "./Body/Home";
import BusinessLoans from "./Body/Business-Loans";
import LineOfCredit from "./Body/Line-Of-Credit";
import EquipmentFinance from "./Body/Equipment-Finance";
import Contacts from "./Body/Contacts";
import About from "./Body/About";
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
import HowWeRoll from "./Body/HowWeRoll";

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
            <Route
              exact
              path="/line-of-credit"
              render={() => <LineOfCredit />}
            />
            <Route
              exact
              path="/equipment-finance"
              render={() => <EquipmentFinance />}
            />
            <Route exact path="/how-we-roll" render={() => <HowWeRoll />} />
            <Route exact path="/contacts" render={() => <Contacts />} />
            <Route exact path="/about" render={() => <About />} />
            <Footer />
          </Row>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
