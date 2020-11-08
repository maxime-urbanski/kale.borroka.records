import React from "react";
import { Container } from "reactstrap";
import styles from "../../../Styles/home.module.css";
import Footer from "../../../Footer/Footer";
import How from "./How";
import Dispo from "./Dispo";

import LastArticle from "./LastArticle";
import { HandIndex } from "react-bootstrap-icons";

function Home() {
  return (
    <div>
      <Container fluid className={styles.sizeContainer}>
        <LastArticle />
        <hr className={styles.hrBuy} />
        <How />
      </Container>
      <div className={styles.Parrallax}></div>
      <hr className={styles.hrBuy2} />
      <Dispo />
      <Footer />
    </div>
  );
}

export default Home;
