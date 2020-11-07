import React from "react";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "../Styles/pageShop.module.css";
import CardArticle from "./CardArticle";

const pageArticle = ({ articleList, format }) => {
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
            <h1 className={styles.title}>{format}</h1>
            <Row className={styles.cardPosition}>
              {articleList.map((item) => {
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
        </Col>
      </Container>
    </>
  );
};

export default pageArticle;
