import React, { useEffect } from "react";
import { Col, Row, Container } from "reactstrap";
import { withNamespaces } from "react-i18next";
import styles from "../Styles/footer.module.css";
import { Link } from "react-router-dom";
import { friend, socialNetwork } from "../Function/link";
function Footer({ t }) {
  const network = [];
  return (
    <>
      <Container fluid className={styles.footer}>
        <Col xs={12} lg={4} className={styles.colFooter}>
          <Row>
            <h3 className={styles.sectionFooter}>{t("propos")}</h3>
          </Row>
          <hr className={styles.hrFooter} />
          <Row>
            <Link to="/how-to-buy" className="text-decoration-none">
              <h6 className={styles.link}>{t("how")}</h6>
            </Link>
          </Row>
          <Row>
            <Link to="/contact" className="text-decoration-none">
              <h6 className={styles.link}>{t("contact")}</h6>
            </Link>
          </Row>
          <Row>
            <Link to="/ipeh" className="text-decoration-none">
              <h6 className={styles.link}>IPEH Antifaxista</h6>
            </Link>
          </Row>
          <Row>
            <Link to="/crew" className="text-decoration-none">
              <h6 className={styles.link}>Kale Borroka Records</h6>
            </Link>
          </Row>
        </Col>

        <Col xs={12} lg={4} className={styles.colFooter}>
          <Row>
            <h3 className={styles.sectionFooter}>{t("shop")}</h3>
          </Row>
          <hr className={styles.hrFooter} />
          <Row>
            <Link to="/LP" className="text-decoration-none">
              <h6 className={styles.link}>LP</h6>
            </Link>
          </Row>
          <Row>
            <Link to="/EP" className="text-decoration-none">
              <h6 className={styles.link}>EP</h6>
            </Link>
          </Row>
          <Row>
            <Link to="/CD" className="text-decoration-none">
              <h6 className={styles.link}>CD</h6>
            </Link>
          </Row>
          <Row>
            <Link to="/fanzine" className="text-decoration-none">
              <h6 className={styles.link}>FANZINE</h6>
            </Link>
          </Row>
          <Row>
            <Link to="/Production" className="text-decoration-none">
              <h6 className={styles.link}>{t("prod")}</h6>
            </Link>
          </Row>
        </Col>
        <Col xs={12} lg={4} className={styles.colFooter}>
          <Row>
            <h3 className={styles.sectionFooter}>{t("network")}</h3>
          </Row>
          <hr className={styles.hrFooter} />
          {socialNetwork.map((link, index) => {
            <Row key={index}>
              <a href={link.link}>
                <img
                  src={link.logo}
                  alt="facebook icon"
                  className={styles.imageFooter}
                />
              </a>
            </Row>;
          })}
        </Col>
        <Col xs={12} lg={12} className={styles.friends}>
          <Row>
            <h3 className={styles.sectionFooter}>{t("friends")}</h3>
          </Row>
        </Col>
        <hr className={styles.hrFooter} />
        <Row className={styles.test}>
          {friend.map((item) => {
            return (
              <Col xs={12} lg={3}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.name}
                    alt={item.alt}
                    className={
                      item.name === "ff"
                        ? `${styles.imageFriend}`
                        : `${styles.imageFriend2}`
                    }
                  />
                </a>
              </Col>
            );
          })}
        </Row>
        <Row className={styles.endFooter}>
          <p className={styles.end}>
            2020 Kale Borroka Records All right reserved . 100% DIY !
          </p>
        </Row>
      </Container>
    </>
  );
}

export default withNamespaces()(Footer);
