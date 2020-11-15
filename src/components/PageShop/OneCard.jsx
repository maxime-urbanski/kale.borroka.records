import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/dispo.module.css";

const OneCard = ({ articleList, format }) => {
  return (
    <>
      <Link
        to={{
          pathname: `/${format}/${articleList.id}`,
          state: {
            image: articleList.image,
            name: articleList.name,
            artiste: articleList.artiste,
            price: articleList.price,
          },
        }}
        className={styles.link}
      >
        <article>
          <div className={styles.cardBody}>
            <img
              src={articleList.image}
              alt={articleList.artiste}
              className={styles.img}
            />
            <div className={styles.infoCard}>
              <span className={styles.infoPosition}>
                <h5>{articleList.artiste}</h5>
              </span>
              <span className={styles.infoPosition}>{articleList.name}</span>
              <span className={styles.infoPosition}>{articleList.price}</span>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
};

export default OneCard;
