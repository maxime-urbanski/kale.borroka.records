import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import styles from "../Styles/modal.module.css";

const ModalBuy = (props) => {
  const { image, price, id, fullname, t } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button className="mt-3 " color="danger" onClick={toggle}>
        {t("how")}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="modal-lg">
        <ModalHeader toggle={toggle}>{fullname}</ModalHeader>
        <ModalBody>
          <Col>
            <Row>
              <Col xs={12} lg={4} className={styles.blocLeft}>
                <img src={image} alt={id} width="200px" />
              </Col>
              <Col xs={12} lg={8}>
                <Row>
                  <h1 className="text-center">{t("how")}</h1>
                </Row>
                <Row textAlign="center">
                  {t("texte1")}
                  <Link to="/contact">Contact</Link>,{t("texte2")}
                  {t("Libre")},{t("texte3")}
                  {t("texte4")}
                </Row>
              </Col>
            </Row>
          </Col>
        </ModalBody>
        <ModalFooter>
          <p className="secondary font-italic">Kale Borroka Records</p>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default withNamespaces()(ModalBuy);
