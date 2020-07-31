import React from "react";
import { Container, Navbar, Nav, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <>
      <div className={"footer"}>
        <div className={"footer-left"}>
          <p className={"footerText"}>
            © Wonder Bank™ 2020 | All Rights Reserved | Wonder Bank Pty Ltd |
            ABN 11 615 995 571 | ACL and AFSL 501 021 | This information is of a
            general nature only and does not take into account your objectives,
            financial situation or needs. In particular, you should seek
            independent financial advice and read the relevant terms and
            conditions and relevant product documents prior to making a
            decision. | Past performance is not an indication of future
            performance. | Eligibility criteria, fees and charges and terms and
            conditions may apply to Wonder Bank’s products and services
          </p>
        </div>
        <div className={"footer-right"}>
          <h4 style={{ color: "white" }}>Wonder Bank</h4>
        </div>
      </div>
    </>
  );
};
