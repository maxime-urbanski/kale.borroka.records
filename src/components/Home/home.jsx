import React from "react";
import { Container } from "reactstrap";

import styles from "../Styles/home.module.css";

import Footer from "../Footer/Footer";

import How from "./How";
import Dispo from "./Dispo";

import LastArticle from "./LastArticle";

function Home() {
  return (
    <div>
      <Container fluid>
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
