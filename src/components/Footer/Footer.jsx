import React from "react";
import { Col, Row, Container } from "reactstrap";
import fight from "../Img/fight.png";
import arrow from "../Img/arrow.png";
import flag from "../Img/flag.png";

import "../menu.css";

import fb from "../Img/fb.png";
import pt from "../Img/pt.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Container fluid={true} className="footer bg-primary">
        <Row>
          <Col className="offset-1 pl-5 col-md-3">
            <Row>
              <Link to="/how-to-buy" className="text-decoration-none">
                <h6 className="text-light write  mt-5 mb-3 ">
                  Comment commander
                </h6>
              </Link>
            </Row>
            <Row>
              <Link to="/contact" className="text-decoration-none">
                <h6 className="text-light  write mt-3 mb-3 ">
                  Contactez Nous !
                </h6>
              </Link>
            </Row>
            <Row>
              <Link to="/crew" className="text-decoration-none">
                <h6 className="text-light write  mt-3 mb-3 ">
                  Kale Borroka Records
                </h6>
              </Link>
            </Row>
          </Col>
          <Col className="col-md-7 footer">
            <div className="footerLogo">
              <img
                className="logoFooter mx-auto pl-5 "
                src={fight}
                alt="discogs logo"
              />
              <img
                className="logoFooter mx-auto pl-5 "
                src={flag}
                alt="discogs logo"
              />
              <img
                className="logoFooter mx-auto pl-5 "
                src={arrow}
                alt="ebay logo"
              />
            </div>
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
        <p className="my-auto text-light end">
          2020 Kale Borroka Records All right reserved . 100% DIY !
        </p>
      </Container>
    </>
  );
}

export default Footer;
