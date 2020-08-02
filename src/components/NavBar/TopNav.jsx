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
    // const [clickFr, setClickFr] = useState(false);
    // const [clickEus, setClickEus] = useState(false);
    // const [clickEn, setClickEn] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // const handleClick = () => {
    //     setClickFr(true)
    //         ? setClickEn(false) && setClickEus(false)
    //         : setClickEus(true)
    //         ? setClickFr(false) && setClickEn(false)
    //         : setClickEn(true)
    //         ? setClickFr(false) && setClickEus(false)
    //         : "";
    // };

    return (
        <div className={styles.navTop}>
            <a
                href="https://www.facebook.com/kale.borroka.records/"
                target="blanck"
            >
                <img
                    className={`${styles.flag} ml-4`}
                    src={fb}
                    alt="facebook flag"
                />
            </a>
            <hr className={styles.hr} />
            <img className={styles.flag} src={yt} alt="euskadi flag" />
            <hr className={styles.hr} />
            <img className={styles.flag} src={pt} alt="england flag" />

            <h3 className={`${styles.black} mx-auto`}>Black Lives Matter</h3>

            <img
                onClick={() => changeLanguage("fr")}
                className={`${styles.flag} ml-4`}
                src={fr}
                alt="french flag"
            />
            <hr className={styles.hr} />
            <img
                onClick={() => changeLanguage("eus")}
                className={`${styles.flag} ml-4`}
                src={eus}
                alt="euskadi flag"
            />
            <hr className={styles.hr} />
            <img
                onClick={() => changeLanguage("en")}
                className={`${styles.flag} ml-4`}
                src={en}
                alt="england flag"
            />
        </div>
    );
}

export default TopNav;
