import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

const ModalBuy = (props) => {
  const {
    buttonLabel,
    className,
    image,
    price,
    id,
    fullname
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="mt-3 " color="danger" onClick={toggle}>Comment Commander </Button>
      <Modal isOpen={modal} toggle={toggle} className="modal-lg" >
        <ModalHeader toggle={toggle}>{fullname}</ModalHeader>
        <ModalBody>
          <Col >
            <Row>
                <Col className="col-md-4 ">
                    <img src={image} alt={id} width="150px"/>
                    <h4 className="mt-4">Prix: {price}</h4>
                </Col>                
                <Col className="col-md-8">
                    <Row>
                        <h1 className="text-center" >Comment Commander </h1>
                    </Row>
                    <Row>
                        <p className="text-justify">Pour commander, rien de plus simple, envoie un mail à "kale.borroka.records@protonmail.com", avec les disques et/ou autres object que tu désires, et nous te recontactons au plus vite pour te donner le total de ta commande avec les frais de ports ! </p>
                    </Row>
                </Col>
            </Row>            
          </Col>
        </ModalBody>
        <ModalFooter>          
          <p className="secondary font-italic" >Kale Borroka Records</p>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalBuy;