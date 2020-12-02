import React, { useEffect } from "react";
import { Container, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import How from "../PageShop/Page/Home/How";
import styles from "../Styles/howbuy.module.css";
function HowBuy({ t }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Container>
        <Breadcrumb className={styles.breadCrumb} listTag="div">
          <BreadcrumbItem tag={Link} to={"/"}>
            KALE BORROKA RECORDS
          </BreadcrumbItem>
          <BreadcrumbItem tactive tag="span">
            COMMENT COMMANDER
          </BreadcrumbItem>
        </Breadcrumb>
        <Row className={styles.position}>
          <How />
        </Row>
        <hr className={`${styles.hrBuy} mt-5`} />
        <Row>
          <p className={styles.explain}>
            {t("texte1")}
            <Link to="/contact"> {t("contact")}</Link>, {t("texte2")}{" "}
            {t("Libre")}, {t("texte3")}
            {t("texte4")}
          </p>
        </Row>
        <Row>
          <p className={styles.team}>Kale Borrorka Records</p>
        </Row>
      </Container>
    </div>
  );
}

export default withNamespaces()(HowBuy);
