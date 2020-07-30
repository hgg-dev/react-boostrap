import React from "react";
import { Jumbotron, Container, Row } from "react-bootstrap";

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
              src="./images/banner1.jpg"
              alt="Third slide"
            />
          </div>
        </Row>
        <Row>
          <div className={"text_container_light"}>
            <div className={"text_child_container"}>
              <h3>Contact Us</h3>
              <ul>
                <li>Choice of Variable or Fixed interest rate.</li>
                <li>Fixed Rate available for added certainty.</li>
                <li>Flexible repayment options.</li>
                <li>Principal and interest, or interest-only repayments.</li>
              </ul>
              <p></p>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}
