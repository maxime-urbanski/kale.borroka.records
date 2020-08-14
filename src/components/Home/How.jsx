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
      <Row className={styles.colBuy}>
        <h2 className={styles.title}>{t("how")}</h2>
      </Row>
      <Row className="mx-auto">
        <Col className={styles.colBuy} xs={12} lg={4}>
          <Row>
            <img src={search} alt="ok" className="mx-auto" />
          </Row>
          <Row>
            <h3 className={styles.titleHow}>{t("choose")}</h3>
          </Row>
        </Col>

        <Col className={styles.colBuy} xs={12} lg={4}>
          <Row>
            <img src={send} alt="ok" className="mx-auto" />
          </Row>
          <Row className="mx-auto">
            <h3 className={styles.titleHow}>
              <Link to="/contact">{t("send")}</Link>
            </h3>
          </Row>
        </Col>
        <Col className={styles.colBuy} xs={12} lg={4}>
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
