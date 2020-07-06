import React from "react";
import { Col, Row, Container } from "reactstrap";
import fight from "./img/fight.png";
import ebay from "./img/ebay.png";

import "./menu.css";

import fb from "./img/fb.png";
import pt from "./img/pt.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Container fluid={true} className="bg-primary footer">
        <Row>
          <Col className="offset-1 pl-5 col-md-3">
            <Row>
              <Link to="/how-to-buy">
                <h6 className="text-light  mt-5 mb-3 text-decoration-none">
                  Comment commander
                </h6>
              </Link>
            </Row>
            <Row>
              <Link to="/contact">
                <h6 className="text-light  mt-3 mb-3 text-decoration-none">
                  Contact Nous !
                </h6>
              </Link>
            </Row>
            <Row>
              <Link to="/crew">
                <h6 className="text-light  mt-3 mb-3 text-decoration-none">
                  Kale Borroka Records
                </h6>
              </Link>
            </Row>
          </Col>
          <Col className="col-md-7 footer">
            <img className="logoFooter mt-5" src={fight} alt="discogs logo" />
            <img className="logoFooter mt-5" src={fight} alt="discogs logo" />
            <img className="logoFooter mx-auto" src={fight} alt="ebay logo" />
          </Col>
          <Col className="col-md-1 ">
            <Row>
              <a href="https://www.facebook.com/kale.borroka.records/">
                <img
                  src={fb}
                  alt="facebook icon"
                  className="mt-5 pr-2 "
                  width="30%"
                />
              </a>
            </Row>
            <Row>
              <a href="https://www.facebook.com/kale.borroka.records/">
                <img
                  src={pt}
                  alt="Protonmail icon"
                  className="mt-5 pr-2"
                  width="34%"
                />
              </a>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <p className="mx-auto text-light end">
          2020 Kale Borroka Records All right reserved . 100% DIY !
        </p>
      </Container>
    </>
  );
}

export default Footer;
