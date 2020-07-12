import React from "react";
import { Container } from "reactstrap";

import Footer from "../Footer/Footer";
import MiniArticle from "./MiniatureArticle ";

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
      <div className="Parrallax"></div>
      <Dispo />
      <Footer />
    </div>
  );
}

export default Home;
