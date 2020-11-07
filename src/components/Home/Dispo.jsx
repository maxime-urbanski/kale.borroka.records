import React from "react";

import { Container, Row, Col, Toast, ToastBody } from "reactstrap";
import { Link } from "react-router-dom";
import { withNamespaces } from "react-i18next";

import styles from "../Styles/dispo.module.css";

import LParticle from "../PageShop/Marchandise/Lp";
import epArticle from "../PageShop/Marchandise/EP";

import cd from "../PageShop/Marchandise/CD";
import Button from "reactstrap/lib/Button";

function Dispo({ t }) {
  return (
    <Container fluid>
      <Row className={styles.position}>
        <h2 className={styles.title}>{t("dispo")}</h2>
      </Row>
      <Row>
        <Col xs={12} lg={4}>
          <Row className={styles.position}>
            <h3 className={styles.otherTitle}> LP </h3>
          </Row>
          <Row className={styles.position}>
            <div>
              {LParticle.map((item) => {
                return (
                  <Toast className={styles.hvrGrow}>
                    <ToastBody>
                      <Link
                        className="text-decoration-none"
                        to={`/${item.format}/${item.id}`}
                      >
                        <h4 className={styles.toastHome}>
                          {item.artiste} - {item.name}
                        </h4>
                      </Link>
                      <p className={styles.toastHomePrice}>
                        {t("prix")}
                        {item.price}
                      </p>
                    </ToastBody>
                  </Toast>
                );
              }).slice(0, 5)}
              <Link className="text-decoration-none" to="/LP">
                <Button color="warning" className="mb-5">
                  {" "}
                  {t("more")}
                </Button>
              </Link>
            </div>
          </Row>
        </Col>
        <Col xs={12} lg={4}>
          <Row className={styles.position}>
            <h3 className={styles.otherTitle}> EP </h3>
          </Row>
          <Row className={styles.position}>
            <div>
              {epArticle
                .map((item) => {
                  return (
                    <Toast className={styles.hvrGrow}>
                      <ToastBody>
                        <Link
                          className="text-decoration-none"
                          to={`/${item.format}/${item.id}`}
                        >
                          <h4 className={styles.toastHome}>
                            {item.artiste} - {item.name}
                          </h4>
                        </Link>
                        <p className={styles.toastHomePrice}>
                          {t("prix")} {item.price}
                        </p>
                      </ToastBody>
                    </Toast>
                  );
                })
                .slice(0, 5)}

              {console.log([...new Set(epArticle)])}

              <Link className="text-decoration-none" to="/EP">
                <Button color="warning" className="mb-5">
                  {" "}
                  {t("more")}
                </Button>
              </Link>
            </div>
          </Row>
        </Col>
        <Col xs={12} lg={4}>
          <Row className={styles.position}>
            {" "}
            <h3 className={styles.otherTitle}> CD </h3>
          </Row>
          <Row className={styles.position}>
            <div>
              {cd
                .map((item) => {
                  return (
                    <Toast className={styles.hvrGrow}>
                      <ToastBody>
                        <Link
                          className="text-decoration-none"
                          to={`/${item.format}/${item.id}`}
                        >
                          <h4 className={styles.toastHome}>
                            {item.artiste} - {item.name}
                          </h4>
                        </Link>
                        <p className={styles.toastHomePrice}>
                          {" "}
                          {item.price === "Libre"
                            ? `${t("libre")}`
                            : `${t("prix")}
                                                    ${item.price}`}
                        </p>
                      </ToastBody>
                    </Toast>
                  );
                })
                .slice(0, 5)}
              <Link className="text-decoration-none" to="/CD">
                <Button color="warning" className="mb-5">
                  {" "}
                  {t("more")}
                </Button>
              </Link>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default withNamespaces()(Dispo);
