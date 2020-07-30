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
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 home_banner"
            src="https://assets.entrepreneur.com/content/3x2/2000/20190506145520-GettyImages-1091916996.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home_banner"
            src="https://assets.entrepreneur.com/content/3x2/2000/20190506145520-GettyImages-1091916996.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home_banner"
            src="https://assets.entrepreneur.com/content/3x2/2000/20190506145520-GettyImages-1091916996.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container fluid className={"container_border_primary"}>
        <Row>
          <Container className={"box_standard"}>
            <div className={"box-child"}>
              <div className={"box-icon"}>
                <i className={"fas fa-home icon-large"}></i>
              </div>
              <div>
                <p>
                  Need funding that's flexible and repayable over time? Our Judo
                  Bank business loan provides options to support growth or
                  investment in your business.
                </p>
              </div>
            </div>
            <div className={"box-child"}>
              <div className={"box-icon"}>
                <i className={"fas fa-car icon-large"}></i>
              </div>
              <div>
                <p>
                  Need funding that's flexible and repayable over time? Our Judo
                  Bank business loan provides options to support growth or
                  investment in your business.
                </p>
              </div>
            </div>
            <div className={"box-child"}>
              <div className={"box-icon"}>
                <i className={"fas fa-building icon-large"}></i>
              </div>
              <div>
                <p>
                  Need funding that's flexible and repayable over time? Our Judo
                  Bank business loan provides options to support growth or
                  investment in your business.
                </p>
              </div>
            </div>
          </Container>
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
