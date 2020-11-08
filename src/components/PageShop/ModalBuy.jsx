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
              <Col className="col-md-4 ">
                <img src={image} alt={id} width="150px" />
                <h4 className="badge badge-success text-wrap test pt-auto pb-auto bagdePrice mt-4 ml-2">
                  {price === "Libre"
                    ? `${t("libre")} : ${t("prix")} ${price} `
                    : ""}
                </h4>
              </Col>
              <Col className="col-md-8">
                <Row>
                  <h1 className="text-center">{t("how")}</h1>
                </Row>
                <Row>
                  Pour passer commande, il suffit d'envoyer un mail à
                  kale.borroka.records@protonmail.com, ou via{" "}
                  <Link to="/contact">Contact</Link>, en indiquant les articles
                  voulus. <br />
                  Si tu as des articles en "Prix Libre", n'oublie pas de nous
                  donner le montant que tu désires mettre pour l'objet en
                  question. <br />
                  Une fois la commande reçue, nous te recontactons pour te
                  confirmer la disponibilitée des articles, et le totale de la
                  commande, frais de port compris.
                  <br /> Les commandes sont traitées rapidement, et envoyer avec
                  Chronopost (où transporteur de ton choix), avec la possibilité
                  de remise en main propre. <br /> Pour le paiement, nous
                  acceptons Paypals et les virements bancaires.
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
