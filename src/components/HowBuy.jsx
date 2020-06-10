import React from "react";
import { Container, Col, Row } from "reactstrap";
import Footer from "./Footer";

function HowBuy() {
    return (
        <div>
            <Container>
                <Col>
                    <Row>
                        <h2 className="mt-5 mb-5 mx-auto">
                            Comment passer commande ?
                        </h2>
                    </Row>
                    <Row>
                        <p className="text-justify mb-5">
                            {" "}
                            Pour passer commande, il suffit d'envoyer un mail a
                            kale.borroka.records@protonmail.com en indiquant les
                            articles voulus. Une fois la commande reçue, nous
                            vous recontactons pour vous confirmez la
                            disponibilitée des articles, et le totale de la
                            commande, frais de port compris. Les commandes sont
                            traitées rapidement, et envoyer avec Chronopost.
                            Pour le paiement, nous acceptons Paypals et les
                            virements bancaires.
                        </p>
                    </Row>
                </Col>
            </Container>
            <Footer />
        </div>
    );
}

export default HowBuy;
