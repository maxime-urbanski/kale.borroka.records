import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

import { withNamespaces } from "react-i18next";
import { Link } from "react-router-dom";
import ModalBuy from "./ModalBuy";

import styles from "../Styles/card.module.css";

function CardArticle({ id, image, name, artiste, format, price, t }) {
  return (
    <div className={`${styles.hvrGrow} mt-5`}>
      <Card className={`${styles.cardSize} rounded shadow-lg p-3`} key={id}>
        <CardTitle tag="h4">{artiste}</CardTitle>
        <CardSubtitle className={styles.text2}>{name}</CardSubtitle>
        <CardBody>
          <CardImg className={styles.img} src={image} alt={name} />
          <CardText className={styles.text}>
            {format} {t(`${price}`)}
          </CardText>
          {format === "fanzine" ? (
            <ModalBuy image={image} price={price} />
          ) : (
            <Link
              to={{
                pathname: `/${format}/${id}`,
                state: {
                  image: image,
                  name: name,
                  artiste: artiste,
                  price: price,
                },
              }}
            >
              <Button className={styles.bouton}>{t("details")}</Button>
            </Link>
          )}
        </CardBody>
      </Card>
    </div>
  );
}

export default withNamespaces()(CardArticle);
