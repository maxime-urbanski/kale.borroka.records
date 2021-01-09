import React from "react";
import { Col, Row } from "reactstrap";
import { withNamespaces } from "react-i18next";
import styles from "../../../Styles/home.module.css";
import disque from "../../../Img/disque.png";
import send from "../../..//Img/send.png";
import search from "../../..//Img/search.png";

function How({ t }) {
  const stepsBuy = [
    { logo: search, title: "choose" },
    { logo: send, title: "send" },
    { logo: disque, title: "enjoy" },
  ];
  return (
    <>
      <Row className={styles.colBuy}>
        <h2 className={styles.title}>{t("how")}</h2>
      </Row>
      <Row className="mx-auto">
        {stepsBuy.map((step, index) => {
          return (
            <Col className={styles.colBuy} xs={12} lg={4} key={index}>
              <Row>
                <img src={step.logo} alt="ok" className="mx-auto" />
              </Row>
              <Row>
                <h3 className={styles.titleHow}>{t(`${step.title}`)}</h3>
              </Row>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
export default withNamespaces()(How);
