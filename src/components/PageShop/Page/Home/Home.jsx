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
    <div>
      <>
        <LastArticle />
        <hr className={styles.hrBuy} />
        <How />
        <div className={styles.Parrallax}></div>
        <hr className={styles.hrBuy2} />
        <Dispo />
      </>
    </div>
  );
}

export default Home;
