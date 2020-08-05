import React from "react";

import { Container, Row, Col, Toast, ToastBody } from "reactstrap";
import { Link } from "react-router-dom";
import { withNamespaces } from "react-i18next";

import styles from "../Styles/home.module.css";

import LParticle from "../PageShop/marchandise/Lp";
import epArticle from "../PageShop/marchandise/EP";

import cd from "../PageShop/marchandise/CD";

function Dispo({ t }) {
    return (
        <Container fluid>
            <Row>
                <h2 className={`${styles.title} mx-auto`}>{t("dispo")}</h2>
            </Row>
            <Row>
                <Col xs={12} lg={4}>
                    <Row>
                        <h3 className={`${styles.otherTitle} mx-auto mt-5`}>
                            {" "}
                            LP{" "}
                        </h3>
                    </Row>
                    <Row>
                        <div className="p-3 my-2 rounded mx-auto">
                            {LParticle.map((item) => {
                                return (
                                    <Toast
                                        className={`${styles.hvrGrow} ml-5 border-danger shadow-lg`}
                                    >
                                        <ToastBody>
                                            <Link
                                                className="text-decoration-none"
                                                to={`/${item.format}/${item.id}`}
                                            >
                                                <h4
                                                    className={styles.toastHome}
                                                >
                                                    {item.artiste} - {item.name}
                                                </h4>
                                            </Link>
                                            <p
                                                className={
                                                    styles.toastHomePrice
                                                }
                                            >
                                                {t("prix")}
                                                {item.price}
                                            </p>
                                        </ToastBody>
                                    </Toast>
                                );
                            }).slice(0, 5)}
                            <Link
                                className="text-decoration-none mx-auto"
                                to="/LP"
                            >
                                <p className={styles.more}> {t("more")}</p>
                            </Link>
                        </div>
                    </Row>
                </Col>
                <Col xs={12} lg={4}>
                    <Row>
                        <h3 className={`${styles.otherTitle} mx-auto mt-5`}>
                            {" "}
                            EP{" "}
                        </h3>
                    </Row>
                    <Row>
                        <div className="mx-auto p-3 rounded">
                            {epArticle
                                .map((item) => {
                                    return (
                                        <Toast
                                            className={`${styles.hvrGrow} ml-5 border-danger shadow-lg`}
                                        >
                                            <ToastBody>
                                                <Link
                                                    className="text-decoration-none"
                                                    to={`/${item.format}/${item.id}`}
                                                >
                                                    <h4
                                                        className={
                                                            styles.toastHome
                                                        }
                                                    >
                                                        {item.artiste} -{" "}
                                                        {item.name}
                                                    </h4>
                                                </Link>
                                                <p
                                                    className={
                                                        styles.toastHomePrice
                                                    }
                                                >
                                                    {t("prix")} {item.price}
                                                </p>
                                            </ToastBody>
                                        </Toast>
                                    );
                                })
                                .slice(0, 5)}

                            <Link
                                className="text-decoration-none mx-auto"
                                to="/EP"
                            >
                                <p className={styles.more}>{t("more")}</p>
                            </Link>
                        </div>
                    </Row>
                </Col>
                <Col xs={12} lg={4}>
                    <Row>
                        {" "}
                        <h3 className={`${styles.otherTitle} mx-auto mt-5`}>
                            {" "}
                            CD{" "}
                        </h3>
                    </Row>
                    <Row>
                        <div className="mx-auto p-3 my-2 rounded">
                            {cd
                                .map((item) => {
                                    return (
                                        <Toast
                                            className={`${styles.hvrGrow} ml-5 border-danger shadow-lg`}
                                        >
                                            <ToastBody>
                                                <Link
                                                    className="text-decoration-none"
                                                    to={`/${item.format}/${item.id}`}
                                                >
                                                    <h4
                                                        className={
                                                            styles.toastHome
                                                        }
                                                    >
                                                        {item.artiste} -{" "}
                                                        {item.name}
                                                    </h4>
                                                </Link>
                                                <p
                                                    className={
                                                        styles.toastHomePrice
                                                    }
                                                >
                                                    {" "}
                                                    {item.price === "Libre"
                                                        ? `${t("libre")}`
                                                        : `${t("prix")}
                                                    ${item.price}`}
                                                </p>
                                            </ToastBody>
                                        </Toast>
                                    );
                                })
                                .slice(0, 5)}
                            <Link
                                className="text-decoration-none mx-auto"
                                to="/CD"
                            >
                                <p className={styles.more}>{t("more")}</p>
                            </Link>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default withNamespaces()(Dispo);
