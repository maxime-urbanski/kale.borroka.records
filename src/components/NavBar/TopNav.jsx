import React from "react";
import i18n from "../../i18n";

import styles from "../Styles/navbar.module.css";

import eus from "../Img/flag/eus.png";
import fr from "../Img/flag/fr.png";
import en from "../Img/flag/en.png";
import fb from "../Img/fb.png";
import yt from "../Img/yt.png";
import pt from "../Img/pt.png";

function TopNav() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.navTop}>
      <div className={styles.net}>
        <a
          href="https://www.facebook.com/kale.borroka.records/"
          target="blanck"
        >
          <img className={`${styles.flag} ml-4`} src={fb} alt="facebook flag" />
        </a>
        <hr className={styles.hr} />
        <a
          href="https://www.youtube.com/playlist?list=PLpM-GGKpwdHrT6RpoqsHT2HVGoPet2sB-"
          target="blanck"
        >
          <img className={styles.flag} src={yt} alt="logo youtube" />
        </a>
        <hr className={styles.hr} />
        <a href="mailto: kale.borroka.records@protonmail.com">
          <img className={styles.flag} src={pt} alt="protonmail logo" />
        </a>
      </div>

      <h3 className={styles.black}>Black Lives Matter</h3>
      <div className={styles.langage}>
        <img
          onClick={() => changeLanguage("fr")}
          className={styles.flag}
          src={fr}
          alt="french flag"
        />
        <hr className={styles.hr} />
        <img
          onClick={() => changeLanguage("eus")}
          className={styles.flag}
          src={eus}
          alt="euskadi flag"
        />
        <hr className={styles.hr} />
        <img
          onClick={() => changeLanguage("en")}
          className={styles.flag}
          src={en}
          alt="england flag"
        />
      </div>
    </div>
  );
}

export default TopNav;
