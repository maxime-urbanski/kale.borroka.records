import React from "react";

import { Container, Row, Col } from "reactstrap";

import lp from "./Lp";
import "./menu.css";
import CardArticle from "./CardArticle";

function LpList() {
    return (
        <Container>
            <Col>
                <Row className="position">
                    <h1 className="mt-3 position">Tous nos LP/10"</h1>
                </Row>
                <Row className="position">
                    {lp.map((item) => {
                        return item.quantity > 0 ? (
                            <CardArticle {...item} />
                        ) : (
                            ""
                        );
                    })}
                </Row>
            </Col>
        </Container>
    );
}

export default LpList;
