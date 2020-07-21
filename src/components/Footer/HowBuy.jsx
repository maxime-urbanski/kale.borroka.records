import React from "react";
import { Container, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

import Footer from "./Footer";
import How from "../Home/How";

import styles from "./howbuy.module.css";

function HowBuy() {
    return (
        <div>
            <Container>
                <Breadcrumb listTag="div">
                    <BreadcrumbItem tag={Link} to={"/"}>
                        KALE BORROKA RECORDS
                    </BreadcrumbItem>
                    <BreadcrumbItem tactive tag="span">
                        COMMENT COMMANDER
                    </BreadcrumbItem>
                </Breadcrumb>
                <Row>
                    <How />
                </Row>
                <hr className={`${styles.hrBuy} mt-5`} />
                <Row>
                    <p className={styles.explain}>
                        Pour passer commande, il suffit d'envoyer un mail à
                        kale.borroka.records@protonmail.com, ou en passant par
                        <Link to="/contact"> Contact Nous</Link>, en indiquant
                        les articles voulus. <br />
                        Si tu as des articles en "Prix Libre", n'oublie pas de
                        nous donner le montant que tu désires mettre pour
                        l'objet en question. <br />
                        Une fois la commande reçue, nous te recontactons pour te
                        confirmer la disponibilitée des articles, et le totale
                        de la commande, frais de port compris.
                        <br /> Les commandes sont traitées rapidement, et
                        envoyer avec Chronopost (où transporteur de ton choix),
                        avec la possibilité de remise en main propre. <br />
                        Pour le paiement, nous acceptons Paypals et les
                        virements bancaires.
                    </p>
                </Row>
                <Row>
                    <p className={styles.team}>
                        L'équipe de Kale Borrorka Records
                    </p>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default HowBuy;
