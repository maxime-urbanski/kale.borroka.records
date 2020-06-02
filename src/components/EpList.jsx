import React from "react";

import {
    Container,
    Row,
    Col    
} from "reactstrap";
import { Link } from "react-router-dom";


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
                        return (
                            <CardArticle {...item}/>
                        );
                    })}
                </Row>
            </Col>
        </Container>
    );
}

export default EpList;