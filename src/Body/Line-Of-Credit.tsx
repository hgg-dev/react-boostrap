import React from "react";
import { Jumbotron, Container, Row } from "react-bootstrap";
import ApplyForm from "./Apply-Form";

export default function LineOfCredit() {
  return (
    <>
      {" "}
      <Container fluid>
        <Row>
          <div className={"banner"}>
            <div className={"banner_tag"}>
              <h2>Line of Credit</h2>
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
              <h3>Business banking made easier</h3>
              <p>
                We know the world of business zigs and zags. A line of credit
                facility from Wonder Bank can help you best manage your cash
                flow.
              </p>
              <h3>Features</h3>
              <ul>
                <li>
                  Draw up to the approved limit with no scheduled repayments.
                </li>
                <li>Variable interest rate.</li>
              </ul>
              <h3>Valuable for your business</h3>
              <ul>
                <li>Assisting to meet working capital needs.</li>
                <li>Allows drawings and repayments to match your cash flow.</li>
              </ul>
            </div>
          </div>
        </Row>
        <Row>
          <div className={"spec_container"}>
            <div className={"spec_child"}>
              <h4>Loan Amount</h4>
              <p>
                Minimum $250,000 with up to $10M of total relationship
                borrowings.
              </p>
            </div>
            <div className={"spec_child special"}>
              <h4>Security</h4>
              <p>Generally secured by the asset being financed.</p>
            </div>
            <div className={"spec_child "}>
              <h4>Term</h4>
              <p>Up to 5 years matched to the effective life of the asset.</p>
            </div>
            <div className={"spec_child special"}>
              <h4>Interest Rate</h4>
              <p>Fixed interest rate.</p>
            </div>
            <div className={"spec_child "}>
              <h4>Repayments</h4>
              <p>
                P & I with an optional balloon. Monthly, Quarterly and Seasonal
                to match cashflow.
              </p>
            </div>
            <div className={"spec_child special"}>
              <h4>Suitability</h4>
              <p>
                Businesses that are starting up as well as established
                businesses.
              </p>
            </div>
          </div>
        </Row>
        <ApplyForm />
      </Container>
    </>
  );
}
