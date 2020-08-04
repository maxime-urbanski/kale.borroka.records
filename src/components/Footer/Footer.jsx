import React from "react";
import { Col, Row, Container } from "reactstrap";

import styles from "../Styles/footer.module.css";

import "../menu.css";

import fb from "../Img/fb.png";
import pt from "../Img/pt.png";
import yt from "../Img/yt.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Container fluid className={`${styles.footer} bg-primary`}>
        <Col xs={12} lg={4} className={styles.colFooter}>
          <Row>
            <h3 className={styles.sectionFooter}>A Propos</h3>
          </Row>
          <hr className={styles.hrFooter} />
          <Row>
            <Link to="/how-to-buy" className="text-decoration-none">
              <h6 className={styles.link}>Comment commander</h6>
            </Link>
          </Row>
          <Row>
            <Link to="/contact" className="text-decoration-none">
              <h6 className={styles.link}>Contactez Nous !</h6>
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
            <h3 className={styles.sectionFooter}>Le shop</h3>
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
              <h6 className={styles.link}>Fanzine</h6>
            </Link>
          </Row>
          <Row>
            <Link to="/Production" className="text-decoration-none">
              <h6 className={styles.link}>Nos Productions</h6>
            </Link>
          </Row>
        </Col>
        <Col xs={12} lg={4} className={styles.colFooter}>
          <Row>
            <h3 className={styles.sectionFooter}>Réseaux Sociaux</h3>
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
            <a href="https://www.facebook.com/kale.borroka.records/">
              <img
                src={yt}
                alt="Youtube icon"
                className={styles.imageFooter}
              />
            </a>
          </Row>
          <Row>
            <a href="https://www.facebook.com/kale.borroka.records/">
              <img
                src={pt}
                alt="Protonmail icon"
                className={styles.imageFooter}
              />
            </a>
          </Row>
        </Col>
      </Container>
      <Container fluid className={styles.endFooter}>
        <p className={styles.end}>
          2020 Kale Borroka Records All right reserved . 100% DIY !
        </p>
      </Container>
    </>
  );
}

export default Footer;
