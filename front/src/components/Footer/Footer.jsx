import React, { useEffect } from "react";
import { Col, Row, Container } from "reactstrap";
import { withNamespaces } from "react-i18next";
import styles from "../Styles/footer.module.css";
import { Link } from "react-router-dom";
import {
  aboutSection,
  friend,
  sectionShop,
  socialNetwork,
} from "../Function/link";
import SectionLinkFooter from "./SectionLinkFooter";

function Footer({ t }) {
  return (
    <>
      <Container fluid className={styles.footer}>
        <Col xs={12} lg={4} className={styles.colFooter}>
          <Row>
            <h3 className={styles.sectionFooter}>{t("propos")}</h3>
          </Row>
          <hr className={styles.hrFooter} />
          <SectionLinkFooter array={aboutSection} t={t}/>
        </Col>
        <Col xs={12} lg={4} className={styles.colFooter}>
          <Row>
            <h3 className={styles.sectionFooter}>{t("shop")}</h3>
          </Row>
          <hr className={styles.hrFooter} />
          <SectionLinkFooter array={sectionShop} t={t}/>
        </Col>
        <Col xs={12} lg={4} className={styles.colFooter}>
          <Row>
            <h3 className={styles.sectionFooter}>{t("network")}</h3>
          </Row>
          <hr className={styles.hrFooter} />
          {socialNetwork.map((link, index) => {
            return (
              <Row key={index}>
                <Link to={link.link}>
                  <img
                    src={link.logo}
                    alt="facebook icon"
                    className={styles.imageFooter}
                  />
                </Link>
              </Row>
            );
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
                      item.alt.includes("Fire and Flames Records")
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
