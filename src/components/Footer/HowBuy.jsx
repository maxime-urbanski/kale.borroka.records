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
            {t("debut")}
            <Link to="/contact"> {t("contact")}</Link>, en indiquant les articles
            voulus. <br />
            Si tu as des articles en "Prix Libre", n'oublie pas de nous donner
            le montant que tu désires mettre pour l'objet en question. <br />
            Une fois la commande reçue, nous te recontactons pour te confirmer
            la disponibilitée des articles, et le totale de la commande, frais
            de port compris.
            <br /> Les commandes sont traitées rapidement, et envoyer avec
            Chronopost (où transporteur de ton choix), avec la possibilité de
            remise en main propre. <br />
            Pour le paiement, nous acceptons pour le moments que Paypal.
          </p>
        </Row>
        <Row>
          <p className={styles.team}>L'équipe de Kale Borrorka Records</p>
        </Row>
      </Container>
    </div>
  );
}

export default withNamespaces()(HowBuy);
