import React from "react";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "../Styles/pageShop.module.css";
import CardArticle from "./CardArticle";
import { useState } from "react";
import { useEffect } from "react";
import PaginationDistro from "../Function/pagination";
import { withNamespaces } from "react-i18next";

const pageArticle = ({ articleList, format, t }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const indexLastCards = currentPage * cardsPerPage;
  const indexFirstCards = indexLastCards - cardsPerPage;
  const currentCards = articleList.slice(indexFirstCards, indexLastCards);
  const paginate = (pageNum) => setCurrentPage(pageNum);

  useEffect(() => {
    window.scrollTo(0, 300);
  });
  return (
    <>
      <Container>
        <Row>
          <Breadcrumb className={styles.breadCrumb} listTag="div">
            <BreadcrumbItem tag={Link} to={"/"}>
              KALE BORROKA RECORDS
            </BreadcrumbItem>
            <BreadcrumbItem active tag="span">
              {format}
            </BreadcrumbItem>
          </Breadcrumb>
        </Row>
        <Row className={styles.position}>
          <h1 className={styles.title}>{t(`${format}`)}</h1>
        </Row>
        <Row className={styles.cardPosition}>
          {currentCards.map((item, index) => {
            return item.quantity > 0 ? (
              <Col
                xs={12}
                sm={6}
                lg={4}
                className={styles.position}
                key={index}
              >
                <CardArticle {...item} key={item.id} />
              </Col>
            ) : null;
          })}
        </Row>
        <Row>
          <PaginationDistro
            cardsPerPage={cardsPerPage}
            paginate={paginate}
            articleList={articleList}
          />
        </Row>
      </Container>
    </>
  );
};

export default withNamespaces()(pageArticle);
