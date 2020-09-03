import React from "react";
import { Jumbotron, Container, Row } from "react-bootstrap";
import ApplyForm from "./Apply-Form";

export default function HowWeRoll() {
  return (
    <>
      {" "}
      <Container fluid>
        <Row>
          <div className={"banner"}>
            <div className={"banner_tag"}>
              <h2>How We Roll</h2>
            </div>
            <img
              className={"banner_image"}
              src="./images/banner-roll.jpg"
              alt="Third slide"
            />
          </div>
        </Row>
        <Row>
          <div className={"text_container_light"}>
            <div className={"text_child_container"}>
              <h3>
                We're dedicated to providing Aussie businesses with the funding
                they need and the service they deserve
              </h3>

              <p>
                At Wonder Bank, we're bringing back the craft of relationship
                banking to deliver banking as it used to be, banking as it
                should be. So, what does that mean? It means as a Wonder Bank
                customer you get your own dedicated business banker - no
                middle-men, no red tape. A specialist directly empowered to make
                judgement calls that positively impact your business.
              </p>
            </div>
          </div>
        </Row>
        <Row>
          <div className={"hwr-explain-container"}>
            <h1 className={"hwr-title"}>Why Wonder Bank?</h1>
            <div className={"hwr-small-container"}>
              <div className={"how-it-works-box"}>
                <i className={"fas fa-award hit"}></i>
                <h4>Challenger</h4>
                <p>
                  Determined to help SMEs get a fairer go when it comes to
                  banking
                </p>
              </div>
              <div className={"how-it-works-box"}>
                <i className={"fas fa-handshake hit"}></i>
                <h4>Relationship Banking</h4>
                <p>Banking as it used to be…banking as it should be.</p>
              </div>
              <div className={"how-it-works-box hit"}>
                <i className={"fas fa-thumbs-up hit"}></i>
                <h3>Built to say yes</h3>
                <p>
                  Purpose-built to make it easier for SMEs to get the funding
                  they need when they need it.
                </p>
              </div>
            </div>
          </div>
        </Row>

        <ApplyForm />
      </Container>
    </>
  );
}
