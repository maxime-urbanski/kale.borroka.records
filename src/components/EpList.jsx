import React from "react";

import { Container, Row, Col } from "reactstrap";

import "./menu.css";
import epArticle from "./EP";
import CardArticle from "./CardArticle";
import Footer from "./Footer";

function EpList() {
    return (
        <div>
        <Container>
            <Col>
                <Row className="position">
                    <h1 className="mt-3 position">Tous nos EP/CD</h1>
                </Row>
                <Row className="position">
                    {epArticle.map((item) => {
                        return item.quantity > 0 ? (
                            <CardArticle {...item} key={item.id} />
                        ) : (
                            ""
                        );
                    })}
                </Row>
            </Col>
        </Container>
        <Footer />
        </div>
    );
}

export default EpList;
