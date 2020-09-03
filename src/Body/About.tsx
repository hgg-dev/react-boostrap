import React from "react";
import { Jumbotron, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <>
      <Container fluid>
        <Row>
          <div className={"banner"}>
            <div className={"banner_tag"}>
              <h2>About Wonderbank</h2>
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
                Aussie businesses are the backbone of the Australian economy,
                but many SMEs don’t have access to the funding they need and the
                service they deserve. Until now.
              </h3>

              <p>
                Judo Bank commissioned The SME Banking Insights Report in 2018.
                This is an independent survey that talked to 1,750 SME’s on
                their experience when it comes to borrowing money, which found
                there was an $90 billion funding gap. The Judo Bank team, with
                experience at the highest levels of some of the world’s largest
                banks, saw an opportunity to give Aussie businesses a fairer go.
              </p>
            </div>
          </div>
        </Row>
        <Container fluid>
          <Row style={{ marginLeft: "-25px", marginRight: "-25px" }}>
            <div className={"image-container"}>
              <img
                className={"banner_image2"}
                src="./images/business-owner1.png"
                alt=""
              />
            </div>
          </Row>
        </Container>
        <Row>
          <h1 style={{ width: "100%", textAlign: "center" }}>
            Why Wonder Bank?
          </h1>
          <div style={{ margin: "auto", display: "flex" }}>
            <div className={"how-it-works-box"}>
              <i className={"fas fa-award hit"}></i>
              <h4>Challenger</h4>
              <p>
                Determined to help SMEs get a fairer go when it comes to banking
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
                Purpose-built to make it easier for SMEs to get the funding they
                need when they need it.
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}
