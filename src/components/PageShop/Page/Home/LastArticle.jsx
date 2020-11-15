import React from "react";
import { Col, Row } from "reactstrap";
import Slider from "react-slick";
import { withNamespaces } from "react-i18next";
import styles from "../../../Styles/home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import lastItem from "../../Marchandise/lastItems";
import CardArticle from "../../CardArticle";

function LastArticle({ t }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <Row>
        <h2 className={`${styles.title} mx-auto`}>{t("arriver")}</h2>
      </Row>
      <Slider {...settings}>
        {lastItem.map((item, index) => {
          return (
            <Col key={index}>
              <CardArticle {...item} />
            </Col>
          );
        })}
      </Slider>
    </>
  );
}

export default withNamespaces()(LastArticle);
