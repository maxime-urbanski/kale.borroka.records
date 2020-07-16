import React from "react";
import { Container, Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import Footer from "./Footer";
import disque from "../Img/disque.png";
import send from "../Img/send.png";
import search from "../Img/search.png";
import { Link } from "react-router-dom";

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
                    <h2 className={`${styles.title} mx-auto`}>
                        Comment passer commande ?
                    </h2>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <img src={search} alt="ok" className="mx-auto" />
                        </Row>
                        <Row>
                            <h3 className="mx-auto mt-3">
                                Je choisis mes articles
                            </h3>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <img src={send} alt="ok" className="mx-auto" />
                        </Row>
                        <Row className="mx-auto">
                            <h3 className="mx-auto mt-3">
                                J'envoie ma liste par mail / via{" "}
                                <Link to="/contact">Contact</Link>{" "}
                            </h3>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <img src={disque} alt="ok" className="mx-auto" />
                        </Row>
                        <Row className="mx-auto">
                            <h3 className="mx-auto mt-3">
                                Je fais profiter tout le voisinage
                            </h3>
                        </Row>
                    </Col>
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
