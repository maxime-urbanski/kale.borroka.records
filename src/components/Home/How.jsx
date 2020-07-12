import React from "react";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import disque from "../Img/disque.png";
import send from "../Img/send.png";
import search from "../Img/search.png";

function How() {
  return (
    <>
      <Row>
        <h2 className="mt-5 mb-5 mx-auto">Comment passer commande ?</h2>
      </Row>
      <Row className="mb-5">
        <Col>
          <Row>
            <img src={search} alt="ok" className="mx-auto" />
          </Row>
          <Row>
            <h3 className="mx-auto mt-3">Je choisis mes articles</h3>
          </Row>
        </Col>
        <Col>
          <Row>
            <img src={send} alt="ok" className="mx-auto" />
          </Row>
          <Row className="mx-auto">
            <h3 className="mx-auto mt-3">
              J'envoi ma liste par mail / via <Link to="/contact">Contact</Link>{" "}
            </h3>
          </Row>
        </Col>
        <Col>
          <Row>
            <img src={disque} alt="ok" className="mx-auto" />
          </Row>
          <Row className="mx-auto">
            <h3 className="mx-auto mt-3">
              Je fais profiter tout le voisinage{" "}
            </h3>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default How;
