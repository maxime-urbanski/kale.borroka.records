import React from "react";
import { Row } from "reactstrap";
import Slider from "react-slick";

import { withNamespaces } from "react-i18next";
import styles from "../Styles/home.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import lastItem from "../PageShop/marchandise/lastItems";
import CardArticle from "../PageShop/CardArticle";

function LastArticle({ t }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
                {lastItem.map((item) => {
                    return (
                        <div className="mt-2">
                            <CardArticle {...item} />
                        </div>
                    );
                })}
            </Slider>
        </>
    );
}

export default withNamespaces()(LastArticle);
