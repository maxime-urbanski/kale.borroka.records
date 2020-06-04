import React from "react";

import { Container, Row, Col } from "reactstrap";

import "./menu.css";
import epArticle from "./EP";
import CardArticle from "./CardArticle";

function EpList() {
    return (
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
    );
}

export default EpList;
