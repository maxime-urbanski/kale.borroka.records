import React from "react";
import { Container } from "reactstrap";

import styles from "./home.module.css";

import Footer from "../Footer/Footer";

import How from "./How";
import Dispo from "./Dispo";

import LastArticle from "./LastArticle";

function Home() {
    return (
        <div>
            <Container fluid>
                <LastArticle />
                <How />
            </Container>
            <div className={styles.Parrallax}></div>
            <Dispo />
            <Footer />
        </div>
    );
}

export default Home;
