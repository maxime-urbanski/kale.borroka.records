import React from "react";
import styles from "../../../Styles/home.module.css";
import How from "./How";
import Dispo from "./Dispo";

import LastArticle from "./LastArticle";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div style={{ overflow: "hidden" }}>
      <LastArticle />
      <div className={styles.Parrallax}></div>
      <How />
      <hr className={styles.hrBuy} />
      <Dispo />
    </div>
  );
}

export default Home;
