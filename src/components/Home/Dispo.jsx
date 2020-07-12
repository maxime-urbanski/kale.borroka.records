import React from "react";

import { Container, Row, Col, Toast, ToastHeader, ToastBody } from "reactstrap";

import LParticle from "../PageShop/marchandise/Lp";
import { Link } from "react-router-dom";
import epArticle from "../PageShop/marchandise/EP";

import cd from "../PageShop/marchandise/CD";
import LpList from "../PageShop/LpList";

function Dispo() {
  return (
    <Container fluid className="mt-2">
      <Row>
        <h2 className="mx-auto">Article toujours dispo</h2>
      </Row>
      <Row>
        <Col xs={4}>
          <Row>
            <h3 className="mx-auto mt-5"> LP </h3>
          </Row>
          <Row>
            <div className=" p-3 my-2 rounded mx-auto">
              {LParticle.map((item) => {
                return (
                  <Toast className="ml-5">
                    <ToastBody>
                      <Link to={`/${item.format}/${item.id}`}>
                        <h4>
                          {item.artiste} - {item.name}
                        </h4>
                      </Link>
                      Prix: {item.price}
                    </ToastBody>
                  </Toast>
                );
              }).slice(0, 5)}
              <Link to="/LP">
                <p> voir plus</p>
              </Link>
            </div>
          </Row>
        </Col>
        <Col xs={4}>
          <Row>
            <h3 className="mx-auto mt-5"> EP </h3>
          </Row>
          <Row>
            <div className=" mx-auto p-3 my-2 rounded">
              {epArticle
                .map((item) => {
                  return (
                    <Toast>
                      <ToastBody>
                        <Link to={`/${item.format}/${item.id}`}>
                          <h4>
                            {item.artiste} - {item.name}
                          </h4>
                        </Link>
                        Prix: {item.price}
                      </ToastBody>
                    </Toast>
                  );
                })
                .slice(0, 5)}

              <Link to="/EP">
                <p> voir plus</p>
              </Link>
            </div>
          </Row>
        </Col>
        <Col xs={4}>
          <Row>
            {" "}
            <h3 className="mx-auto mt-5"> CD </h3>
          </Row>
          <Row>
            <div className="mx-auto p-3 my-2 rounded">
              {cd
                .map((item) => {
                  return (
                    <Toast>
                      <ToastBody>
                        <Link to={`/${item.format}/${item.id}`}>
                          <h4>
                            {item.artiste} - {item.name}
                          </h4>
                        </Link>
                        Prix: {item.price}
                      </ToastBody>
                    </Toast>
                  );
                })
                .slice(0, 5)}
              <Link to="/CD">
                <p> voir plus</p>
              </Link>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Dispo;
