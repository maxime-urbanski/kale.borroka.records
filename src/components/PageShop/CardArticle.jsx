import React from "react";

import {
    Card,
    CardImg,
    CardBody,
    CardText,
    CardTitle,
    Button,
    Row,
} from "reactstrap";

import { withNamespaces } from "react-i18next";
import { Link } from "react-router-dom";
import ModalBuy from "./ModalBuy";

import styles from "./card.module.css";

function CardArticle({ id, image, name, artiste, format, price, t }) {
    return (
        <div className={`${styles.hvrGrow} mt-5`}>
            <Card
                className={`${styles.cardSize} rounded-top shadow-lg p-3 mb-5`}
                key={id}
            >
                <CardImg top className={styles.img} src={image} alt={name} />
                <CardBody>
                    <CardTitle>
                        <h4 className={styles.title}>{artiste}</h4> -
                        <p className={styles.titleBis}>{name}</p>
                    </CardTitle>
                    <CardText>
                        -
                        <Row>
                            <p className={styles.infoCard}>{format}</p>
                            <p className={styles.infoCard}>{price}</p>
                        </Row>
                    </CardText>
                    {format === "fanzine" ? (
                        <ModalBuy image={image} price={price} />
                    ) : (
                        <Button
                            className={styles.bouton}
                            tag={Link}
                            to={`/${format}/${id}`}
                        >
                            {t("details")}
                        </Button>
                    )}
                </CardBody>
            </Card>
        </div>
    );
}

export default withNamespaces()(CardArticle);
