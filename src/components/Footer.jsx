import React from "react";
import { Col, Row, Container } from "reactstrap";

import "./menu.css";

function Footer() {
    return (
        <div className="container-fluid">
            <Row>
                <Col className="col-md-3">
                    <Row>Oi!</Row>
                    <Row>Punk</Row>
                    <Row>HardCore</Row>
                </Col>
                <Col className="col-md-6">
                    <Row>Discogs</Row>
                    <Row>Ebay</Row>
                </Col>
                <Col className="col-md-3">
                    <Row>Facebook</Row>
                    <Row>Protonmail</Row>
                    <Row>Github</Row>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;
