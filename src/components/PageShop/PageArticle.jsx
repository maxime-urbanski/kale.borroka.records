import React, { useEffect, useState } from "react";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "../Styles/pageShop.module.css";
import CardArticle from "./CardArticle";
import PaginationDistro from "../Function/pagination";
import { withNamespaces } from "react-i18next";

const pageArticle = ({ articleList, format, t }) => {
  const [currentPage, setCurrentPage] = useState("1");
  const [cardsPerPage, setCardsPerPage] = useState("9");
  const indexLastCards = currentPage * cardsPerPage;
  const indexFirstCards = indexLastCards - cardsPerPage;
  const currentCards = articleList.slice(indexFirstCards, indexLastCards);
  const paginate = (pageNum) => setCurrentPage(pageNum);
  const pageNext = () => setCurrentPage(currentPage + 1);
  const pagePrev = () => setCurrentPage(currentPage - 1);

  useEffect(() => {
    window.scrollTo(0, 450);
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
        <Col>
          <Row className={styles.position}>
            <h1 className={styles.title}>{t(`${format}`)}</h1>
            <Row className={styles.cardPosition}>
              {currentCards.map((item) => {
                return item.quantity > 0 ? (
                  <Col xs={12} sm={6} lg={4} className={styles.position}>
                    <CardArticle {...item} key={item.id} />
                  </Col>
                ) : (
                  ""
                );
              })}
            </Row>
          </Row>
          <Row>
            <PaginationDistro
              cardsPerPage={cardsPerPage}
              totalCards={articleList}
              paginate={paginate}
              pageNext={pageNext}
              pagePrev={pagePrev}
              currentPage={currentPage}
              format={format}
            />
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default withNamespaces()(pageArticle);
