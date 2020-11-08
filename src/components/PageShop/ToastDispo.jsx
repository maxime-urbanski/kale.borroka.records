import React from "react";
import { Button, Row, Col, Toast, ToastBody } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "../Styles/dispo.module.css";
const ToastDispo = ({ articleList, format, t }) => {
  return (
    <Col xs={12} lg={4}>
      <Row className={styles.position}>
        <h3 className={styles.otherTitle}>{format}</h3>
      </Row>
      <Row className={styles.position}>
        <div>
          {articleList
            .map((item, index) => {
              return (
                <Toast className={styles.hvrGrow} key={index}>
                  <ToastBody>
                    <Link
                      className="text-decoration-none"
                      to={`/${item.format}/${item.id}`}
                    >
                      {item.artiste} - {item.name}
                    </Link>

                    {t("prix")}
                    {item.price}
                  </ToastBody>
                </Toast>
              );
            })
            .slice(0, 5)}
          <Link className="text-decoration-none" to="/LP">
            <Button color="warning" className="mb-5">
              {t("more")}
            </Button>
          </Link>
        </div>
      </Row>
    </Col>
  );
};
export default ToastDispo;
