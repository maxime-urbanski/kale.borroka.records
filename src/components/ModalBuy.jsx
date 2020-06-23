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

const ModalBuy = (props) => {
    const { image, price, id, fullname } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button className="mt-3 " color="danger" onClick={toggle}>
                Comment Commander{" "}
            </Button>
            <Modal isOpen={modal} toggle={toggle} className="modal-lg">
                <ModalHeader toggle={toggle}>{fullname}</ModalHeader>
                <ModalBody>
                    <Col>
                        <Row>
                            <Col className="col-md-4 ">
                                <img src={image} alt={id} width="150px" />
                                <h4 className="badge badge-success text-wrap test pt-auto pb-auto bagdePrice mt-4 ml-2">
                                    Prix: {price}
                                </h4>
                            </Col>
                            <Col className="col-md-8">
                                <Row>
                                    <h1 className="text-center">
                                        Comment Commander{" "}
                                    </h1>
                                </Row>
                                <Row>
                                    <p className="text-justify">
                                        Pour commander, rien de plus simple,
                                        contact nous via la page{" "}
                                        <Link to="/Contact">Contact</Link>,
                                        <br />
                                        via{" "}
                                        <a
                                            href="https://www.facebook.com/kale.borroka.records/"
                                            target="blanck"
                                        >
                                            facebook
                                        </a>{" "}
                                        ou envoie un mail à <br />
                                        "kale.borroka.records@protonmail.com".
                                        avec les articles que tu désires. <br />
                                        Nous te recontactons au plus vite avec
                                        le total de ta commande, frais de ports
                                        compris !{" "}
                                    </p>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </ModalBody>
                <ModalFooter>
                    <p className="secondary font-italic">
                        Kale Borroka Records
                    </p>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ModalBuy;
