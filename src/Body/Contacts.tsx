import React from "react";
import { Jumbotron, Container, Row, Form, Button } from "react-bootstrap";
import ContactForm from "./Contact-Form";

export default function Contacts() {
  return (
    <>
      <Container fluid>
        <Row>
          <div className={"banner"}>
            <div className={"banner_tag"}>
              <h2>Contacts</h2>
            </div>
            <img
              className={"banner_image"}
              src="./images/banner-contact.jpeg"
              alt="business owner"
            />
          </div>
        </Row>
        <Row>
          <div className={"text_container_light"}>
            <div className={"text_child_container"}>
              <h3>Contact Us</h3>
              <ul>
                <p>Phone: 1300 000 111</p>
                <p>Email: info@wonderbank.com.au</p>
                <p>Head Office: 90 Grand Pde, Sydney NSW 2000</p>
                <p>Postal: GPO 9922, Sydney 2000</p>
              </ul>
            </div>
          </div>
        </Row>
        <ContactForm />
      </Container>
    </>
  );
}
