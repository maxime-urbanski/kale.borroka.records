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
import styles from "./card.module.css";

import ModalBuy from "./ModalBuy";
import { Link } from "react-router-dom";

function CardArticle({ id, image, name, artiste, format, price }) {
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
                        <Button tag={Link} to={`/${format}/${id}`}>
                            Details
                        </Button>
                    )}
                </CardBody>
            </Card>
        </div>
    );
}

export default CardArticle;
