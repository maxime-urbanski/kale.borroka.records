import React from "react";
import { Col, Row, Container } from "reactstrap";

import "./menu.css";

import fb from "./img/fb.png"
import pt from "./img/pt.png"
import { Link } from "react-router-dom";

function Footer() {
    return (
        <Container fluid={true} className="bg-primary footer">
            <Row>
                <Col className="offset-1 pl-5 col-md-3">
                    <Row><h6 className="text-light  mt-5 mb-3" >Comment commander</h6></Row>
                    <Row><h6 className="text-light  mt-3 mb-3">Contact Nous !</h6></Row>
                    <Row><h6 className="text-light  mt-3 mb-3" tag={Link} to={"/kale-borroka-records"}>Kale Borroka Records</h6></Row>
                </Col>
                <Col className="col-md-7">
                    <Row>Discogs</Row>
                    <Row>Ebay</Row>
                </Col>
                <Col className="col-md-1 ">
                    <Row><a href="https://www.facebook.com/kale.borroka.records/" ><img src={fb} alt="facebook icon"className="mt-5 pr-2"  width="30%"/></a></Row>
                    <Row>< a href=""><img src={pt} alt="Protonmail icon" className="mt-5 pl-3" width="30%"/></a></Row>                    
                </Col>
            </Row>
            <Row><p className="mx-auto text-light">2020 Kale Borroka Records All right reserved . Made 100% DIY !</p></Row>            
        </Container>
    );
}

export default Footer;