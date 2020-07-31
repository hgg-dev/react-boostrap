import React from "react";
import { Jumbotron, Container, Row, Form, Button } from "react-bootstrap";

export default function ContactForm() {
  return (
    <>
      <Row>
        <div className={"text_container_light"}>
          <div className={"text_child_container"}>
            <h3>Contact Form</h3>
            <p>
              Let’s make your plans happen. Leave your details and we’ll call
              you back.
            </p>

            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="Full Name" />
                <br />
                <Form.Control type="text" placeholder="Mobile Number" />
                <br />
                <Form.Control type="text" placeholder="Email" />
                <br />
                <Form.Control type="text" placeholder="Comments" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Row>
    </>
  );
}
