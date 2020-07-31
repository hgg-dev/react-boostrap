import React from "react";
import { Jumbotron, Container, Row, Form, Button } from "react-bootstrap";

export default function ApplyForm() {
  return (
    <>
      <Row>
        <div className={"text_container_light"}>
          <div className={"text_child_container"}>
            <h3>Start Your Application Today</h3>
            <p>
              Why wait? Find out whether you are eligible in a few easy steps.
            </p>

            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="Full Name" />
                <br />
                <Form.Control type="text" placeholder="Mobile Number" />
                <br />
                <Form.Control type="text" placeholder="Email" />
                <br />
                <Form.Control type="text" placeholder="Loan Amount" />
                <br />
                <Form.Control as="select">
                  <option>Business not started</option>
                  <option>Business trading within 1 year</option>
                  <option>Business trading 1 to 3 year</option>
                  <option>Business trading 3 year+</option>
                </Form.Control>
                <br />
                <Form.Control as="select">
                  <option>Term 1 year</option>
                  <option>Term 2 years</option>
                  <option>Term 3 years+</option>
                </Form.Control>
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
