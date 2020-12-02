import React from "react";
import { Col, Row } from "reactstrap";
import { withNamespaces } from "react-i18next";
import styles from "../../../Styles/home.module.css";
import lastItem from "../../Marchandise/lastItems";
import CardArticle from "../../CardArticle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function LastArticle({ t }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1201 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    desktop1: {
      breakpoint: { max: 1200, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 699, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <Row>
        <h2 className={`${styles.title} mx-auto`}>{t("arriver")}</h2>
      </Row>
      <Carousel responsive={responsive} infinite={true} transitionDuration={5000}>
        {lastItem.map((item, index) => {
          return (
            <Col xs={12} key={index}>
              <CardArticle {...item} />
            </Col>
          );
        })}
      </Carousel>
    </>
  );
}

export default withNamespaces()(LastArticle);
