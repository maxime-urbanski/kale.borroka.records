import React from "react";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

import styles from "../../Styles/divers.module.css";

import fanzine from "../../Img/fanzine_4.png";
import ipeh from "../../Img/ipeh.jpg";

function divers() {
  return (
    <>
      <Container>
        <Breadcrumb className={styles.breadCrumb} listTag="div">
          <BreadcrumbItem tag={Link} to={"/"}>
            KALE BORROKA RECORDS
          </BreadcrumbItem>
          <BreadcrumbItem active tag="span">
            DIVERS
          </BreadcrumbItem>
        </Breadcrumb>
        <Row>
          <Col className={styles.positionImg} xs={12} lg={6}>
            <Link to="/Divers/fanzine">
              <img
                src={fanzine}
                alt="fanzine"
                width="300px"
                className="mt-5 mb-5"
              />
            </Link>
          </Col>
          <Col className={styles.positionImg} xs={12} lg={6}>
            <Link to="/Divers/IPEH">
              <img src={ipeh} alt="ipeh antifaxista" width="300px" />
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default divers;
