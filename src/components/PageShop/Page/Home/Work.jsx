import React from "react";
import { Container } from "reactstrap";
import styles from "../../../Styles/work.module.css";
import logo from "../../../Img/icon.jpg";
import { withNamespaces } from "react-i18next";

function Work({ t }) {
  return (
    <>
      <Container>
        <div className={styles.work}>
          <img src={logo} alt="" className={styles.logo} />
          <hr className={styles.hr} />
          <h2>{t("construction")}</h2>
        </div>
      </Container>
    </>
  );
}

export default withNamespaces()(Work);
