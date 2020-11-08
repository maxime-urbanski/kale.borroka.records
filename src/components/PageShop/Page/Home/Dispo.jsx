import React from "react";
import {Container, Row, } from "reactstrap";
import { withNamespaces } from "react-i18next";
import styles from "../../../Styles/dispo.module.css";
import LParticle from "../../Marchandise/Lp";
import epArticle from "../../Marchandise/EP";
import cd from "../../Marchandise/CD";
import ToastDispo from "../../ToastDispo";

const Dispo =({ t }) =>{
  return (
    <Container fluid>
      <Row className={styles.position}>
        <h2 className={styles.title}>{t("dispo")}</h2>
      </Row>
      <Row>
        <ToastDispo articleList={LParticle} format='LP' t={t}/>
        <ToastDispo articleList={epArticle} format='EP' t={t}/>
        <ToastDispo articleList={cd} format='CD' t={t}/>        
      </Row>
    </Container>
  );
}
export default withNamespaces()(Dispo);
