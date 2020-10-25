import React, { useEffect } from "react";
import { Col, Row, Container } from "reactstrap";
import { withNamespaces } from "react-i18next";

import styles from "../Styles/footer.module.css";

import fb from "../Img/fb.png";
import pt from "../Img/pt.png";
import yt from "../Img/yt.png";
import ff from "../Img/ff.png";
import { Link } from "react-router-dom";

function Footer({ t }) {
  useEffect(() => {
    window.scrollTo(800, 0);
  }, []);
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
            <Link to="/Divers/IPEH" className="text-decoration-none">
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
            <Link to="/Divers/fanzine" className="text-decoration-none">
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
          <Row>
            <a href="https://www.facebook.com/kale.borroka.records/">
              <img
                src={fb}
                alt="facebook icon"
                className={styles.imageFooter}
              />
            </a>
          </Row>
          <Row>
            <a href="https://www.youtube.com/watch?v=7GfBrvbp8L0&amp;ist=PLpM-GGKpwdHrT6RpoqsHT2HVGoPet2sB-" target="blanck">
              <img src={yt} alt="Youtube icon" className={styles.imageFooter} />
            </a>
          </Row>
          <Row>
            <a href="mailto: kale.borroka.records@protonmail.com">
              <img
                src={pt}
                alt="Protonmail icon"
                className={styles.imageFooter}
              />
            </a>
          </Row>
        </Col>

        <Col xs={12} className={styles.friends}>
          <Row>
            <h3 className={styles.sectionFooter}>{t("friends")}</h3>
          </Row>
        </Col>
        <hr className={styles.hrFooter} />
        <Row className="mb-5">
          <Col xs={12} lg={3}>
            <a href="https://www.fireandflames.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={ff}
                alt="Fire and Flames Records"
                className={styles.imageFriend}
              />
            </a>
          </Col>
          <Col xs={12} lg={3}>
            <img src={ff} alt="" className={styles.imageFriend} />
          </Col>
          <Col xs={12} lg={3}>
            <img src={ff} alt="" className={styles.imageFriend} />
          </Col>
          <Col xs={12} lg={3}>
            <img src={ff} alt="" className={styles.imageFriend} />
          </Col>
        </Row>
      </Container>

      <Container fluid className={styles.endFooter}>
        <p className={styles.end}>
          2020 Kale Borroka Records All right reserved . 100% DIY !
        </p>
      </Container>
    </>
  );
}

export default withNamespaces()(Footer);
