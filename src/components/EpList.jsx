import React from "react";

import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
    Button,
} from "reactstrap";
import { Link } from "react-router-dom";


import "./menu.css";
import epArticle from "./EP";

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
                            <Card className="m-5 cardSize" key={item.id}>
                                <CardImg
                                    top
                                    width="100%"
                                    src={item.image}
                                    alt={item.name}
                                />
                                <CardBody>
                                    <CardTitle>
                                        <h5>{item.artiste}</h5>
                                    </CardTitle>
                                    <br />
                                    <CardTitle>{item.name}</CardTitle>
                                    <CardSubtitle>{item.format}</CardSubtitle>
                                    <CardText>Prix: {item.price}</CardText>
                                    <Button tag={Link} to={`/ep/${item.id}`}>
                                        More Info
                                    </Button>
                                </CardBody>
                            </Card>
                        );
                    })}
                </Row>
            </Col>
        </Container>
    );
}

export default EpList;