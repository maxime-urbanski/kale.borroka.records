import React from "react";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";

import fanzine from "./img/fanzine_4.png";
import ipeh from "./img/ipeh.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function divers() {
    return (
        <>
            <Container>
                <Breadcrumb listTag="div">
                    <BreadcrumbItem tag={Link} to={"/"}>
                        KALE BORROKA RECORDS
                    </BreadcrumbItem>
                    <BreadcrumbItem tactive tag="span">
                        DIVERS
                    </BreadcrumbItem>
                </Breadcrumb>
                <Row>
                    <Col>
                        <Link to="/Divers/fanzine">
                            <img
                                src={fanzine}
                                alt="fanzine"
                                width="300px"
                                className="m-5"
                            />
                        </Link>
                        <Link to="/Divers/IPEH">
                            <img
                                src={ipeh}
                                alt="ipeh antifaxista"
                                width="300px"
                                className="m-5"
                            />
                        </Link>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default divers;
