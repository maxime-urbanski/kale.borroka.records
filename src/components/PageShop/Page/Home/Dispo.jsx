import React from "react";
import { Col, Row } from "reactstrap";
import { withNamespaces } from "react-i18next";
import styles from "../../../Styles/dispo.module.css";
import LParticle from "../../Marchandise/Lp";
import epArticle from "../../Marchandise/EP";
import cd from "../../Marchandise/CD";
import CardDispo from "../../CardDispo";

const Dispo = ({ t }) => {
  return (
    <div>
      <Row className={styles.position}>
        <h2 className={styles.title}>{t("dispo")}</h2>
      </Row>
      <Row style={{justifyContent: "center"}}>
        <Col xs={12} md={6} lg={6} xl={4}>
          <CardDispo articleList={LParticle} format="LP" t={t} />
        </Col>
        <Col>
          <CardDispo articleList={epArticle} format="EP" t={t} />
        </Col>
        <Col>
          <CardDispo articleList={cd} format="CD" t={t} />
        </Col>
      </Row>
    </div>
  );
};
export default withNamespaces()(Dispo);
