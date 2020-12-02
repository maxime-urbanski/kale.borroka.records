import React from "react";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";
import styles from "../Styles/footer.module.css";

function SectionLinkFooter({ array, t }) {
  return (
    <>
      {array.map((link) => {
        return (
          <Row>
            <Link to={link.link} className="text-decoration-none">
              <h6 className={styles.link}>{t(`${link.name}`)}</h6>
            </Link>
          </Row>
        );
      })}
    </>
  );
}
export default SectionLinkFooter;
