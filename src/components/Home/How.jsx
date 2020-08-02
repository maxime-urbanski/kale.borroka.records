import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { withNamespaces } from "react-i18next";

import styles from "../Styles/home.module.css";

import disque from "../Img/disque.png";
import send from "../Img/send.png";
import search from "../Img/search.png";

function How({ t }) {
  return (
    <>
      <Row>
        <h2 className={`${styles.title} mt-5 mb-5 mx-auto`}>{t("how")}</h2>
      </Row>
      <Row className="mb-5">
        <Col className={styles.colBuy} xs={12} sm={6} lg={4}>
          <Row>
            <img src={search} alt="ok" className="mx-auto" />
          </Row>
          <Row>
            <h3 className={styles.titleHow}>{t("choose")}</h3>
          </Row>
        </Col>

        <Col className={styles.colBuy} xs={12} sm={6} lg={4}>
          <Row>
            <img src={send} alt="ok" className="mx-auto" />
          </Row>
          <Row className="mx-auto">
            <h3 className={styles.titleHow}>
              <Link to="/contact">{t("send")}</Link>
            </h3>
          </Row>
        </Col>
        <Col className={styles.colBuy} xs={12} sm={6} lg={4}>
          <Row>
            <img src={disque} alt="ok" className="mx-auto" />
          </Row>
          <Row className="mx-auto">
            <h3 className={styles.titleHow}>{t("enjoy")}</h3>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default withNamespaces()(How);
