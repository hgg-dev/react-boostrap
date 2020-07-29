import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

export default function BusinessLoans() {
  return (
    <>
      {" "}
      <Container>
        <Jumbotron fluid>
          <Container>
            <h1>Business finance</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>
      </Container>
    </>
  );
}
