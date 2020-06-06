import React from "react";

import { Container, Row, Col } from "reactstrap";

import lp from "./Lp";
import "./menu.css";
import CardArticle from "./CardArticle";
import Footer from "./Footer";


function LpList() {
    return (
        <div>
        <Container>
            <Col>
                <Row className="position">
                    <h1 className="mt-3 position">Tous nos LP/10"</h1>
                    <Row className="position">
                        {lp.map((item) => {
                            return item.quantity > 0 ? (
                                <CardArticle {...item} />
                            ) : (
                                ""
                            );
                        })}
                    </Row>
                </Row>
            </Col>
        </Container>
        <Footer />
        </div>
    );
}

export default LpList;
