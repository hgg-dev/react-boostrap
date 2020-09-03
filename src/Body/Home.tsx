import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
  Carousel,
  Jumbotron,
  Container,
  Row,
} from "react-bootstrap";

export default function Home() {
  var visited = localStorage.getItem("visited");
  if (visited) {
  } else {
    localStorage.setItem("visited", new Date().toString());
  }

  return (
    <>
      <Container fluid>
        <Row>
          <div className={"home_banner_container"}>
            <div className={"home_banner_tag"}>
              <h2>
                {visited
                  ? "Welcome back, let us assist you."
                  : "Let us be your lighthouse"}
              </h2>
            </div>
            <div className={"home_banner_bottom1"}>
              <Button href="/business-Loans" style={{ width: "150px" }}>
                Business Loans
              </Button>
            </div>
            <div className={"home_banner_bottom2"}>
              <Button href="/contacts" style={{ width: "150px" }}>
                Contact Us
              </Button>
            </div>
            <img
              className={"home_banner_image"}
              src="./images/banner-lighthouse-sm.png"
              alt="Third slide"
            />
          </div>
        </Row>
      </Container>

      <Container fluid className={"container_border_primary"}>
        <Row>
          <div className={"box-grid"}>
            <div className={"child-grid"}>
              <div className={""}>
                <i className={"fas fa-home icon-large"}></i>
              </div>
              <div>
                <p>
                  Need funding that's flexible and repayable over time? Our
                  Wonder Bank business loan provides options to support growth
                  or investment in your business.
                </p>
              </div>
            </div>
            <div className={"child-grid"}>
              <div className={""}>
                <i className={"fas fa-car icon-large"}></i>
              </div>
              <div>
                <p>
                  Need funding that's flexible and repayable over time? Our
                  Wonder Bank business loan provides options to support growth
                  or investment in your business.
                </p>
              </div>
            </div>
            <div className={"child-grid"}>
              <div className={""}>
                <i className={"fas fa-building icon-large"}></i>
              </div>
              <div>
                <p>
                  Need funding that's flexible and repayable over time? Our
                  Wonder Bank business loan provides options to support growth
                  or investment in your business.
                </p>
              </div>
            </div>
          </div>
        </Row>
      </Container>

      <Container fluid className={"container_border_grey"}>
        <Row>
          <Container className={"box_standard"}>
            <div>
              <h3>
                At Wonder Bank we’re determined to give Aussie businesses a
                fairer go. We believe that in business, relationships matter;
                it’s why our business bankers take the time to truly understand
                you and your business, face-to-face.
              </h3>
            </div>
          </Container>
        </Row>
      </Container>

      <Container fluid className={"container_border_primary"}>
        <Row>
          <div className={"box-grid"}>
            <div className={"child-grid"}>
              <div className={"box-icon"}>
                <p className={"stats_big"}>$1 Billion</p>
              </div>
              <div>
                <p style={{ textAlign: "center" }}>
                  Largest capital raise in Australian history
                </p>
              </div>
            </div>
            <div className={"child-grid"}>
              <div className={"box-icon"}>
                <p className={"stats_big"}>$2 Billion</p>
              </div>
              <div>
                <p style={{ textAlign: "center" }}>
                  Loans to small & medium-sized businesses
                </p>
              </div>
            </div>
            <div className={"child-grid"}>
              <div className={"box-icon"}>
                <p className={"stats_big"}>$10 Billion</p>
              </div>
              <div>
                <p style={{ textAlign: "center" }}>Waiting to be lent.</p>
              </div>
            </div>
          </div>
        </Row>
      </Container>

      <Container className={"container_border_grey_round"}>
        <Row>
          <Container className={"box_standard"}>
            <div style={{ padding: "20px" }}>
              <h3>
                At Wonder Bank we’re determined to give Aussie businesses a
                fairer go. We believe that in business, relationships matter;
                it’s why our business bankers take the time to truly understand
                you and your business, face-to-face.
              </h3>
            </div>
          </Container>
        </Row>
      </Container>
    </>
  );
}
