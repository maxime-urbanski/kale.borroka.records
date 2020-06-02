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
} from "reactstrap";
import { Link } from "react-router-dom";

import lp from "./Lp";

function LpList() {
    return (
        <Container>
            <Col>
                <Row>
                    <h1 className="mt-3">Tous nos LP/10"</h1>
                </Row>
                <Row>
                    {lp.map((item) => {
                        return (
                            <Card className="m-5" key={item.id}>
                                <CardImg
                                    top
                                    width="100%"
                                    src={item.image}
                                    alt={item.name}
                                />
                                <CardBody>
                                    <CardTitle tag={Link} to={`/lp/${item.id}`}>
                                        {item.artiste}
                                    </CardTitle>
                                    <br />
                                    <CardTitle tag={Link} to={`/lp/${item.id}`}>
                                        {item.name}
                                    </CardTitle>
                                    <CardSubtitle>{item.format}</CardSubtitle>
                                    <CardText>Prix: {item.price}</CardText>
                                </CardBody>
                            </Card>
                        );
                    })}
                </Row>
            </Col>
        </Container>
    );
}

export default LpList;
