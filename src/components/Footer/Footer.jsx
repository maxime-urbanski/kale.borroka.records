import React, { useEffect } from "react";
import { Col, Row, Container } from "reactstrap";
import { withNamespaces } from "react-i18next";
import styles from "../Styles/footer.module.css";
import fb from "../Img/fb.png";
import pt from "../Img/pt.png";
import yt from "../Img/yt.png";
import ff from "../Img/friends/ff.png";
import dr from "../Img/friends/dr.jpeg";
import uws from "../Img/friends/uws.png";
import cr from "../Img/friends/Logo.png";
import { Link } from "react-router-dom";
function Footer({ t }) {
  const friend = [
    {
      name: ff,
      link: "https://www.fireandflames.com/",
      alt: "Fire and Flames Records",
    },
    {
      name: dr,
      link: "https://www.facebook.com/webzinedurerealite",
      alt: "Dure Réalité",
    },
    {
      name: uws,
      link: "https://www.facebook.com/UnitedWeStandRecords",
      alt: "United We Stand Records",
    },
    {
      name: cr,
      link: "https://www.facebook.com/cromrecords",
      alt: "Crom Records",
    },
  ];
  const network = [];
  useEffect(() => {
    window.scrollTo(0, 450);
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
            <a
              href="https://www.youtube.com/playlist?list=PLpM-GGKpwdHrT6RpoqsHT2HVGoPet2sB-"
              target="blanck"
            >
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
                      item.name === ff
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
