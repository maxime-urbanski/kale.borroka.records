import React from "react";
import { Row } from "reactstrap";
import { withNamespaces } from "react-i18next";
import styles from "../../../Styles/dispo.module.css";
import LParticle from "../../Marchandise/Lp";
import epArticle from "../../Marchandise/EP";
import cd from "../../Marchandise/CD";
import CardDispo from "../../CardDispo";

const Dispo = ({ t }) => {
  return (
    <>
      <Row className={styles.position}>
        <h2 className={styles.title}>{t("dispo")}</h2>
      </Row>
      <Row>
        <CardDispo articleList={LParticle} format="LP" t={t} />
        <CardDispo articleList={epArticle} format="EP" t={t} />
        <CardDispo articleList={cd} format="CD" t={t} />
      </Row>
    </>
  );
};
export default withNamespaces()(Dispo);
